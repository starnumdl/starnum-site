# Starnum × Zavansay — Website

A static, five-page site for Starnum (parent brand) and Zavansay (its event-experience collection). Pure HTML/CSS/JS — no build tools, no backend, ready for GitHub Pages.

## Structure

```
/index.html          Home
/about.html           About
/catalog.html         Catalog — the six Zavansay collections
/shop.html            Shop — featured pieces, inquiry-based
/contact.html          Contact — inquiry form + direct contact options
/assets/style.css      Shared design system (tokens, layout, components)
/assets/script.js       Shared behaviour (nav, scroll reveal, form handoff)
/assets/images/         Favicon + space for real photography later
```

All links between pages use relative paths, so the folder works as-is whether it's opened locally, dropped into any static host, or served from a GitHub Pages project subpath.

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Upload everything in this folder to the root of the repository — `index.html` must sit at the repo root, not inside a subfolder.
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a branch," choose the branch (usually `main`) and the `/ (root)` folder, then save.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a few minutes.

No build step, no `npm install`, no server — the files are served as-is.

## Things to personalize before launch

A few placeholders are marked with `TODO` comments in the HTML and JS so they're easy to find:

- **WhatsApp number** — replace `00000000000` in the `https://wa.me/...` links (header, footer, and Contact page) with a real number in international format, no `+` or spaces.
- **Instagram handle** — replace `starnum.co` in the Instagram links with the real handle.
- **Inquiry email** — `hello@starnum.co` appears as a visible contact link and as the address the Contact form sends to (set near the top of `assets/script.js` as `ORDER_EMAIL`).
- **Photography** — `assets/images/` currently only holds the favicon. The line-icon system in the markup is a placeholder for real photography; collection and product cards are good candidates for an eventual photo treatment.

## Notes on the Contact form

Since the site is fully static, the inquiry form doesn't post anywhere. On submit, `assets/script.js` builds a `mailto:` link from the filled-in fields and hands the visitor off to their own email app with the message pre-written. If a more automated inbox is wanted later, the same form markup can be pointed at a form backend (e.g. Formspree) by changing the `<form>`'s behaviour in `script.js` without touching the HTML structure.
