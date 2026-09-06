import type { Film, FestivalDay, FestivalSearchResult } from '../../../shared/contracts/festival';
export function createSearchIndex(films: readonly Film[], schedule: readonly FestivalDay[]): FestivalSearchResult[] {
  return [
    ...films.map((film, index): FestivalSearchResult => ({id: `film-${index}`, title: film.title, detail: film.category, section: 'films'})),
    ...schedule.flatMap(day => day.events.map((event, index): FestivalSearchResult => ({
      id: `event-${day.day}-${index}`, title:event.film, detail:`Day ${day.day} · ${event.time}`, section:'schedule', day:day.day,
    }))),
  ];
}
export function searchFestival(index: readonly FestivalSearchResult[], query: string): FestivalSearchResult[] {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return index.filter(item => terms.every(term => (item.title+' '+item.detail).toLocaleLowerCase().includes(term)));
}
