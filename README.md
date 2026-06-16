# Starnum — Digital Catalogue V1

**Home · Head · Heart**

A static editorial catalogue built for GitHub Pages deployment.

---

## File Structure

```
starnum/
├── index.html    ← Full site (single-page)
├── style.css     ← All styles
├── main.js       ← Scroll reveal + navigation
└── README.md     ← This file
```

---

## GitHub Pages Deployment (5 steps)

1. **Create a repository** on GitHub named `starnum` (or your custom repo name)

2. **Upload these 3 files** to the root of the repository:
   - `index.html`
   - `style.css`
   - `main.js`

3. **Go to Settings → Pages** in your GitHub repo

4. Under **Source**, select `Deploy from a branch` → choose `main` branch → `/ (root)` → Save

5. Your site will be live at:
   `https://yourusername.github.io/starnum/`

---

## Connecting Your Custom Domain

1. In GitHub Settings → Pages → Custom domain, enter your domain (e.g. `starnum.co`)
2. At your domain registrar (e.g. Namecheap, GoDaddy), add these DNS records:

   **A Records** pointing to GitHub Pages IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   **CNAME Record** (for www):
   ```
   www → yourusername.github.io
   ```

3. Wait 10–30 min for DNS propagation. GitHub will issue an SSL certificate automatically.

---

## How to Update Your WhatsApp Number

In `index.html`, find every instance of:
```
href="https://wa.me/your-number?text=..."
```
Replace `your-number` with your full international phone number (no spaces or +), e.g.:
```
href="https://wa.me/18681234567?text=Hello..."
```

---

## How to Add a Real Image

Replace any visual placeholder `<div>` with an `<img>` tag:

**Before (placeholder):**
```html
<div class="collection-card__image placeholder peony">
  <span class="placeholder__text">Peony</span>
</div>
```

**After (real image):**
```html
<img class="collection-card__image" src="images/peony-cover.jpg" alt="Peony collection" />
```

Store images in an `/images/` folder in your repo.

---

## How to Add a New Collection

### 1. Add a card to the catalogue grid (in the `.collections-grid` div):

```html
<article class="collection-card reveal" data-target="newcollection">
  <div class="collection-card__image-wrap">
    <div class="collection-card__image placeholder">
      <span class="placeholder__text">New Collection</span>
    </div>
    <div class="collection-card__tag">Theme · Mood</div>
  </div>
  <div class="collection-card__body">
    <h3 class="collection-card__name">New Collection</h3>
    <p class="collection-card__emotion">Your emotional positioning line</p>
    <p class="collection-card__desc">A short description of what this collection means and who it's for.</p>
    <a href="#newcollection" class="card-link">Explore →</a>
  </div>
</article>
```

### 2. Add a detail section (in the `.collections` section):

```html
<div class="collection-detail" id="newcollection">
  <div class="collection-detail__inner">
    <div class="collection-detail__meta reveal">
      <span class="section-label">Theme · Mood</span>
      <div class="rule rule--gold"></div>
    </div>
    <div class="collection-detail__content">
      <div class="collection-detail__text reveal">
        <h2 class="collection-detail__title">New Collection</h2>
        <p class="collection-detail__emotion">Your emotional line here</p>
        <p class="collection-detail__body">First paragraph about this collection.</p>
        <p class="collection-detail__body">Second paragraph, optional.</p>
        <a href="https://wa.me/your-number?text=I%27d+like+to+enquire+about+New+Collection." class="btn btn--outline" target="_blank" rel="noopener">Enquire via WhatsApp</a>
      </div>
      <div class="collection-detail__visual reveal">
        <div class="visual-placeholder">
          <p>Image Coming Soon</p>
        </div>
        <div class="collection-detail__products">
          <p class="products-label">Featured in this collection</p>
          <div class="product-tags">
            <span class="product-tag">Tag One</span>
            <span class="product-tag">Tag Two</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="rule reveal"></div>
</div>
```

**Tip:** Add `collection-detail--reversed` to alternate which side the image appears on.

---

## How to Add a New Product to the Gallery

Find the `.gallery-grid` div and add:

```html
<article class="gallery-card reveal">
  <div class="gallery-card__image placeholder"></div>
  <div class="gallery-card__body">
    <span class="gallery-card__collection">Collection Name</span>
    <h4 class="gallery-card__name">Product Name</h4>
    <p class="gallery-card__desc">A short emotional description of this piece.</p>
  </div>
</article>
```

---

## Colour Reference

| Name       | Hex       | Used for              |
|------------|-----------|----------------------|
| Ivory      | `#F8F5F0` | Background           |
| Linen      | `#EDE7DC` | Cards, subtle panels  |
| Navy       | `#1A1A2E` | Primary text, buttons |
| Gold       | `#C4A882` | Accents, CTAs         |
| Gold Deep  | `#A08660` | Hover states, labels  |
| Burgundy   | `#7A3B3B` | Available for accents |
| Mist       | `#9A9490` | Secondary text        |

---

*Starnum Digital Catalogue V1 — built for GitHub Pages*
