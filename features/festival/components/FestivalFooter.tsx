'use client';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-original';
import { useFestival } from '../hooks/use-festival';
const logoWhite = '/assets/logo-white.png';

export function FestivalFooter() {
  const { activate } = useFestival();
  return (
<footer className="py-16 px-6 lg:pl-24 lg:pr-16 bg-[#2c2c2c]">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="text-white font-medium mb-6">Festival</h4>
              <ul className="space-y-3">
                {['About', 'News', 'Press', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" onClick={(event) => { event.preventDefault(); activate(link, event.currentTarget); }} className="text-white/60 hover:text-[#b0ba35] transition-colors font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6">Films</h4>
              <ul className="space-y-3">
                {['Browse', 'Featured', 'Award Winners', 'Archive'].map((link) => (
                  <li key={link}>
                    <a href="#" onClick={(event) => { event.preventDefault(); activate(link, event.currentTarget); }} className="text-white/60 hover:text-[#b0ba35] transition-colors font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6">Submissions</h4>
              <ul className="space-y-3">
                {['Submit Film', 'Guidelines', 'FAQ', 'Deadlines'].map((link) => (
                  <li key={link}>
                    <a href="#" onClick={(event) => { event.preventDefault(); activate(link, event.currentTarget); }} className="text-white/60 hover:text-[#b0ba35] transition-colors font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6">Socials</h4>
              <ul className="flex gap-4">
                {[
                  { name: 'Instagram', icon: Instagram },
                  { name: 'Twitter', icon: Twitter },
                  { name: 'Facebook', icon: Facebook },
                  { name: 'YouTube', icon: Youtube }
                ].map((social) => (
                  <li key={social.name}>
                    <a 
                      href="#" onClick={(event) => { event.preventDefault(); activate(social.name, event.currentTarget); }} 
                      className="text-white/60 hover:text-[#b0ba35] transition-colors" 
                      aria-label={social.name}
                    >
                      <social.icon size={24} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <img src={logoWhite} alt="Fearless Comedy Film Festival" className="h-8 w-auto" />
            <p className="text-white/40 text-sm font-light">
              © 2026 Fearless Comedy Film Festival. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
}
