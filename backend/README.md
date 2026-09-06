# Backend scaffold

This directory is a planning scaffold, not a running API. No payments, submissions, uploads, authentication, or email delivery are implemented.

The current frontend uses local design-preview data. Its buttons display honest placeholders wherever real festival details or service links are missing.

## Layout and dependency boundaries

- `src/modules/`: feature-specific business logic and persistence interfaces when implemented.
- `src/http/`: future request parsing, validation, route adapters, and error mapping.
- `src/integrations/`: external ticketing/payment, storage, and email adapters.
- `tests/`: future server-side integration tests.
- `../shared/contracts/`: public display contracts that both sides may import.
- `../db/` and `../drizzle/`: existing, inactive Cloudflare D1 infrastructure. Do not duplicate migrations here.

Frontend code must never import backend modules, database clients, or credentials. Backend modules should not import React components or mock data.

Keep the current Vinext/Cloudflare deployment architecture. When backend work begins, decide whether route adapters live in App Router API routes or a separate API service; no second framework is selected yet.

See [the feature plan](../docs/backend-plan.md) for inferred endpoints and implementation order.
