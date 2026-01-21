# MIP Documentation Template

[![Deploy](https://github.com/WCRP-CMIP/MIP-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/WCRP-CMIP/MIP-template/actions/workflows/deploy.yml)

A template for Model Intercomparison Projects to create documentation websites.

## Quick Start

1. Click **Use this template** → **Create a new repository**
2. Edit `mkdocs.yml` to set your site name and description
3. Enable GitHub Pages: Settings → Pages → gh-pages branch
4. Your site is live at `https://your-org.github.io/your-repo/`

## Configuration

Edit the top of `mkdocs.yml`:

```yaml
site_name: Your MIP Name
site_description: Your description
site_author: Your Organization
site_url: https://your-org.github.io/your-repo/
```

## Adding Content

Navigation is auto-generated from the folder structure:

```
docs/
├── index.md           → Home
├── about/             → About section
├── experiments/       → Experiments section
└── resources/         → Resources section
```

Just add folders and `.md` files. No configuration needed.

## Documentation

See the [For Developers](docs/developers/getting-started.md) section for full instructions.

---

Built by [Daniel Ellis](https://github.com/wolfiex) for the [WCRP-CMIP](https://wcrp-cmip.org) using the [shadcn](https://github.com/asiffer/mkdocs-shadcn) theme.
