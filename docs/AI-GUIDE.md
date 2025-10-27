# AI Coding Assistant Guide

This guide helps AI coding assistants quickly understand and work with this
project. Use this document to refresh context when starting a new session.

## Project Overview

**Project Name:** 117 Site **Type:** Static Website **Generator:** Eleventy
(11ty) v2.0.1 **Purpose:** GitHub Pages site with comprehensive code quality
gates

## Technology Stack

### Core

- **Eleventy (11ty)** - Static site generator
- **Nunjucks** - Primary templating engine
- **Node.js** - Runtime environment
- **npm** - Package manager

### Code Quality Tools

- **ESLint** - JavaScript linting
- **Prettier** - Code formatting (all file types)
- **Stylelint** - CSS linting
- **markdownlint** - Markdown linting
- **Husky** - Git hooks automation
- **lint-staged** - Run linters on staged files only

### Testing & Monitoring

- **Lighthouse CI** - Performance, accessibility, SEO, best practices

### CI/CD

- **GitHub Actions** - Automated testing and deployment
- **GitHub Pages** - Static site hosting

## Project Structure

```
117_site/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # CI/CD pipeline configuration
├── .vscode/
│   ├── extensions.json        # Recommended VS Code extensions
│   ├── settings.json          # Workspace settings
│   ├── tasks.json             # Build/run tasks
│   └── launch.json            # Debug configurations
├── src/                       # Source files
│   ├── _data/                 # Global data (JSON, JS)
│   │   └── site.json          # Site-wide metadata
│   ├── _includes/             # Reusable components/partials
│   │   └── page-header.njk    # Page header partial
│   ├── _layouts/              # Page layout templates
│   │   └── base.njk           # Base layout (all pages use this)
│   ├── assets/                # Static assets
│   │   ├── css/
│   │   │   └── main.css       # Main stylesheet
│   │   ├── js/
│   │   │   └── main.js        # Main JavaScript
│   │   └── images/            # Images directory
│   ├── index.md               # Homepage
│   └── about.md               # About page
├── _site/                     # Build output (git-ignored)
├── docs/
│   └── AI-GUIDE.md            # This file
├── .eleventy.js               # 11ty configuration
├── .eslintrc.json             # ESLint configuration
├── .prettierrc                # Prettier configuration
├── .stylelintrc.json          # Stylelint configuration
├── .lintstagedrc.json         # lint-staged configuration
├── .editorconfig              # Editor configuration
├── .markdownlint.json         # Markdownlint configuration
├── lighthouserc.json          # Lighthouse CI configuration
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## Available npm Scripts

| Script                | Command                                        | Purpose                           |
| --------------------- | ---------------------------------------------- | --------------------------------- |
| `npm start`           | `eleventy --serve`                             | Start dev server with live reload |
| `npm run build`       | `eleventy`                                     | Build site for production         |
| `npm run clean`       | `rm -rf _site`                                 | Clean build directory             |
| `npm test`            | `npm run lint && npm run build`                | Run all checks and build          |
| `npm run lint`        | Run all linters                                | Check all code quality            |
| `npm run lint:js`     | `eslint "src/**/*.js" ".eleventy.js"`          | Lint JavaScript files             |
| `npm run lint:css`    | `stylelint "src/**/*.css"`                     | Lint CSS files                    |
| `npm run lint:md`     | `markdownlint "**/*.md" --ignore node_modules` | Lint Markdown files               |
| `npm run lint:format` | `prettier --check`                             | Check code formatting             |
| `npm run format`      | `prettier --write`                             | Auto-format all files             |
| `npm run lighthouse`  | `lhci autorun`                                 | Run Lighthouse CI checks          |

## Key Configuration Files

### .eleventy.js (Eleventy Configuration)

```javascript
// Key settings:
// - Input: src/
// - Output: _site/
// - Template formats: md, njk, html
// - Template engine: Nunjucks
// - Copies assets/css, assets/js, assets/images to output
// - Watches CSS files for changes
```

### lighthouserc.json (Lighthouse CI)

```json
// Performance budgets:
// - Performance: 90+
// - Accessibility: 90+
// - Best Practices: 90+
// - SEO: 90+
// - FCP: < 2000ms
// - LCP: < 2500ms
// - CLS: < 0.1
// - TBT: < 300ms
```

## Code Standards

### JavaScript

- ES2021 syntax
- ESLint enforces consistent style
- No console statements (use sparingly with eslint-disable)
- Prefer const over let, no var
- Single quotes preferred

### CSS

- BEM-like naming (flexible)
- CSS custom properties for theming
- Mobile-first responsive design
- Stylelint enforces standard CSS

### HTML/Templates

- Nunjucks templating syntax
- Semantic HTML5
- Accessible markup (ARIA when needed)
- Responsive meta tags

### Markdown

- Front matter for metadata
- Markdown with Nunjucks processing
- No line length limit (MD013 disabled)

## Templating Guide

### Page Creation

1. Create new `.md` or `.njk` file in `src/`
2. Add front matter:

```yaml
---
layout: base.njk
title: Page Title
description: Page description for meta tags
---
```

3. Content follows front matter
4. File generates at `/{filename}/index.html`

### Using Data

Global data from `src/_data/site.json`:

```njk
{{ site.title }}
{{ site.description }}
{{ site.author }}
```

### Using Includes

```njk
{% include "page-header.njk" %}
```

### Using Filters

```njk
{{ date | readableDate }}  {# Format dates #}
{% year %}                 {# Current year #}
```

## Pre-commit Hooks

Husky runs `lint-staged` on every commit:

1. ESLint fixes JS files
2. Stylelint fixes CSS files
3. Prettier formats all files
4. Commit fails if any checks fail

**To bypass** (not recommended): `git commit --no-verify`

## CI/CD Pipeline

### On Push/PR to main:

1. **Quality Checks** - ESLint, Stylelint, Markdownlint, Prettier
2. **Build** - Generate static site
3. **Lighthouse CI** - Performance and accessibility tests
4. **Deploy** - Push to GitHub Pages (main branch only)

### Pipeline Stages

- ✅ All checks must pass to proceed
- 🚫 Any failure blocks deployment
- 📊 Lighthouse results available in GitHub Actions

## VS Code Integration

### Recommended Extensions

Install when prompted or manually:

- ESLint
- Prettier
- Stylelint
- Markdownlint
- Markdown All in One
- Auto Close/Rename Tag
- Path Intellisense
- TODO Highlight
- Code Spell Checker

### Features Enabled

- ✨ Format on save (Prettier)
- 🔧 Auto-fix on save (ESLint, Stylelint)
- 📏 Rulers at 80 and 120 characters
- 🗂️ File associations (.njk as HTML)

### VS Code Tasks

Press `Cmd+Shift+P` → "Run Task":

- Start Dev Server
- Build Site
- Run All Linters
- Format All Files
- Run Lighthouse CI
- Run Tests
- Clean Build

## Common Tasks for AI Assistants

### Adding a New Page

1. Create `src/page-name.md`
2. Add front matter with layout, title, description
3. Write content in Markdown
4. Test with `npm start`
5. Commit (pre-commit hooks run automatically)

### Creating a New Component

1. Create `src/_includes/component-name.njk`
2. Write Nunjucks template
3. Use in pages: `{% include "component-name.njk" %}`

### Adding Global Data

1. Create/edit JSON file in `src/_data/`
2. Access as `{{ filename.property }}`

### Styling Changes

1. Edit `src/assets/css/main.css`
2. Use CSS custom properties for theming
3. Follow BEM-ish naming
4. Ensure mobile-responsive

### JavaScript Changes

1. Edit `src/assets/js/main.js`
2. Follow ESLint rules
3. Test in browser
4. Use modern ES syntax

## Troubleshooting

### Build Fails

```bash
npm run clean && npm run build
```

### Linting Errors

```bash
npm run lint        # Check all
npm run format      # Auto-fix formatting
```

### Pre-commit Hook Issues

```bash
npm run format      # Format files
git add .           # Stage changes
git commit          # Try again
```

### Lighthouse Failures

- Check performance budgets in `lighthouserc.json`
- Optimize images, CSS, JS
- Test locally: `npm run build && npm run lighthouse`

## GitHub Pages Setup

### First-Time Setup

1. Push code to GitHub
2. Go to repository Settings → Pages
3. Source: GitHub Actions
4. Wait for deployment (check Actions tab)

### Updating Site URL

Edit `src/_data/site.json`:

```json
{
  "site": {
    "url": "https://yourusername.github.io/117_site"
  }
}
```

## Development Workflow

### Standard Workflow

1. `npm start` - Start dev server
2. Edit files in `src/`
3. Browser auto-refreshes
4. `git add .` - Stage changes
5. `git commit -m "message"` - Pre-commit hooks run
6. `git push` - CI/CD pipeline runs

### Quality Checks Workflow

1. Make changes
2. `npm run format` - Auto-format
3. `npm test` - Run all checks
4. Fix any errors
5. Commit and push

## Performance Targets

### Lighthouse Scores

- **Performance:** 90+
- **Accessibility:** 90+
- **Best Practices:** 90+
- **SEO:** 90+

### Core Web Vitals

- **FCP:** < 2s
- **LCP:** < 2.5s
- **CLS:** < 0.1
- **TBT:** < 300ms

## Quick Reference

### File Extensions

- `.md` - Markdown content pages
- `.njk` - Nunjucks templates
- `.html` - Static HTML
- `.11ty.js` - JavaScript templates (advanced)

### Template Engines Supported

- Nunjucks (primary)
- Markdown
- HTML
- Liquid
- JavaScript

### Front Matter Variables

- `layout` - Template to use
- `title` - Page title
- `description` - Meta description
- `permalink` - Custom URL (optional)

### Key Directories

- `src/` - All source files
- `_site/` - Built site (git-ignored)
- `src/_includes/` - Partials/components
- `src/_layouts/` - Page layouts
- `src/_data/` - Global data
- `src/assets/` - CSS, JS, images

## Best Practices

### For AI Assistants

1. ✅ Always run `npm start` to test changes
2. ✅ Use `npm run format` before committing
3. ✅ Check `npm test` passes locally
4. ✅ Follow existing code patterns
5. ✅ Keep responsive design in mind
6. ✅ Maintain accessibility standards
7. ✅ Update this guide when adding major features

### Code Quality

- Write semantic HTML
- Use CSS custom properties for theming
- Keep JavaScript minimal and progressive
- Optimize images before adding
- Test on mobile and desktop
- Ensure WCAG 2.1 AA compliance

## Additional Resources

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Lighthouse CI Documentation](https://github.com/GoogleChrome/lighthouse-ci)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Last Updated:** October 27, 2025 **Version:** 1.0.0

**Note:** This guide is designed to give AI coding assistants complete context
quickly. Update this file when making significant architectural changes.
