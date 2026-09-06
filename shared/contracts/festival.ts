/** Public display contracts. Keep these free of React and server-only imports. */
export type FestivalDayNumber = 1 | 2 | 3;
export type FilmCategory = 'Feature' | 'Short' | 'Standup' | 'Sketch';
export interface Film {
  title: string;
  category: FilmCategory;
  image: string;
  trailerUrl?: string;
}
export interface FestivalEvent {
  time: string;
  film: string;
  location: string;
}
export interface FestivalDay {
  day: FestivalDayNumber;
  events: readonly FestivalEvent[];
}
export type SectionId = 'home' | 'films' | 'lineup' | 'about' | 'schedule' | 'submissions';
export interface FestivalSearchResult {
  id: string;
  title: string;
  detail: string;
  section: 'films' | 'schedule';
  day?: FestivalDayNumber;
}
