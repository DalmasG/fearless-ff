# Festival schedule — placeholder

Status: planned, not implemented.

## Responsibility

Festival editions, dated days, venues and ordered screening/event records.

## Proposed endpoints

GET /api/v1/schedule?edition=...&day=...

## First implementation step

Use an explicit festival time zone and full dates. Validate event durations and venue conflicts before ticketing depends on the programme.

Add service logic, validated input schemas and repository interfaces here when this feature is commissioned. Keep HTTP adapters in `backend/src/http/` and provider-specific code in `backend/src/integrations/`.
