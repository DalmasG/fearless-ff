# Ticketing adapter — placeholder

Choose the festival's real ticketing provider before implementation. Prefer linking to its hosted checkout if that satisfies the booking workflow. Keep provider credentials and authoritative pricing server-side. If webhooks are needed, verify signatures and process events idempotently; a browser redirect does not prove payment.
