# Testing Locally

How to preview your site on your computer before publishing.

## Prerequisites

- [Python 3.8+](https://www.python.org/downloads/)
- [Git](https://git-scm.com/downloads)

## Setup

Clone your repository and install dependencies:

```bash
git clone https://github.com/YOUR-ORG/YOUR-REPO.git
cd YOUR-REPO

# Create virtual environment (recommended)
python -m venv venv

# Activate it
source venv/bin/activate      # Mac/Linux
venv\Scripts\activate         # Windows

# Install dependencies
pip install -r requirements.txt
```

## Run the Development Server

```bash
mkdocs serve
```

Open **http://127.0.0.1:8000** in your browser.

The site automatically refreshes when you save changes to any file.

Press `Ctrl+C` to stop the server.

## Making Changes

1. Edit files in the `docs/` folder
2. Save the file
3. Check your browser - changes appear immediately
4. When happy, commit and push:

```bash
git add .
git commit -m "Description of changes"
git push
```

## Troubleshooting

**"mkdocs: command not found"**

Activate your virtual environment:
```bash
source venv/bin/activate
```

**"Port 8000 already in use"**

Use a different port:
```bash
mkdocs serve -a localhost:8001
```

**Changes not showing**

- Hard refresh your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Check for syntax errors in your markdown
