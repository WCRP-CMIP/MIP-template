# Developer Guide: Getting Started

This guide will help you set up and customize this MkDocs template for your MIP (Model Intercomparison Project).

## Prerequisites

Before you begin, ensure you have:

- Python 3.8 or higher installed
- Git installed
- A GitHub account
- Basic knowledge of Markdown

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/WCRP-CMIP/MIP-template-theme.git
cd MIP-template-theme
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

This will install:

- **mkdocs** - The static site generator
- **mkdocs-shadcn** - The modern Shadcn theme
- **mike** - For versioning your documentation
- **pymdown-extensions** - Additional Markdown features

### 3. Preview Locally

To preview your site locally:

```bash
mkdocs serve
```

Then open your browser to `http://127.0.0.1:8000/`

The site will automatically reload when you make changes to the documentation files.

## Project Structure

```
MIP-template-theme/
├── docs/               # Documentation source files
│   ├── index.md       # Home page
│   └── developers/    # Developer documentation
├── mkdocs.yml         # MkDocs configuration
├── requirements.txt   # Python dependencies
└── .github/
    └── workflows/     # GitHub Actions for auto-deployment
```

## Configuration

### Updating Site Information

Edit `mkdocs.yml` to customize your site:

```yaml
site_name: Your MIP Name        # Change this to your MIP name
site_description: Your description
site_author: Your organization
repo_url: https://github.com/your-org/your-repo
repo_name: your-org/your-repo
```

### Theme Customization

The Shadcn theme can be customized in `mkdocs.yml`:

```yaml
theme:
  name: shadcn
  palette:
    primary: blue    # Change color scheme
    accent: cyan
```

## Next Steps

- [Learn how to update content](updating-content.md)
- Read the [MkDocs documentation](https://www.mkdocs.org/)
- Explore [mkdocs-shadcn theme options](https://github.com/asiffer/mkdocs-shadcn)
- Learn about [mike versioning](https://github.com/jimporter/mike)
