'use client';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-original';
import { sectionDestinations } from '../config/navigation';
import { navLinks } from '../data/preview';
import { useFestival } from '../hooks/use-festival';
const logoWhite = '/assets/logo-white.png';

export function MobileHeader() {
  const { activeSection, isScrolled, mobileMenuOpen, setMobileMenuOpen, activate } = useFestival();
  return (
<header
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[#2c2c2c] shadow-lg' : 'bg-[#2c2c2c]/90 backdrop-blur-sm'
        }`}
      >
        <div className="absolute top-1 left-6 text-[10px] leading-tight text-white/70">
          <p>Beta Version: 0.7</p>
          <p>Developer - Sam Ray Perez</p>
        </div>
        <div className="px-6 pt-8 pb-3">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              aria-label="Fearless Comedy Film Festival — back to top"
              onClick={(event) => { event.preventDefault(); activate('Home', event.currentTarget); }}
              className="rounded focus-visible:outline-2 focus-visible:outline-[#b0ba35]"
            >
            <img
              src={logoWhite}
              alt="Fearless Comedy Film Festival"
              className="h-8 w-auto"
            />
            </a>

            <button
              data-menu-toggle
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pb-6 border-t border-white/10"
            >
              <div className="flex flex-col gap-2 pt-6 max-h-[calc(100dvh-120px)] overflow-x-hidden overflow-y-auto">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    aria-current={activeSection === sectionDestinations[link] ? 'location' : undefined}
              href={`#${sectionDestinations[link]}`} onClick={(event) => { event.preventDefault(); activate(link, event.currentTarget); }}
                    className={`rounded-lg px-3 py-2 text-lg transition-colors ${activeSection === sectionDestinations[link] ? 'bg-[#b0ba35]/15 text-[#b0ba35] font-medium' : 'text-white font-light hover:text-[#b0ba35]'}`}
                    
                  >
                    {link}
                  </a>
                ))}
                <button onClick={(event) => activate("Tickets", event.currentTarget)} className="w-full px-8 py-3 bg-[#b0ba35] text-[#2c2c2c] rounded-full font-medium mt-4 border-2 border-[#9aa32f]">
                  Tickets
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </header>
  );
}
