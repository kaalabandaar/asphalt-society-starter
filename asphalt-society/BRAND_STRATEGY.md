# Asphalt Society Brand System

## Positioning
A premium global automotive culture platform and ecommerce ecosystem: parts, builds, community, reels, and an interactive car visualizer.

## Palette
- Asphalt Black `#050505`
- Gunmetal `#111318`
- Steel `#262B33`
- Smoke `#A6ABB5`
- Society Red `#FF2B2B`
- Deep Ember `#B31217`

## Typography
- Display: Bebas Neue / Druk-style condensed for aggressive car culture headlines.
- Body: Inter for clean ecommerce readability.
- Optional premium upgrade: Neue Haas Grotesk, Söhne, or PP Neue Montreal.

## Logo placement mockups
1. Windshield banner: white wordmark with small red SOCIETY accent.
2. Rear quarter panel decal: stacked `ASPHALT / SOCIETY`, cracked asphalt texture.
3. Hoodie chest hit: small red A/S monogram.
4. Wheel center cap: circular AS mark.
5. Website nav: full horizontal wordmark on glass pill nav.

## Homepage wireframe
1. Cinematic video hero with CTA: Build Your Car / Shop Mods.
2. Scroll-jacked culture statements: Built By Enthusiasts / Driven By Culture / More Than Cars.
3. Category grid.
4. Configurator teaser.
5. Featured builds.
6. Reels carousel.
7. Community reposts.
8. Join The Society.
9. Footer.

## Animation strategy
- Framer Motion: component entrances, hover cards, microinteractions.
- GSAP ScrollTrigger: cinematic pinned scroll sequences and video scrubbing.
- R3F: 3D configurator, environment lighting, real-time material changes.
- Keep mobile motion lighter and respect reduced-motion preferences.

## Ecommerce strategy
Start with high-margin universal products: apparel, decals, lighting, wraps, accessories. Add vehicle-specific aero/performance after fitment data is reliable. Build SEO landing pages for `Audi A7 mods`, `R34 wheels`, `car wrap Toronto/Ottawa`, etc. Use configurator saves as lead capture.

## Scalability recommendations
- Store product fitment data separately from product catalog.
- Move 3D assets to a CDN and use Draco-compressed GLB files.
- Add Algolia/Meilisearch once SKU count grows.
- Add Redis for sessions/cart caching at scale.
- Split admin into protected route group with role checks.
