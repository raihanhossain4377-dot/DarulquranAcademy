
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-6">A Personalized Learning Experience</h3>
          <p className="text-lg text-slate-600">
            We combine traditional methods with modern technology to deliver the best learning experience for students of all ages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-emerald-950 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
