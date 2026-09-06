# Film submissions — placeholder

Status: planned, not implemented.

## Responsibility

Submission windows, validated application details, private attachments and review status.

## Proposed endpoints

GET /api/v1/submissions/window; POST /api/v1/submissions

## First implementation step

Agree fields and attachment limits first. Return a receipt only after durable storage succeeds; define editorial access and retention before collecting submissions.

Add service logic, validated input schemas and repository interfaces here when this feature is commissioned. Keep HTTP adapters in `backend/src/http/` and provider-specific code in `backend/src/integrations/`.
