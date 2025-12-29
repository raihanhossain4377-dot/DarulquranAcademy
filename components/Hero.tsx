
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50 opacity-40 -skew-x-12 transform translate-x-20 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
            Trusted by 5000+ Students Worldwide
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif text-emerald-950 leading-tight mb-6">
            Illuminate Your Heart with the <span className="text-emerald-600">Holy Quran</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            Experience world-class Quranic education from the comfort of your home. Master Tajweed, memorization, and Arabic with certified international instructors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Start Free Trial <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-emerald-950 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <span className="bg-emerald-100 p-1.5 rounded-full"><Play className="w-4 h-4 text-emerald-600" /></span>
              Watch Overview
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/student${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="Student avatar" />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-500">
              <span className="text-emerald-700 font-bold">4.9/5</span> rating from parents
            </p>
          </div>
        </div>

        <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/quran-study/1000/1200" 
              alt="Quran Student"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
          </div>
          {/* Decorative Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block z-20 max-w-[200px] border border-slate-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Book className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="font-bold text-slate-900">Live 1:1</span>
            </div>
            <p className="text-xs text-slate-500">Interactive live sessions with your preferred teacher.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Book: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
);

export default Hero;
