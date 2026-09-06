# Film catalogue — placeholder

Status: planned, not implemented.

## Responsibility

Published film metadata, categories, artwork, trailer URLs, edition archives and award labels.

## Proposed endpoints

GET /api/v1/films; GET /api/v1/films/:id

## First implementation step

Define stable IDs and published/draft states. Connect real trailer URLs; do not store video player state as film metadata.

Add service logic, validated input schemas and repository interfaces here when this feature is commissioned. Keep HTTP adapters in `backend/src/http/` and provider-specific code in `backend/src/integrations/`.
