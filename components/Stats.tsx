
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-emerald-800/50 p-4 rounded-2xl mb-6 ring-1 ring-emerald-700">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-emerald-300 font-medium tracking-wide uppercase text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
