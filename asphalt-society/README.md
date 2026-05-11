# Asphalt Society

Production-ready starter for a premium automotive culture ecommerce platform with Next.js, Tailwind, Framer Motion, React Three Fiber, Prisma/PostgreSQL, and Stripe Checkout.

## Setup
```bash
npm install
cp .env.example .env
npx prisma migrate dev --name init
npm run seed
npm run dev
```

## Environment variables
See `.env.example`. Server-only secrets stay unprefixed. Browser-safe values must use `NEXT_PUBLIC_`.

## Real assets to replace
- `/public/videos/asphalt-hero.mp4` for cinematic hero reel.
- `/public/placeholders/*` for product/build imagery.
- Replace the primitive 3D demo car in `components/CarCanvas.tsx` with licensed GLB vehicle models.

## Deployment
1. Push to GitHub.
2. Create a Vercel project.
3. Provision Postgres, add `DATABASE_URL`.
4. Add Stripe keys and webhook secret.
5. Deploy.
6. Run migrations in deployment pipeline.

## Current implementation level
This is a strong production scaffold with real route structure, UI language, Prisma schema, Stripe checkout route, admin/community/page foundations, and an interactive 3D configurator prototype. For commercial launch, replace placeholder media, add auth hardening, real inventory/order fulfillment, product CMS, and licensed/optimized vehicle models.
