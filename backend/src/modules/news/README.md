# News and press — placeholder

Status: planned, not implemented.

## Responsibility

Published articles, publication dates, slugs and approved press materials.

## Proposed endpoints

GET /api/v1/news; GET /api/v1/news/:slug

## First implementation step

Establish draft/published visibility and sanitize any rich content before rendering it.

Add service logic, validated input schemas and repository interfaces here when this feature is commissioned. Keep HTTP adapters in `backend/src/http/` and provider-specific code in `backend/src/integrations/`.
