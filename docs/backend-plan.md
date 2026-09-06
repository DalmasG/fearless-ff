# Backend plan inferred from the current frontend

All routes below are proposals, not implemented endpoints. Authentication is an administrative dependency for future content editing, not a new public login feature.

| Frontend element | Module | Proposed responsibility |
| --- | --- | --- |
| Featured films, Browse, Award Winners, Archive | films | Published film catalogue, categories, editions, awards, artwork, trailer URLs |
| Creator Spotlight, Lineup | lineup | Public creator profiles and their associated films/events |
| Day selector, times and locations | schedule | Editions, festival days, venues and ordered events |
| Tickets | ticketing | Pass/event availability and a hosted booking destination |
| Submit Film, Submit Now | submissions | Published submission window, validated applications, acknowledgement and private review status |
| Guidelines, FAQ, Deadlines | festival | Published rules, FAQs and deadline content |
| News, Press | news | Published articles and press material |
| Search | search | Search published films and programme events |
| About, Our Story, Contact, Socials | festival | Festival information, official contact details and social links |

## Delivery order

1. Replace sample films, creators and schedule with confirmed content, stable IDs and edition/date/time-zone fields.
2. Implement read-only catalogue, schedule, lineup and search endpoints; consume them through a frontend data adapter.
3. Supply real trailer, ticketing, contact and social links. A hosted checkout can avoid building payment handling.
4. Implement submissions only after agreeing fields, deadlines, file requirements, retention and review access.
5. Add authenticated editorial tooling if required. There is no admin UI in the supplied design.

## Boundaries

- Public APIs return published content only. Submission files, applicant contact details and orders are private.
- Times in the design are display strings, not production scheduling records. Add full dates and an explicit festival time zone before bookings or calendar export.
- The shared contracts currently describe preview display data. Version API contracts and add stable identifiers before replacing it.
- The database and storage bindings are not enabled. No new tables, migrations or deployment resources are created by this scaffold.
- No assumed payment provider, film upload mechanism, public account system or marketing automation is included.
