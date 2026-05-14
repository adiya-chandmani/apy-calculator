# APY Calculator

A fast, SEO-friendly microtool built with Next.js App Router and TypeScript. It helps visitors estimate compound growth, future balance, total contributions, and interest earned for savings accounts, CDs, and similar APY-based balances.

## Features

- Future balance projection using APY, compounding frequency, and recurring monthly contributions
- Interest earned and contribution breakdown for quick comparison
- Yearly growth checkpoints for easy planning
- Static-first marketing pages: home, about, privacy, terms, and contact
- `robots.txt` and `sitemap.xml` generated from `NEXT_PUBLIC_SITE_URL`

## Local development

```bash
npm install
npm run build
npm run dev
```

## Environment

Create `.env.local` with:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## AdSense placeholder

Do not add AdSense until the production domain is live and approved. When the domain is ready, add verification and ad units only after checking Core Web Vitals, layout stability, and content quality.

## Deploy

Vercel import is still needed because the Vercel CLI is not configured in this environment.
