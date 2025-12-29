
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { ArrowLeft, Clock, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = COURSES.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-serif text-emerald-950 mb-4">Course Not Found</h2>
        <p className="text-slate-600 mb-8">The course you are looking for does not exist or has been removed.</p>
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-emerald-600 font-bold mb-10 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Courses
        </button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="animate-fade-in-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src={course.imageUrl} 
                alt={course.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent"></div>
              <div className="absolute top-6 left-6 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                {course.category}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <h5 className="font-bold text-emerald-950 text-lg">Duration</h5>
                <p className="text-slate-600">{course.duration}</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <h5 className="font-bold text-emerald-950 text-lg">Certification</h5>
                <p className="text-slate-600">Included on completion</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {course.description}
            </p>

            <div className="space-y-6 mb-12">
              <h4 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-emerald-600" /> What You Will Learn
              </h4>
              <ul className="grid gap-4">
                {[
                  'Master basic and advanced principles.',
                  'Personalized feedback from certified instructors.',
                  'Interactive live learning environment.',
                  'Practical exercises and weekly assessments.',
                  'Deep spiritual connection and understanding.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h5 className="text-2xl font-bold text-emerald-950 mb-1">Ready to start?</h5>
                  <p className="text-emerald-700">Sign up for a free trial session today.</p>
                </div>
                <button className="whitespace-nowrap px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition-all transform hover:-translate-y-1">
                  Enroll in This Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
