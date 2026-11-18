import urllib.request
import json
import os

USERNAME = "rajeshchauhdary"
API_URL = f"https://api.github.com/users/{USERNAME}/repos?sort=updated&per_page=10"

def fetch_repositories():
    print(f"Fetching repositories for {USERNAME} from GitHub REST API...")
    req = urllib.request.Request(
        API_URL,
        headers={"User-Agent": "Python-Portfolio-Sync"}
    )
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            return data
    except Exception as e:
        print(f"Error fetching from GitHub API: {e}")
        return []

if __name__ == "__main__":
    repos = fetch_repositories()
    print(f"Successfully retrieved {len(repos)} repositories.")
    for repo in repos:
        print(f" - {repo['name']}: {repo.get('description', 'No description')} ({repo.get('language', 'Unknown')})")
