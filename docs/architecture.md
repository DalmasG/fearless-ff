# Project architecture

## Frontend

`app/page.tsx` is the route entry point. It renders `features/festival/FestivalPage.tsx`, which composes the page sections under a client-side state provider.

| Location | Responsibility |
| --- | --- |
| `app/` | Route entry points, global styles and page metadata |
| `features/festival/components/` | Sidebar, mobile navigation, hero, films, spotlight, about, schedule, submissions, footer and preview dialog |
| `features/festival/data/preview.ts` | Original sample films, day schedules and navigation labels |
| `features/festival/config/` | Navigation destinations and placeholder copy |
| `features/festival/hooks/` | Scoped navigation, mobile menu, active day and dialog state |
| `features/festival/lib/` | Pure, testable search indexing and matching |
| `components/ui/` | Existing shared accessible UI primitives |
| `shared/contracts/` | Framework-independent public display types |
| `public/assets/` | Original logo and festival imagery |
| `backend/` | Documented server placeholders; no active service |
| `worker/`, `build/`, `db/`, `drizzle/` | Existing deployment and inactive persistence infrastructure |

## Design preservation

Section markup, Tailwind classes, original assets and motion settings are retained from the supplied Figma Make project. Interactions now use explicit handlers rather than scraping clicked text from the DOM. Search uses one index for displayed results and its empty state.

The refactor does not confirm the sample film programme, add a booking provider or deploy a new public site.

## Adding features

Keep UI code in the relevant feature module. Keep data acquisition outside presentational sections. Add a transport adapter when real endpoints exist; do not silently fall back to mock data if the production API fails.

Only expose reusable feature entry points to routes; use direct internal imports to avoid circular barrel dependencies. Keep server imports out of the client component graph.

## Validation

Run type checking, the production build and the tests before merging. The page response test checks the route and expected festival content. Search tests cover case/whitespace handling, schedule matches and no-result states. Browser screenshot comparison is a separate visual QA step.
