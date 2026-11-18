import urllib.request
import json
import os

USERNAME = "rajeshchauhdary"
GITHUB_API_URL = f"https://api.github.com/users/{USERNAME}/repos?sort=updated&per_page=10"
OLLAMA_API_URL = "http://localhost:11434/api/generate"
OLLAMA_MODEL = "llama3"  # Or your installed local model name

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

def analyze_with_ollama(repo_name, description, language):
    prompt = f\"\"
Analyze this GitHub repository and return ONLY a valid JSON object with keys: category, shortDesc, and highlights (array of 3 strings).
Repository Name: {repo_name}
Description: {description}
Primary Language: {language}
\"\""
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
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read().decode())
            return json.loads(result.get("response", "{}"))
    except Exception as e:
        print(f"Ollama inference offline or failed for {repo_name}: {e}")
        return None

if __name__ == "__main__":
    repos = fetch_repositories()
    print(f"Retrieved {len(repos)} repositories from GitHub.")
    
    processed_projects = []
    for repo in repos:
        if repo.get('fork') or repo.get('archived'):
            continue
            
        name = repo['name']
        desc = repo.get('description') or "No description provided."
        lang = repo.get('language') or "Unknown"
        url = repo['html_url']
        
        print(f"Processing repository: {name}...")
        ai_data = analyze_with_ollama(name, desc, lang)
        
        if not ai_data:
            ai_data = {
                "category": lang if lang != "Unknown" else "Software Engineering",
                "shortDesc": desc,
                "highlights": [f"Built using {lang}", "Maintained on GitHub", "Automated synchronization pipeline"]
            }
            
        processed_projects.append({
            "id": name.lower().replace(" ", "-"),
            "name": name,
            "category": ai_data.get("category", "Engineering"),
            "shortDesc": ai_data.get("shortDesc", desc),
            "fullDesc": desc,
            "tags": [lang] if lang != "Unknown" else ["Python", "React"],
            "github": url,
            "demo": repo.get('homepage') or "#",
            "highlights": ai_data.get("highlights", [])
        })
    
    os.makedirs("src/data", exist_ok=True)
    output_path = "src/data/generatedProjects.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(processed_projects, f, indent=2)
        
    print(f"Successfully generated project data at {output_path}!")
