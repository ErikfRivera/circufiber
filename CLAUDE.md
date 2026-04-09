# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Shopify theme** called "Flex" (v3.3.0) by Out of the Sandbox, customized for CircuFiber — an e-commerce store selling diabetic and wellness-focused socks. It is **not** a Node.js project — there is no package.json, no build step, and no test suite. The theme runs directly on Shopify's platform using Liquid templating.

## Development Commands

```bash
# Preview theme locally (requires Shopify CLI)
shopify theme dev

# Push theme to Shopify
shopify theme push

# Pull latest theme from Shopify
shopify theme pull

# Check theme for errors
shopify theme check
```

## Architecture

The codebase follows standard Shopify theme architecture with these directories:

- **`layout/`** — Master page wrappers. `theme.liquid` is the main layout; others support PageFly and Shogun page builders.
- **`sections/`** (106 files) — Modular, merchant-customizable page blocks. Each section has its own settings defined inline.
- **`snippets/`** (120 files) — Reusable Liquid partials rendered via `{% render 'snippet-name' %}`.
- **`templates/`** (65 files) — JSON templates that define which sections appear on each page type (product, collection, etc.).
- **`config/settings_schema.json`** — Global theme settings schema (colors, layout options, feature toggles).
- **`config/settings_data.json`** — Current active configuration values for the store.
- **`assets/`** — Compiled CSS, JS bundles, images, and fonts. Not source files — these are production-ready.
- **`locales/`** — Translation files for 7 languages (en, de, es, fr, pt-BR, pt-PT, zh-CN).

## Naming Conventions

- **Sections:** `{page}__{feature}.liquid` (e.g., `product__main.liquid`, `collection__main.liquid`)
- **Header/Footer variants:** `header-{style}.liquid`, `footer-{style}.liquid`
- **JavaScript modules:** `z__js{Feature}.js` in assets (e.g., `z__jsHeader.js`, `z__jsProduct.js`)
- **Backup files:** `*-hulkapps-backup.liquid` — created by HulkApps app, 14 backup files exist

## Key Patterns

**Dynamic CSS via Liquid:** Sections generate CSS using `{% capture section_css %}` and `{% style %}` blocks, injecting theme settings (colors, fonts) as CSS values.

**Section settings pattern:**
```liquid
{% assign id = section.id %}
{% assign setting = section.settings.setting_name %}
{% render 'snippet', param: value %}
```

**JavaScript:** Mix of webpack-bundled `app.js` and individual feature modules. Uses class-based Web Components (e.g., `<variant-selection>` custom element).

## Third-Party Integrations

The theme integrates with: Yoast SEO, Google Tag Manager (GTM-NGLB6CS), Hotjar, AnyTrack, PageFly, Shogun, BlackCart, HulkApps (product options/cart), Okendo (reviews), and Facebook Domain Verification. These are wired in through `layout/theme.liquid` and dedicated section/snippet files.

## Important Notes

- This is **not a git repository** — no .git directory exists.
- Assets in `assets/` are compiled/minified — edit Liquid files in sections/snippets, not the JS/CSS bundles directly.
- `settings_schema.json` is 2,562 lines and defines all customizable theme options — changes here affect the Shopify admin UI.
- Header has 4 layout variants (classic, centered, search-focus, vertical); footer has 3 (classic variants).
- Mega menu sections exist in 10 variants (`index__mega-menu.liquid` through `index__mega-menu-10.liquid`).
