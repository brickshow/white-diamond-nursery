# White Diamond Nursery redesign

Next.js App Router + React + TypeScript implementation of the supplied homepage mockup.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Production

```sh
npm run build
npm start
```

Deploy this repository as a Next.js project on Vercel, or a Node.js host. No API keys are required for the current version.

## Implemented

- Responsive homepage: hero, category tiles, story, featured collection, benefits, visit/contact and footer.
- Mobile navigation, catalog search, category filters and empty search state.
- Accessible form labels, keyboard focus, reduced motion and optimized local images.
- Phone, email and Google Maps direction links.
- Contact and mailing-list forms prepare email drafts via `mailto:`. They do not submit to a server or claim to send messages automatically.

## Content and launch notes

- Contact details and opening hours are taken from https://www.whitediamondnursery.com/.
- Featured products and illustrative prices come from the supplied concept, not verified live inventory. A visible note identifies this. Confirm or replace these values in `lib/content.ts` before launch.
- Category and product images come from the supplied mockup. The hero is reconstructed from that reference as a clean full-width background. Text, navigation and controls are actual HTML.
- Company branding uses transparent PNG versions based on the supplied company logo. The header uses dark small lettering for contrast on cream; the footer retains light small lettering. The header has no colored logo plate.
- Pages: Home, Plants, Flowers, Palms, Pottery, About, Contact, and All Collections. Navigation, catalog tabs and inquiry links connect these routes. Search opens All Collections with matching products. Product inquiries prefill the Contact message. This is an inquiry catalog, with no online checkout.
- Search-engine indexing is disabled while this is a review build. Change `robots` in `app/layout.tsx` after approval.
- No existing live website, DNS, or Wix settings were modified.

## GitHub

Create an empty repository named `white-diamond-nursery` on your GitHub account. Upload these files, or use:

```sh
git init
git add .
git commit -m "Build White Diamond Nursery Next.js redesign"
git branch -M main
git remote add origin https://github.com/brickshow/white-diamond-nursery.git
git push -u origin main
```

Do not upload `node_modules`, `.next`, or secrets. The lockfile is included.
