# Ticketing — placeholder

Status: planned, not implemented.

## Responsibility

Published booking information and provider integration for passes or individual events.

## Proposed endpoints

GET /api/v1/tickets; optional POST /api/v1/checkout

## First implementation step

Choose the real booking provider first. Implement checkout/webhooks only if a hosted booking link is insufficient.

Add service logic, validated input schemas and repository interfaces here when this feature is commissioned. Keep HTTP adapters in `backend/src/http/` and provider-specific code in `backend/src/integrations/`.
