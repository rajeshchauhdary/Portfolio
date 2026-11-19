import urllib.request
import json
import base64
import os
import re

USERNAME = "rajeshchauhdary"
GITHUB_API_URL = f"https://api.github.com/users/{USERNAME}/repos?sort=updated&per_page=10"
OLLAMA_API_URL = "http://localhost:11434/api/generate"
OLLAMA_MODEL = "llama3.2:3b"
IGNORED_REPOS = {"rajeshchauhdary"}

def fetch_repositories():
    print(f"Fetching repositories for {USERNAME} from GitHub REST API...")
    req = urllib.request.Request(
        GITHUB_API_URL,
        headers={"User-Agent": "Python-Portfolio-Sync"}
    )
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode())
    except Exception as e:
        print(f"Error fetching from GitHub API: {e}")
        return []

def fetch_readme(repo_name):
    url = f"https://api.github.com/repos/{USERNAME}/{repo_name}/readme"
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Python-Portfolio-Sync"}
    )
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            content = base64.b64decode(data.get("content", "")).decode("utf-8", errors="ignore")
            return content
    except Exception:
        return ""

def extract_summary_from_readme(readme_text, fallback_desc):
    if not readme_text:
        return fallback_desc or "Software engineering and machine learning repository."
    lines = [line.strip() for line in readme_text.splitlines()]
    clean_lines = []
    for line in lines:
        # Skip markdown headers, badges, HTML tags, code fences, and empty lines
        if not line or line.startswith(("#", "!", "[", "<", "```", "---", "===")):
            continue
        # Strip inline markdown links/formatting
        cleaned = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', line)
        cleaned = cleaned.replace("**", "").replace("`", "").strip()
        if len(cleaned) > 25:
            clean_lines.append(cleaned)
        if len(" ".join(clean_lines)) > 180:
            break
    summary = " ".join(clean_lines)
    return summary[:220].rsplit(" ", 1)[0] + "..." if len(summary) > 220 else (summary or fallback_desc or "Software engineering repository.")

def analyze_with_ollama(repo_name, description, language, readme_text):
    readme_excerpt = readme_text[:2500] if readme_text else "No README available."
    prompt = f"""
Analyze this GitHub repository and its README, then return ONLY a valid JSON object with keys: category, shortDesc (1-2 clear sentences), fullDesc (3-4 sentences), and highlights (array of 3 concise bullet strings).
Repository Name: {repo_name}
GitHub Description: {description}
Primary Language: {language}
README Content:
{readme_excerpt}
"""
    payload = {
        "model": OLLAMA_MODEL,
        "prompt": prompt,
        "stream": False,
        "format": "json"
    }
    
    req = urllib.request.Request(
        OLLAMA_API_URL,
        data=json.dumps(payload).encode('utf-8'),
        headers={"Content-Type": "application/json"}
    )
    try:
        with urllib.request.urlopen(req, timeout=45) as response:
            result = json.loads(response.read().decode())
            return json.loads(result.get("response", "{}"))
    except Exception as e:
        print(f"Ollama offline/unavailable for {repo_name}, using README fallback.")
        return None

if __name__ == "__main__":
    repos = fetch_repositories()
    print(f"Retrieved {len(repos)} repositories from GitHub.")
    
    processed_projects = []
    for repo in repos:
        name = repo['name']
        if repo.get('fork') or repo.get('archived') or name in IGNORED_REPOS:
            continue
            
        desc = repo.get('description') or ""
        lang = repo.get('language') or "Software"
        url = repo['html_url']
        
        print(f"Fetching README & processing: {name}...")
        readme_text = fetch_readme(name)
        readme_summary = extract_summary_from_readme(readme_text, desc)
        
        ai_data = analyze_with_ollama(name, desc, lang, readme_text)
        
        if not ai_data:
            ai_data = {
                "category": lang,
                "shortDesc": readme_summary,
                "fullDesc": readme_summary,
                "highlights": [
                    f"Developed primarily in {lang}",
                    "Documented with project README and source repository",
                    "Automatically synchronized from GitHub"
                ]
            }
            
        processed_projects.append({
            "id": name.lower().replace(" ", "-"),
            "name": name,
            "category": ai_data.get("category", lang),
            "shortDesc": ai_data.get("shortDesc", readme_summary),
            "fullDesc": ai_data.get("fullDesc", readme_summary),
            "tags": [lang] if lang != "Software" else ["Python", "React"],
            "github": url,
            "demo": repo.get('homepage') or "#",
            "highlights": ai_data.get("highlights", [])
        })
    
    os.makedirs("src/data", exist_ok=True)
    output_path = "src/data/projectsData.js"
    
    file_content = f"export const projectsData = {json.dumps(processed_projects, indent=2)};\n"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(file_content)
        
    print(f"Successfully generated project data at {output_path}!")
