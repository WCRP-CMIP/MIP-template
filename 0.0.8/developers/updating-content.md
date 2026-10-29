# Updating Content

How to edit pages and add new content.

## Editing Pages

1. Navigate to any `.md` file in the `docs/` folder on GitHub
2. Click the pencil icon to edit
3. Make your changes
4. Click **Commit changes**

The site rebuilds automatically within a few minutes.

## Navigation

Navigation is generated automatically from your folder structure. No configuration needed.

```
docs/
├── index.md              → Home (always first)
├── about/                → "About" section
│   ├── overview.md       →   Overview page
│   ├── committee.md      →   Committee page
│   └── publications.md   →   Publications page
├── experiments/          → "Experiments" section
│   ├── design.md
│   └── data.md
└── resources/            → "Resources" section
    ├── links.md
    └── faqs.md
```

**How it works:**

- Folders become navigation sections
- Files become pages within sections
- `index.md` in a folder becomes the section landing page
- Pages are sorted alphabetically (use number prefixes like `01-first.md` to control order)

## Adding a New Page

1. Create a `.md` file in the appropriate folder
2. Commit and push

That's it. The navigation updates automatically.

## Adding a New Section

1. Create a new folder in `docs/`
2. Add `.md` files inside it
3. Commit and push

## Adding Images

### From a URL

Link directly to an external image:

```markdown
![Alt text](https://example.com/image.png)
```

### Local Images

1. Add your image to `docs/assets/`
2. Reference it in your Markdown:

```markdown
![My Image](assets/my-image.png)
```

From a subfolder, use relative paths:

```markdown
![My Image](../assets/my-image.png)
```

### Image with Size

Use HTML for more control:

```html
<img src="assets/logo.png" alt="Logo" width="200">
```

## Changing the Site Icon

To add a custom logo/icon to your site:

1. Add your icon file to `docs/assets/` (e.g., `logo.svg` or `logo.png`)
2. Edit `mkdocs.yml` and add under the `theme` section:

```yaml
theme:
  name: shadcn
  icon: assets/logo.svg
```

SVG format is recommended for crisp display at any size.

## Including HTML Pages

You can include raw HTML files alongside Markdown:

1. Create an `.html` file in `docs/` (e.g., `docs/custom-page.html`)
2. The file will be copied as-is to the built site
3. Link to it from other pages: `[Custom Page](custom-page.html)`

For HTML that should use the site template, use Markdown with embedded HTML instead:

```markdown
# My Page

<div class="custom-content">
  <p>HTML content here</p>
</div>
```

The `md_in_html` extension is enabled, so you can mix Markdown inside HTML blocks by adding `markdown="1"`:

```html
<div class="wrapper" markdown="1">

## This is Markdown

Inside an HTML div.

</div>
```

## Page Titles

The page title comes from the first `# Heading` in your file:

```markdown
# This Becomes the Page Title

Content starts here...
```

## Markdown Help

**Basic formatting:**

| Syntax | Result |
|--------|--------|
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `[text](https://...)` | link |
| `![alt](image.png)` | image |

**Resources:**

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/) - Basic syntax
- [MkDocs Documentation](https://www.mkdocs.org/user-guide/writing-your-docs/) - MkDocs features
- [Tables Generator](https://www.tablesgenerator.com/markdown_tables) - Create tables easily

## Next Steps

- [Testing Locally](testing-locally.md) - Preview changes before publishing
