
import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';

const Courses: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50" id="courses">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">Our Programs</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-emerald-950">Unlock Your Spiritual Potential</h3>
          </div>
          <Link to="/courses" className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
            View All Courses <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <Link 
              to={`/course/${course.id}`} 
              key={course.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col group cursor-pointer relative"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={course.imageUrl} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Overlay & Enroll Button */}
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center">
                    <button className="bg-white text-emerald-900 px-8 py-3 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl flex items-center gap-2 hover:bg-emerald-50 transition-colors">
                      <Sparkles className="w-4 h-4" /> Enroll Now
                    </button>
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-10">
                  {course.category}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{course.duration} Program</span>
                </div>
                <h4 className="text-2xl font-bold text-emerald-950 mb-4 group-hover:text-emerald-600 transition-colors duration-300 leading-tight">
                  {course.title}
                </h4>
                <p className="text-slate-500 mb-8 flex-grow leading-relaxed text-sm">
                  {course.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-emerald-700 font-bold text-sm">Learn More</span>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
