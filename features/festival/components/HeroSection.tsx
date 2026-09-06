'use client';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-original';
import { useFestival } from '../hooks/use-festival';

export function HeroSection() {
  const { activate } = useFestival();
  return (
<section id="home" className="relative h-screen flex items-center overflow-hidden -mt-16 lg:mt-0">
        {/* Background with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/assets/photo-4.jpg"
            alt="Comedian performing"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#ab7fa4] via-[#ab7fa4] to-[#8d6886] mix-blend-multiply opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ab7fa4]/95 via-[#ab7fa4]/60 to-transparent" />
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="relative max-w-[1800px] mx-auto px-6 lg:pl-16 lg:pr-16 w-full pb-48 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl"
          >
            <h1
              className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] mb-8 text-white"
              style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontStyle: 'italic' }}
            >
              FEARLESS
              <br />
              COMEDY
              <br />
              FILM
              <br />
              FESTIVAL
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl lg:text-2xl text-white/90 mb-16 max-w-2xl font-light"
            >
              A festival celebrating bold, fearless comedy filmmaking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={(event) => activate("View Lineup", event.currentTarget)} className="px-10 py-4 bg-[#b0ba35] text-[#2c2c2c] rounded-full text-lg font-medium hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 border-2 border-[#9aa32f] hover:border-[#8a9329]">
                View Lineup
                <ChevronRight size={20} />
              </button>
              <button onClick={(event) => activate("Submit Film", event.currentTarget)} className="px-10 py-4 bg-[#f7b53b] text-[#2c2c2c] rounded-full text-lg font-medium hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-[#e5a435] hover:border-[#d99430]">
                Submit Film
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#eadadd"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </section>
  );
}
