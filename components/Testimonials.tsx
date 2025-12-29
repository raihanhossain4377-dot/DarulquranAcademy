
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">Our Community</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-emerald-950">Hearts Touched by Learning</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="relative bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <Quote className="absolute top-8 right-10 w-12 h-12 text-emerald-100" />
              <p className="text-xl text-slate-700 italic leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-emerald-950">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
