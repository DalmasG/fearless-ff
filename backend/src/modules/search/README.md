# Public search — placeholder

Status: planned, not implemented.

## Responsibility

Search across published films and schedule events.

## Proposed endpoints

GET /api/v1/search?q=...

## First implementation step

Keep draft films, applicants and orders outside this index. Use the frontend search result shape as the starting display contract.

Add service logic, validated input schemas and repository interfaces here when this feature is commissioned. Keep HTTP adapters in `backend/src/http/` and provider-specific code in `backend/src/integrations/`.
