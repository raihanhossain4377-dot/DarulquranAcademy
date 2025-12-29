
import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { Clock, ArrowRight } from 'lucide-react';

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
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={course.imageUrl} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {course.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  <span>Duration: {course.duration}</span>
                </div>
                <h4 className="text-2xl font-bold text-emerald-950 mb-3 group-hover:text-emerald-600 transition-colors">
                  {course.title}
                </h4>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {course.description}
                </p>
                <div className="w-full py-4 text-center rounded-xl border-2 border-emerald-100 text-emerald-700 font-bold group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all">
                  View Details
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
