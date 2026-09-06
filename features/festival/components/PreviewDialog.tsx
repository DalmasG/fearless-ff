'use client';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useFestival } from '../hooks/use-festival';
import { featuredFilms, scheduleData } from '../data/preview';
import { createSearchIndex, searchFestival } from '../lib/search';
import { panelDescription } from '../config/navigation';
const searchIndex = createSearchIndex(featuredFilms, scheduleData);
export function PreviewDialog() {
  const {panel, setPanel, query, setQuery, lastControl, selectSearchResult} = useFestival();
  const results = searchFestival(searchIndex, query);
  return (
    <Dialog open={panel !== null} onOpenChange={(open) => { if (!open) setPanel(null); }}>
      <DialogContent className="rounded-3xl bg-[#eadadd] p-8 text-[#2c2c2c]" onCloseAutoFocus={(event) => {event.preventDefault(); lastControl.current?.focus();}}>
        <DialogTitle className="text-3xl" style={{fontFamily: "'Noto Serif', serif", fontStyle:'italic'}}>{panel}</DialogTitle>
        <DialogDescription className="text-base text-[#2c2c2c]/80">{panelDescription(panel)}</DialogDescription>
        {panel === 'Search' && <div>
          <label htmlFor="festival-search" className="sr-only">Search films and events</label>
          <input id="festival-search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search films and events…" className="w-full rounded-xl border border-[#ab7fa4] bg-white p-3 text-base" />
          <ul className="mt-4 max-h-72 overflow-auto space-y-2">
            {results.map(item => <li key={item.id}><button className="w-full rounded-xl bg-white/70 p-3 text-left hover:bg-white" onClick={() => selectSearchResult(item)}><span className="block font-medium">{item.title}</span><span className="text-sm text-[#2c2c2c]/70">{item.detail}</span></button></li>)}
            {results.length === 0 && <li className="py-3" role="status">No matching films or events.</li>}
          </ul>
        </div>}
      </DialogContent>
    </Dialog>
  );
}
