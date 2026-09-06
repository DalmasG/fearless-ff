# FearlessFF

Comedy film festival frontend recreated from the supplied Figma Make design, with a documented backend scaffold for future development.

## Current state

- The original visual style, assets, section order and animations are preserved.
- Navigation, mobile menu, schedule day selection and local search are implemented.
- Films, creators, schedules and descriptions are sample design content, not a confirmed festival programme.
- Tickets, submission processing, trailers, news and social destinations are placeholders until real content and integrations are supplied.
- No live database, payment processing, application uploads or email delivery is enabled.

## Stack

React 19, TypeScript, Vinext (Next.js App Router compatibility on Vite), Tailwind CSS 4, Motion and accessible shared UI primitives. The existing Cloudflare Worker and Sites hosting integration is retained.

`lucide-original` retains the original design's social icons; `lucide-react` supports the shared UI catalog.

## Quick start

Use Node.js 22.13 or newer (Node 24 is recommended for the included commands), npm, and a Linux/WSL environment for the existing bounded build scripts. Those scripts require Bash, GNU timeout and flock; native Windows users should use WSL.

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. No API credentials are required for the preview. The example environment file documents the current zero-secret setup.

For faster frontend-only editing, run `npm run dev:fast`. It skips the local
Cloudflare Worker emulator, so use `npm run dev` to verify Cloudflare bindings
or server-side behaviour before deployment.

## Checks

```sh
npm run typecheck
npm run test:unit
npm run build
npm run test:integration
```

`npm test` runs unit tests, builds the site, then runs integration checks. Browser-based visual comparison is not part of these checks.

## Structure

| Path | Purpose |
| --- | --- |
| `app/` | Route entry points, metadata and global styles |
| `features/festival/` | Festival frontend: composition, sections, state, data, configuration and search |
| `components/ui/` | Existing shared UI primitives |
| `shared/contracts/` | Public display types reusable by frontend and future backend |
| `public/assets/` | Original brand and photo assets |
| `backend/src/modules/` | Placeholders for films, lineup, schedule, ticketing, submissions, news, search and festival content |
| `backend/src/integrations/` | Ticketing, storage and transactional email placeholders |
| `backend/src/http/` | Future request adapters and validation |
| `docs/` | Architecture and inferred backend plan |
| `tests/` | Search and rendered-route checks, plus retained UI primitive tests |
| `worker/`, `build/` | Current deployment integration |
| `db/`, `drizzle/` | Inactive database scaffolding; not a festival schema |

Read [architecture](docs/architecture.md) and [the backend plan](docs/backend-plan.md) before extending the project.

## Editing content

Change sample data in `features/festival/data/preview.ts`. Section components live in `features/festival/components/`; global design styles remain in `app/globals.css`. Use explicit handlers and the scoped festival state hook for interactions.

Images and sample programme content came from the supplied design. Confirm rights, credits and all festival details before a public launch.

## Deployment

The existing Sites publication is managed separately from GitHub. Pushing this repository does not deploy the website. Keep `.openai/hosting.json` and the build integration intact if continuing to use that publication.

For a different hosting provider, review Vinext/Cloudflare compatibility and runtime bindings first. This is not a plain Next.js/Vercel deployment configuration. No GitHub deployment workflow or production secrets are configured here.
