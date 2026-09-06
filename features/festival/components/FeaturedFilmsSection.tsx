'use client';
import { motion } from 'motion/react';
import { Play } from 'lucide-original';
import { featuredFilms } from '../data/preview';
import { useFestival } from '../hooks/use-festival';

export function FeaturedFilmsSection() {
  const { activate } = useFestival();
  return (
<section id="films" className="py-24 lg:py-32 px-6 lg:pl-24 lg:pr-16 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2
              className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-[#2c2c2c] mb-4"
              style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontStyle: 'italic' }}
            >
              Featured Films
            </h2>
            <p className="text-xl text-[#2c2c2c]/70 font-light">
              This year's boldest comedy cinema
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredFilms.map((film, idx) => (
              <motion.div
                key={film.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4] bg-white shadow-lg">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button onClick={(event) => activate("Watch Trailer", event.currentTarget)} className="flex items-center gap-2 text-white font-medium">
                      <Play size={20} className="fill-white" />
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3
                    className="text-3xl text-[#2c2c2c] group-hover:text-[#ab7fa4] transition-colors duration-300"
                    style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontStyle: 'italic' }}
                  >
                    {film.title}
                  </h3>
                  <p className="text-sm text-[#2c2c2c]/60 uppercase tracking-wider font-light">
                    {film.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
