import type { Film, FestivalDay } from '@/shared/contracts/festival';

// Figma Make sample content, retained for design parity. Not a confirmed programme.
export const navLinks = ['Home', 'Films', 'Lineup', 'About', 'Schedule', 'Submissions'];

export const featuredFilms: readonly Film[] = [
  {
    title: 'The Last Laugh',
    category: 'Feature',
    image: '/assets/photo-0.jpg',
  },
  {
    title: 'Awkward Moments',
    category: 'Short',
    image: '/assets/photo-1.jpg',
  },
  {
    title: 'Stand Up Revolution',
    category: 'Standup',
    image: '/assets/photo-2.jpg',
  },
  {
    title: 'Comedy Chronicles',
    category: 'Sketch',
    image: '/assets/photo-3.jpg',
  },
];

export const scheduleData: readonly FestivalDay[] = [
  {
    day: 1,
    events: [
      { time: '7:00 PM', film: 'Opening Night Gala', location: 'Main Theater' },
      { time: '9:00 PM', film: 'The Last Laugh', location: 'Screen 2' },
      { time: '11:00 PM', film: 'After Party', location: 'Lounge' },
    ],
  },
  {
    day: 2,
    events: [
      { time: '2:00 PM', film: 'Comedy Shorts Block', location: 'Screen 1' },
      { time: '5:00 PM', film: 'Filmmaker Panel', location: 'Conference Hall' },
      { time: '8:00 PM', film: 'Stand Up Revolution', location: 'Main Theater' },
    ],
  },
  {
    day: 3,
    events: [
      { time: '3:00 PM', film: 'Awards Ceremony', location: 'Main Theater' },
      { time: '6:00 PM', film: 'Best of Festival', location: 'Screen 1' },
      { time: '9:00 PM', film: 'Closing Night Party', location: 'Rooftop' },
    ],
  },
];
