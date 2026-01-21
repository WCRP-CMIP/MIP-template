# MIP Template Theme

A ready-to-use MkDocs template for Model Intercomparison Projects (MIPs) to quickly stand up their own documentation website using the modern [mkdocs-shadcn](https://github.com/asiffer/mkdocs-shadcn) theme.

## Features

- 🎨 Modern Shadcn theme with clean design
- 📚 Pre-configured documentation structure
- 🔄 Automatic deployment with GitHub Actions
- 📦 Versioning support with Mike
- 📝 Developer guides included
- 🚀 Ready to use - just clone and customize

## Quick Start

### 1. Use This Template

Click the "Use this template" button on GitHub, or clone the repository:

```bash
git clone https://github.com/WCRP-CMIP/MIP-template-theme.git your-mip-name
cd your-mip-name
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Customize Your Site

Edit `mkdocs.yml` to update your site information:

```yaml
site_name: Your MIP Name
site_description: Your MIP description
site_author: Your Organization
repo_url: https://github.com/your-org/your-repo
```

### 4. Preview Locally

```bash
mkdocs serve
```

Visit `http://127.0.0.1:8000/` to see your site.

### 5. Publish to GitHub Pages

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Go to **Settings** → **Pages** in your GitHub repository
4. Select the `gh-pages` branch as the source
5. Your site will be available at `https://your-username.github.io/your-repo/`

## Documentation Structure

```
MIP-template-theme/
├── docs/                          # All documentation files
│   ├── index.md                  # Home page
│   └── developers/               # Developer documentation
│       ├── getting-started.md    # Setup guide
│       └── updating-content.md   # Content guide
├── mkdocs.yml                    # MkDocs configuration
├── requirements.txt              # Python dependencies
└── .github/workflows/
    └── deploy.yml               # Auto-deployment workflow
```

## What's Included

### Main Page (docs/index.md)

- Introduction to MIPs and their importance
- Instructions for activating GitHub Pages
- Quick links and getting started guide

### Developer Documentation

- **Getting Started** - Setup and configuration guide
- **Updating Content** - How to add and modify pages

### GitHub Actions

Automatic deployment configured to:

- Build documentation on every push to `main`
- Deploy using Mike for version management
- Publish to GitHub Pages

## Customization

### Adding Pages

1. Create a new `.md` file in the `docs/` folder
2. Add it to the `nav` section in `mkdocs.yml`
3. Commit and push - it will be deployed automatically

### Changing Theme Colors

Edit `mkdocs.yml`:

```yaml
theme:
  name: shadcn
  palette:
    primary: blue    # Change to your preferred color
    accent: cyan
```

## Technologies Used

- [MkDocs](https://www.mkdocs.org/) - Static site generator
- [mkdocs-shadcn](https://github.com/asiffer/mkdocs-shadcn) - Modern theme
- [Mike](https://github.com/jimporter/mike) - Documentation versioning
- [GitHub Actions](https://github.com/features/actions) - CI/CD automation

## Support

For detailed instructions, see:

- [Developer Documentation](docs/developers/getting-started.md)
- [Updating Content Guide](docs/developers/updating-content.md)
- [MkDocs Documentation](https://www.mkdocs.org/)

## License

This template is provided as-is for use by the WCRP-CMIP community. 
