'use client';
import { FestivalProvider } from './hooks/use-festival';
import { Sidebar } from './components/Sidebar';
import { MobileHeader } from './components/MobileHeader';
import { HeroSection } from './components/HeroSection';
import { FeaturedFilmsSection } from './components/FeaturedFilmsSection';
import { CreatorSpotlightSection } from './components/CreatorSpotlightSection';
import { AboutSection } from './components/AboutSection';
import { ScheduleSection } from './components/ScheduleSection';
import { SubmissionsSection } from './components/SubmissionsSection';
import { FestivalFooter } from './components/FestivalFooter';
import { PreviewDialog } from './components/PreviewDialog';

export function FestivalPage() {
  return (
    <FestivalProvider>
      <div className="min-h-screen bg-[#eadadd]">
        <Sidebar />
        <MobileHeader />
        <div className="lg:pl-64 pt-16 lg:pt-0">
          <HeroSection />
          <FeaturedFilmsSection />
          <CreatorSpotlightSection />
          <AboutSection />
          <ScheduleSection />
          <SubmissionsSection />
          <FestivalFooter />
        </div>
        <PreviewDialog />
      </div>
    </FestivalProvider>
  );
}
