# Gold Coast Northern Landscape Supplies

Modern, mobile-first site built with Next.js (App Router), TypeScript, and Tailwind.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit content

- Business details and NAP: [src/content/site.ts](src/content/site.ts)
- Product category copy: [src/content/products.ts](src/content/products.ts)
- Page sections:
	- Home: [src/app/page.tsx](src/app/page.tsx)
	- Products: [src/app/products/page.tsx](src/app/products/page.tsx)
	- Delivery: [src/app/delivery/page.tsx](src/app/delivery/page.tsx)
	- About: [src/app/about/page.tsx](src/app/about/page.tsx)
	- Contact: [src/app/contact/page.tsx](src/app/contact/page.tsx)

## Placeholder imagery

Local SVG textures live in [public/textures](public/textures). Replace with real photography if available.

## Forms

Contact and delivery forms are client-side validated and open the default email client (mailto). A stub comment is included in [src/components/forms/DeliveryQuoteForm.tsx](src/components/forms/DeliveryQuoteForm.tsx) for future API integration.

## SEO

Each page defines metadata. The site-wide LocalBusiness JSON-LD schema and OpenGraph defaults are in [src/app/layout.tsx](src/app/layout.tsx).
