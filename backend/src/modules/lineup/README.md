# Creator lineup — placeholder

Status: planned, not implemented.

## Responsibility

Creator biographies, portraits and relationships to films and programme events.

## Proposed endpoints

GET /api/v1/lineup; GET /api/v1/creators/:id

## First implementation step

Replace the sample spotlight with an approved creator record. Avoid coupling creator records to a single featured card.

Add service logic, validated input schemas and repository interfaces here when this feature is commissioned. Keep HTTP adapters in `backend/src/http/` and provider-specific code in `backend/src/integrations/`.
