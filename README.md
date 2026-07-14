# Tousif Khan — Portfolio Landing Page

A single-page portfolio for Tousif Khan — **Translator & Localization Specialist** and **Vibe-Coder**.

## Features

- 🌓 **Dark/Light mode** — toggle persists via localStorage (`tk-portfolio-theme`)
- 🪟 **Glassmorphism design** — frosted glass cards, inputs, navigation
- 🌀 **Scroll animations** — fade-up/fade-left/fade-right via IntersectionObserver
- 📱 **Fully responsive** — hamburger mobile menu, fluid layouts
- 🔤 **Inter font** + Font Awesome 6 icons
- 🏷️ **OG + Twitter Cards** — social sharing meta tags
- 🔖 **SVG favicon** — inline, no external files
- ⚡ **No build step** — open `index.html` directly in any browser

## Sections

| Section | Content |
|---------|---------|
| **Hero** | Name, dual-role tagline, floating badges (EN↔BN, code, legal, glassmorphism) |
| **About** | Bio, stats (5+ years translation, 5 bundles, 2 languages) |
| **Work** | Dual identity tabs — Translation services & Vibe-Coding services |
| **Bundles** | 5 bundle cards (NovaForge AI, NexusAPI, FlowForge, DataPulse, VaultEdge) |
| **Skills** | 4 categories — Translation tools, Coding tools, Academic background, Languages |
| **Contact** | Form + info card with social links |

## Tech Stack

- **HTML5** — Semantic, accessible
- **CSS** — Tailwind CSS (utility) + custom glassmorphism design system
- **JS** — Vanilla JavaScript (theme, mobile menu, scroll reveal, identity tabs, smooth scroll)
- **Icons** — Font Awesome 6 via CDN
- **Font** — Inter (Google Fonts)

## Customization

1. **Colors & gradients** — edit `assets/css/style.css` (`--accent-*` variables)
2. **Content** — edit `index.html` directly
3. **Theme key** — change `tk-portfolio-theme` in `assets/js/main.js`
4. **Social links** — update the `href` attributes in the contact section

## File Structure

```
portfolio/
├── index.html
├── assets/
│   ├── css/style.css
│   └── js/main.js
└── README.md
```

## License

All rights reserved. © 2026 Tousif Khan. This portfolio is a personal brand asset and may not be copied, reproduced, or redistributed without permission.

*Note: The SaaS landing page templates (NovaForge AI, NexusAPI, FlowForge, DataPulse, VaultEdge) sold on Gumroad/other marketplaces are licensed separately under MIT.*
