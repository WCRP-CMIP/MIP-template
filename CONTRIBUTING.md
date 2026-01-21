# Contributing to MIP-template-theme

Thank you for your interest in contributing to this project! This document provides guidelines for contributing to the MIP-template-theme repository.

## Important: Development Workflow

**⚠️ Always develop on a branch and test locally before pushing to main.**

This repository uses automated version bumping and deployment. Each commit to the `main` branch triggers:
- Automatic version bumps (patch increases)
- Documentation deployment via GitHub Actions
- Creation of new versioned documentation with mike

To avoid unnecessary version increments and deployments, please follow these guidelines:

## Development Process

### 1. Create a Feature Branch

Always create a new branch for your work:

```bash
git checkout -b your-feature-branch
```

Use descriptive branch names such as:
- `feature/add-new-section`
- `fix/broken-link`
- `docs/update-installation`

### 2. Make Your Changes

Make your changes in the feature branch. You can commit as many times as needed:

```bash
git add .
git commit -m "Descriptive commit message"
```

### 3. Test Locally

Before pushing or creating a pull request, **always test your changes locally**:

#### For Documentation Changes

If you're making documentation changes, test the mkdocs build locally:

```bash
# Install dependencies
pip install -r requirements.txt

# Serve the documentation locally
mkdocs serve

# Visit http://127.0.0.1:8000 in your browser to preview
```

#### For Configuration Changes

If you're modifying configuration files, validate them:
- Check YAML syntax
- Test any scripts or workflows locally if possible
- Review changes carefully before committing

### 4. Push Your Branch

Once you've tested your changes locally, push your feature branch:

```bash
git push origin your-feature-branch
```

### 5. Create a Pull Request

1. Go to the repository on GitHub
2. Create a Pull Request from your feature branch to `main`
3. Provide a clear description of your changes
4. Wait for review and approval

### 6. Merge to Main

Once approved, your PR will be merged to `main`, which will trigger:
- Automatic version bump (patch increment)
- Documentation deployment
- Version tagging with mike

## Why This Workflow Matters

Each commit to `main` creates a new version of the documentation. By working on feature branches:
- You can make multiple commits without creating multiple versions
- You can test thoroughly before deployment
- The version history remains clean and meaningful
- Deployments only happen for completed, reviewed work

## Questions or Issues?

If you have questions about the contribution process, please open an issue or reach out to the maintainers.

Thank you for contributing! 🎉
