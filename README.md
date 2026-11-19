# RAJESH.DEV — Developer Portfolio

A monochrome, production-grade developer portfolio built with React, Vite, and Tailwind CSS v4, featuring automated GitHub README analysis and an interactive AI assistant.

## Architecture & Features

- **Monochrome Design System:** High-contrast dark UI built with React, React Router, and Tailwind CSS.
- **Automated Repo & README Sync (`automation/sync_repos.py`):** Fetches repository metadata and `README.md` contents via the GitHub REST API, generating structured project summaries using local Ollama inference with automatic README parsing fallbacks.
- **CI/CD Automation (`.github/workflows/sync.yml`):** Daily scheduled GitHub Actions workflow that refreshes repository data automatically.
- **Interactive AI Assistant (`AIAssistant.jsx`):** Floating query assistant providing instant answers on projects, tech stack, and background.

## Local Development

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Sync GitHub projects (optional: start local Ollama first): `python automation/sync_repos.py`

## Deployment

Configured for SPA routing (`vercel.json`) and continuous deployment on Vercel.
