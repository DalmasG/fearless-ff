'use client';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-original';

export function CreatorSpotlightSection() {
  return (
<section id="lineup" className="py-24 lg:py-32 px-6 lg:pl-24 lg:pr-16 bg-[#eadadd]">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
            src="https://raw.githubusercontent.com/danielluenswilken/newsletter/main/Daniel%20PNG.png"
                  alt="Daniel Lukas — The Only Funny German"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm text-[#ab7fa4] uppercase tracking-widest mb-4 font-medium">
                  Creator Spotlight
                </p>
                <h2
                  className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-[#2c2c2c] mb-6"
                  style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontStyle: 'italic' }}
                >
                  Daniel Lukas
                </h2>
                <p className="text-2xl text-[#ab7fa4] mb-6 font-light">
                  The Only Funny German
                </p>
                <p className="text-lg text-[#2c2c2c]/70 leading-relaxed mb-10 font-light">
                  German-born and based in Cork, Daniel Lukas brings sharp satire to the stage and screen.
                  His stand-up, sketches and comedy music explore modern life, internet culture
                  and geopolitics with a playful sense of the absurd.
                </p>
                <a href="https://www.instagram.com/theonlyfunnygerman/" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#b0ba35] text-[#2c2c2c] rounded-full text-lg font-medium hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 border-2 border-[#9aa32f] hover:border-[#8a9329]">
                  <Instagram size={20} aria-hidden="true" />
                  Follow Daniel
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
