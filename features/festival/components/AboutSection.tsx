'use client';
import { motion } from 'motion/react';
import { useFestival } from '../hooks/use-festival';

export function AboutSection() {
  const { activate } = useFestival();
  return (
<section id="about" className="py-24 lg:py-32 px-6 lg:pl-24 lg:pr-16 bg-white relative">
        {/* Wave Divider at Top */}
        <div className="absolute top-0 left-0 right-0 transform rotate-180">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#eadadd"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>

        <div className="max-w-[1800px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2
              className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-[#2c2c2c] mb-12 text-center"
              style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontStyle: 'italic' }}
            >
              About the Festival
            </h2>
            
            <div className="bg-[#ab7fa4] rounded-3xl p-12 lg:p-16 shadow-2xl">
              <p className="text-xl lg:text-2xl text-white/95 leading-relaxed mb-8 font-light">
                Fearless Comedy Film Festival celebrates the bold voices and boundary-pushing storytellers 
                who dare to make us laugh while challenging conventions. For three electrifying days, 
                we bring together filmmakers, comedians, and comedy enthusiasts to experience 
                the cutting edge of comedic cinema.
              </p>
              
              <p className="text-xl lg:text-2xl text-white/95 leading-relaxed mb-8 font-light">
                From experimental shorts to feature-length masterpieces, standup specials to sketch compilations, 
                we showcase work that pushes the art form forward. Our mission is simple: celebrate fearless comedy 
                that makes you think as much as it makes you laugh.
              </p>
              
              <p className="text-xl lg:text-2xl text-white/95 leading-relaxed mb-10 font-light">
                Join us for screenings, panels, workshops, and unforgettable moments with some of the most 
                innovative minds in comedy today. Whether you're a filmmaker, performer, or fan, 
                this is where bold comedy comes alive.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <button onClick={(event) => activate("Learn More", event.currentTarget)} className="px-10 py-4 bg-[#f7b53b] text-[#2c2c2c] rounded-full text-lg font-medium hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-[#e5a435] hover:border-[#d99430]">
                  Learn More
                </button>
                <button onClick={(event) => activate("Our Story", event.currentTarget)} className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 rounded-full text-lg font-medium hover:bg-white/20 hover:border-white/60 transition-all duration-300">
                  Our Story
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider at Bottom */}
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
