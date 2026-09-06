import assert from 'node:assert/strict';
import test from 'node:test';
import { createSearchIndex, searchFestival } from '../features/festival/lib/search.ts';

const films = [{title:'The Last Laugh', category:'Feature', image:'/film.jpg'}];
const days = [{day:2, events:[{film:'Filmmaker Panel', time:'5:00 PM', location:'Hall'}]}];
const index = createSearchIndex(films, days);

test('search normalizes casing, whitespace and multiple terms', () => {
  assert.equal(searchFestival(index, '  LAST   feature ')[0]?.title, 'The Last Laugh');
  assert.equal(searchFestival(index, ' ').length, 2);
});
test('schedule results retain their destination and day', () => {
  const result = searchFestival(index, 'day 2 panel')[0];
  assert.equal(result.section, 'schedule');
  assert.equal(result.day, 2);
  assert.equal(result.detail, 'Day 2 · 5:00 PM');
});
test('no matches are returned for unrelated terms and IDs are unique', () => {
  assert.deepEqual(searchFestival(index, 'not-a-festival-film'), []);
  assert.equal(new Set(index.map(item => item.id)).size, index.length);
});
