# Getting Started

How to create your own MIP documentation site from this template.

## Step 1: Create Your Repository

1. Go to the [MIP-template repository](https://github.com/WCRP-CMIP/MIP-template)
2. Click the green **Use this template** button
3. Select **Create a new repository**
4. Choose your organization and enter a repository name
5. Click **Create repository**

## Step 2: Configure Your Site

Edit `mkdocs.yml` directly on GitHub:

1. Click on `mkdocs.yml` in your new repository
2. Click the pencil icon (Edit this file)
3. Update these lines at the top:

```yaml
site_name: Your MIP Name
site_description: Brief description of your MIP
site_author: Your Organization
site_url: https://your-org.github.io/your-repo/
```

4. Click **Commit changes**

## Step 3: Enable GitHub Pages

1. Go to **Settings** in your repository
2. Click **Pages** in the left sidebar
3. Under "Build and deployment", select **Deploy from a branch**
4. Select **gh-pages** branch and **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://YOUR-ORG.github.io/YOUR-REPO/`

!!! note
    The gh-pages branch is created automatically after your first commit to main. If you don't see it, make a small edit to any file and commit it.

## Next Steps

- [Updating Content](updating-content.md) - How to edit pages and navigation
- [Testing Locally](testing-locally.md) - Preview changes on your computer
