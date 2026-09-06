'use client';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import type { FestivalDayNumber, FestivalSearchResult, SectionId } from '@/shared/contracts/festival';
import { sectionDestinations } from '../config/navigation';

function useFestivalState() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState<FestivalDayNumber>(1);
  const [panel, setPanel] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const lastControl = useRef<HTMLElement | null>(null);
  useEffect(() => {
    let frame = 0;
    const updatePosition = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 50);
      const sections = [...new Set(Object.values(sectionDestinations))]
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => element !== null)
        .sort((a, b) => a.offsetTop - b.offsetTop);
      const marker = window.innerWidth < 1024 ? 120 : 80;
      let current: HTMLElement | undefined = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) current = section;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections.at(-1);
      }
      if (current) setActiveSection(current.id as SectionId);
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updatePosition);
    };
    updatePosition();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    const observer = new ResizeObserver(handleScroll);
    observer.observe(document.body);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);
  function navigate(section: SectionId) {
    setActiveSection(section);
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior });
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior });
    }
    setMobileMenuOpen(false);
  }
  function activate(label: string, control?: HTMLElement) {
    const section = sectionDestinations[label];
    if (section) return navigate(section);
    lastControl.current = control || null;
    setPanel(label);
    setQuery('');
  }
  function selectSearchResult(result: FestivalSearchResult) {
    if (result.day) setActiveDay(result.day);
    setPanel(null);
    navigate(result.section);
  }
  return {activeSection, isScrolled, mobileMenuOpen, setMobileMenuOpen, activeDay, setActiveDay,
    panel, setPanel, query, setQuery, lastControl, activate, selectSearchResult};
}
const FestivalContext = createContext<ReturnType<typeof useFestivalState> | null>(null);
export function FestivalProvider({children}: {children: ReactNode}) {
  const value = useFestivalState();
  return <FestivalContext.Provider value={value}>{children}</FestivalContext.Provider>;
}
export function useFestival() {
  const value = useContext(FestivalContext);
  if (!value) throw new Error('useFestival must be used within FestivalProvider');
  return value;
}
