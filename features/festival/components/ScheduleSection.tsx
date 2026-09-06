'use client';
import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-original';
import { scheduleData } from '../data/preview';
import { useFestival } from '../hooks/use-festival';

export function ScheduleSection() {
  const { activeDay, setActiveDay } = useFestival();
  return (
<section id="schedule" className="py-24 lg:py-32 px-6 lg:pl-24 lg:pr-16 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-[#2c2c2c] mb-16"
            style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontStyle: 'italic' }}
          >
            Festival Schedule
          </motion.h2>

          {/* Day Tabs */}
          <div role="group" aria-label="Festival day" className="relative grid grid-cols-3 w-full max-w-md mb-12 p-1.5 bg-[#eadadd] rounded-full">
            <div aria-hidden="true" className="absolute inset-1.5 pointer-events-none">
              <div
                className="h-full w-1/3 transition-transform duration-300 ease-out motion-reduce:transition-none"
                style={{ transform: `translateX(${scheduleData.findIndex((day) => day.day === activeDay) * 100}%)` }}
              >
                <div className="h-full bg-[#ab7fa4] rounded-full shadow-lg" />
              </div>
            </div>
            {scheduleData.map((schedule) => (
              <button
                key={schedule.day}
                aria-pressed={activeDay === schedule.day}
                onClick={() => setActiveDay(schedule.day)}
                className={`relative z-10 min-w-0 px-3 sm:px-9 py-4 rounded-full text-lg whitespace-nowrap font-medium transition-colors duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c2c2c] ${
                  activeDay === schedule.day
                    ? 'text-white'
                    : 'text-[#2c2c2c] hover:text-[#ab7fa4]'
                }`}
              >
                Day {schedule.day}
              </button>
            ))}
          </div>

          {/* Schedule Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {scheduleData
              .find((s) => s.day === activeDay)
              ?.events.map((event, idx) => (
                <motion.div
                  key={`${activeDay}-${event.time}-${event.film}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-[#eadadd] rounded-3xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 text-[#ab7fa4] mb-4">
                    <Calendar size={20} />
                    <span className="text-lg font-medium">{event.time}</span>
                  </div>
                  <h3
                    className="text-2xl text-[#2c2c2c] mb-3"
                    style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontStyle: 'italic' }}
                  >
                    {event.film}
                  </h3>
                  <div className="flex items-center gap-2 text-[#2c2c2c]/60">
                    <MapPin size={16} />
                    <span className="font-light">{event.location}</span>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
  );
}
