'use client';
import { motion } from 'motion/react';
import { useFestival } from '../hooks/use-festival';

export function SubmissionsSection() {
  const { activate } = useFestival();
  return (
<section id="submissions" className="py-32 px-6 lg:pl-24 lg:pr-16 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/assets/photo-6.jpg"
            alt="Theater stage with lights"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#ab7fa4] via-[#ab7fa4] to-[#8d6886] mix-blend-multiply opacity-90" />
          <div className="absolute inset-0 bg-[#ab7fa4]/60" />
        </div>

        <div className="max-w-[1800px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2
              className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] text-white mb-8"
              style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontStyle: 'italic' }}
            >
              Submit Your Comedy Film
            </h2>
            <p className="text-2xl text-white/90 mb-12 font-light">
              Got a fearless comedy film? We want to see it.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <button onClick={(event) => activate("Submit Now", event.currentTarget)} className="px-12 py-5 bg-[#f7b53b] text-[#2c2c2c] rounded-full text-xl font-medium hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-[#e5a435] hover:border-[#d99430]">
                Submit Now
              </button>
              <button onClick={(event) => activate("Guidelines", event.currentTarget)} className="px-12 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 rounded-full text-xl font-medium hover:bg-white/20 hover:border-white/60 transition-all duration-300">
                Guidelines
              </button>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
