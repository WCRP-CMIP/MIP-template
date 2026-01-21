# Updating Content

This guide explains how to add, modify, and organize content in your MIP documentation site.

## File Organization

All documentation files are stored in the `docs/` directory as Markdown (`.md`) files.

```
docs/
├── index.md           # Home page
├── developers/        # Developer documentation folder
│   ├── getting-started.md
│   └── updating-content.md
└── your-folder/       # Add your own folders
    └── your-page.md
```

## Adding a New Page

### 1. Create the Markdown File

Create a new `.md` file in the `docs/` directory or a subfolder:

```bash
# Create a new page
echo "# My New Page" > docs/my-page.md

# Or create in a folder
mkdir -p docs/about
echo "# About Our MIP" > docs/about/overview.md
```

### 2. Add to Navigation

Edit `mkdocs.yml` and add your page to the `nav` section:

```yaml
nav:
  - Home: index.md
  - About:
    - Overview: about/overview.md
  - My New Page: my-page.md
  - Developers:
    - Getting Started: developers/getting-started.md
    - Updating Content: developers/updating-content.md
```

### 3. Preview Your Changes

```bash
mkdocs serve
```

Visit `http://127.0.0.1:8000/` to see your changes.

## Markdown Basics

### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
```

### Links

```markdown
[Link text](https://example.com)
[Internal link](../other-page.md)
```

### Lists

```markdown
- Bullet point 1
- Bullet point 2
  - Nested item

1. Numbered item 1
2. Numbered item 2
```

### Code Blocks

````markdown
```python
def hello_world():
    print("Hello, World!")
```
````

### Images

```markdown
![Alt text](images/my-image.png)
```

Place images in `docs/images/` folder.

## Advanced Features

### Admonitions (Call-outs)

```markdown
!!! note
    This is a note admonition.

!!! warning
    This is a warning.

!!! tip
    This is a helpful tip.
```

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

## Publishing Changes

### Automatic Deployment

When you push changes to the `main` branch, GitHub Actions will automatically:

1. Build your documentation
2. Deploy it to GitHub Pages using mike
3. Make it available at your GitHub Pages URL

```bash
git add .
git commit -m "Update documentation"
git push origin main
```

### Manual Build

To manually build the site:

```bash
# Build static site
mkdocs build

# Deploy to GitHub Pages with versioning
mike deploy --push --update-aliases 0.1 latest
mike set-default --push latest
```

## Versioning with Mike

Mike allows you to maintain multiple versions of your documentation:

```bash
# Deploy a new version
mike deploy --push 1.0 latest

# List all versions
mike list

# Set default version
mike set-default --push latest

# Delete a version
mike delete --push 0.9
```

## Tips for Organizing Content

1. **Use folders** for related content (e.g., `tutorials/`, `reference/`, `about/`)
2. **Keep filenames simple** and use hyphens (e.g., `getting-started.md`, not `Getting Started.md`)
3. **Use descriptive headings** to improve navigation
4. **Link between pages** to create a connected documentation experience
5. **Add images** to the `docs/images/` folder

## Getting Help

- [MkDocs Documentation](https://www.mkdocs.org/)
- [Markdown Guide](https://www.markdownguide.org/)
- [PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/)
- [Mike Documentation](https://github.com/jimporter/mike)
