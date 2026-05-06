# Local Business Template

A polished, configurable website template for local businesses — salon, trades, food, and beyond. Built with Next.js App Router, Framer Motion, and Tailwind.

---

## Config files

The template is split into three config files, each with a distinct purpose.

### `config/design.config.ts`
The design system layer. Contains:
- All TypeScript types (`Archetype`, `SiteConfig`, `ClientSiteConfig`, etc.)
- `PALETTES` — 6 color palettes (`stone`, `ink`, `sage`, `fire`, `ocean`, `rose`)
- `FONT_PAIRS` — 5 font combinations (`fraunces`, `instrument`, `bricolage`, `dmserif`, `geist`)
- `getTokenVars()` — converts design settings to CSS custom properties
- `ClientSiteConfig` — the `SiteConfig` type minus the archetype switcher key

**Never edit this file for a client project.** Changes here affect the design system itself.

### `config/archetypes.ts`
Demo data only — not used in client deployments. Contains:
- `ARCHETYPES` — the three demo businesses (salon, plumber, taco) used by `/demo`
- `DEFAULT_CONFIG` — the demo's starting design settings

**Delete or ignore this file** once you are done with the demo. It is not imported by the client page.

### `config/client.config.ts`
The single source of truth for a real client deployment. Edit this file and nothing else for typical client work. Contains:
- `CLIENT_CONFIG.meta.isDemoMode` — gates the `/demo` route
- `CLIENT_CONFIG.site` — design settings (palette, font, radius, logo style, etc.)
- `CLIENT_CONFIG.data` — all client content (name, copy, services, hours, images, etc.)
- `STARTER_TEMPLATES` — pre-structured starting points for each archetype type

---

## Per-client setup (clone → deployed)

**1. Pick an archetype**

Open `config/client.config.ts`. Find `STARTER_TEMPLATES` at the bottom and copy the block that matches your client's business type (`salon`, `plumber`, or `taco`) into `CLIENT_CONFIG.data`.

**2. Enable demo mode while building**

```ts
meta: { isDemoMode: true }
```

With `isDemoMode: true`, visiting `/demo` shows the full archetype switcher so you can preview palettes and fonts interactively. The client-facing `/` route always renders `CLIENT_CONFIG`.

**3. Fill in `CLIENT_CONFIG.site`**

| Field | Options | What it does |
|---|---|---|
| `palette` | `stone` `ink` `sage` `fire` `ocean` `rose` | Color scheme |
| `fontPair` | `fraunces` `instrument` `bricolage` `dmserif` `geist` | Display + body fonts |
| `radius` | `0` – `2` (default `1`) | Border radius multiplier |
| `logoKind` | `text` `icon` `image` | Logo lockup style |
| `filledImagery` | `true` / `false` | Real photos vs. wireframe placeholders |
| `menuVariant` | `tabs` `accordion` | Menu section layout (if `menu` is non-null) |
| `menuItemsPictures` | `true` / `false` | Per-item photos in the menu |

**4. Fill in `CLIENT_CONFIG.data`**

Replace every `ALL_CAPS` placeholder with real content. Key fields:

- `name` — business name (appears in nav, footer, map card)
- `tagline` — short descriptor (appears in footer)
- `logoMark` — any [Lucide icon](https://lucide.dev/icons) name (used when `logoKind` is `"icon"`)
- `hero` — eyebrow, headline, subheadline, CTA button text and icon
- `about` — title, body paragraph, three trust badges
- `sectionHeadings` — editable h2 headings and subheadings for services, gallery, testimonials, hours, and contact
- `services` — array of service cards (icon, title, description, price)
- `galleryCaptions` — six captions for the photo grid
- `testimonials` — three review cards (quote, name, meta, star rating)
- `hours` — seven `[day, hours]` pairs; use `"Closed"` or `"Emergency only"` as values
- `contact` — phone, email, address
- `menu` — set to `null` if no menu, or provide `{ sectionTitle, categories }` for a food business
- `images` — URLs for hero (1600px), about (900px portrait), six gallery images (600px each), and testimonial avatar (200px square)

**5. Replace images**

All placeholder image URLs point to Unsplash. Replace them with the client's real photos. Recommended workflow: upload to Cloudinary or similar CDN and paste the URLs in.

**6. Update page metadata**

Open `app/layout.tsx` and update `metadata.title` and `metadata.description` to match the client's business.

**7. Disable demo mode before deploying**

```ts
meta: { isDemoMode: false }
```

With `isDemoMode: false`, visiting `/demo` redirects to `/`. The TweaksPanel is not rendered on the client page. Delete `STARTER_TEMPLATES` from `client.config.ts` to keep things tidy.

---

## Routes

| Route | What it renders |
|---|---|
| `/` | Client-facing site using `CLIENT_CONFIG` — no TweaksPanel |
| `/demo` | Archetype switcher demo (only when `isDemoMode: true`, otherwise redirects to `/`) |

---

## Dev

```bash
npm run dev    # start dev server at localhost:3000
npm run build  # production build
```
