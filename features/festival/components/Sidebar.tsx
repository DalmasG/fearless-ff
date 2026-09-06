'use client';
import { motion } from 'motion/react';
import { Search } from 'lucide-original';
import { sectionDestinations } from '../config/navigation';
import { navLinks } from '../data/preview';
import { useFestival } from '../hooks/use-festival';
const logoWhite = '/assets/logo-white.png';

export function Sidebar() {
  const { activate, activeSection } = useFestival();
  return (
<aside
        className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-[#2c2c2c] z-50 flex-col justify-between pt-6 pb-8 px-8"
      >
        <p className="shrink-0 mb-3 text-xs text-white/70">Beta Version: 0.7</p>
        {/* Logo */}
        <a
          href="#home"
          aria-label="Fearless Comedy Film Festival — back to top"
          onClick={(event) => { event.preventDefault(); activate('Home', event.currentTarget); }}
          className="shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-[#b0ba35]"
        >
          <img
            src={logoWhite}
            alt="Fearless Comedy Film Festival"
            className="h-40 w-auto mb-8"
          />
        </a>

        {/* Navigation Links */}
        <nav className="flex-1 min-h-0 overflow-x-hidden overflow-y-auto flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link}
              aria-current={activeSection === sectionDestinations[link] ? 'location' : undefined}
              href={`#${sectionDestinations[link]}`} onClick={(event) => { event.preventDefault(); activate(link, event.currentTarget); }}
              className={`relative rounded-lg px-3 py-2 text-lg transition-colors duration-200 group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#b0ba35] ${activeSection === sectionDestinations[link] ? 'bg-[#b0ba35]/15 text-[#b0ba35] font-medium' : 'font-light text-white/70 hover:text-white hover:bg-white/5'}`}
            >
              <span className="text-[#b0ba35] group-hover:text-[#b0ba35] inline-block scale-x-75">—</span>
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#b0ba35] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button onClick={(event) => activate("Search", event.currentTarget)}
            className="relative text-lg font-light text-white/70 hover:text-white transition-all duration-300 group flex items-center gap-3"
          >
            <span className="text-[#b0ba35] group-hover:text-[#b0ba35] inline-block scale-x-75">—</span>
            <Search size={20} />
            Search
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#b0ba35] transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>

        {/* Bottom Actions */}
        <div className="space-y-6 mt-8">
          <motion.button onClick={(event) => activate("Tickets", event.currentTarget)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 bg-[#b0ba35] text-[#2c2c2c] rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:bg-[#a0aa25] border-2 border-[#9aa32f]"
          >
            Tickets
          </motion.button>
        </div>
      </aside>
  );
}
