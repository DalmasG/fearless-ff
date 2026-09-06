import type { SectionId } from '@/shared/contracts/festival';
export const sectionDestinations: Readonly<Record<string, SectionId>> = {
  Home:'home', Films:'films', Browse:'films', Featured:'films', Lineup:'lineup',
  'View Lineup':'films', Schedule:'schedule', About:'about', 'Learn More':'about',
  'Our Story':'about', 'Submit Film':'submissions', Submissions:'submissions',
};
export function panelDescription(panel: string | null): string {
  if (panel === 'Search') return 'Find films and events in the festival preview.';
  if (panel === 'Tickets') return 'Ticket booking is not connected in this preview.';
  if (panel === 'Watch Trailer') return 'A trailer link has not been provided for this preview.';
  if (['Submit Now', 'Guidelines', 'FAQ', 'Deadlines'].includes(panel || '')) return 'Submission details and the application link have not been provided yet.';
  return 'This section is not yet available in the festival preview.';
}
