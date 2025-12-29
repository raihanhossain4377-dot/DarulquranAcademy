
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle, ClipboardList, Clock, Users, Send, AlertCircle, X } from 'lucide-react';
import { COURSES } from '../constants';

const AdmissionsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    const courseId = searchParams.get('courseId');
    if (courseId) {
      setSelectedCourse(courseId);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmDialog(true);
  };

  const handleConfirm = () => {
    setShowConfirmDialog(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancel = () => {
    setShowConfirmDialog(false);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 px-6 flex flex-col items-center justify-center text-center bg-slate-50 min-h-[80vh]">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-emerald-100 max-w-2xl w-full border border-emerald-50 animate-fade-in-up">
          <div className="bg-emerald-100 p-8 rounded-full mb-8 inline-block animate-bounce shadow-inner">
            <CheckCircle className="w-20 h-20 text-emerald-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            JazakAllah Khair!
          </h1>
          <div className="w-16 h-1.5 bg-emerald-500 mx-auto mb-8 rounded-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}></div>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Your application has been successfully received. Our admissions team will review your details and reach out to you within <span className="text-emerald-700 font-bold">24-48 hours</span> to schedule your free trial classes.
          </p>
          <button 
            onClick={() => window.location.hash = '#/'}
            className="group px-10 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-emerald-200 flex items-center gap-2 mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Return to Homepage
          </button>
          
          <p className="mt-8 text-sm text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            A confirmation email has been sent to your inbox.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-white relative">
      {/* Confirmation Dialog Overlay */}
      {showConfirmDialog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-2xl">
                <AlertCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <button onClick={handleCancel} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <h3 className="text-2xl font-bold text-emerald-950 mb-4">Confirm Submission</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Are you sure you want to submit your application for enrollment? Please ensure all your details are correct before proceeding.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleCancel}
                className="flex-1 py-3 px-6 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all"
              >
                Go Back
              </button>
              <button 
                onClick={handleConfirm}
                className="flex-1 py-3 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="bg-emerald-950 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[120%] bg-emerald-500 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 animate-fade-in-up">Start Your Spiritual Journey</h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Join thousands of students worldwide. Fill out the form below to register for a 3-day free trial session with our expert instructors.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-8 mb-24 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden grid lg:grid-cols-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Side Info */}
          <div className="bg-slate-50 p-8 lg:p-12 border-r border-slate-100">
            <h3 className="text-xl font-bold text-emerald-950 mb-8 flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-emerald-600" /> Admission Steps
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 shadow-lg shadow-emerald-200 transition-transform group-hover:scale-110">1</div>
                <div>
                  <h4 className="font-bold text-slate-900">Apply Online</h4>
                  <p className="text-sm text-slate-500">Submit your details and course preference.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-emerald-200 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 transition-transform group-hover:scale-110">2</div>
                <div>
                  <h4 className="font-bold text-slate-900">Trial Class</h4>
                  <p className="text-sm text-slate-500">Attend a 3-day free assessment session.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-emerald-200 text-emerald-800 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 transition-transform group-hover:scale-110">3</div>
                <div>
                  <h4 className="font-bold text-slate-900">Enrolment</h4>
                  <p className="text-sm text-slate-500">Finalize your schedule and start learning.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-6 bg-emerald-900 rounded-2xl text-white shadow-xl shadow-emerald-900/20">
              <p className="text-sm font-medium mb-4 italic opacity-80 leading-relaxed">"The best of you are those who learn the Quran and teach it."</p>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Join the Community</span>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-2 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50" placeholder="Student's Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Student Age</label>
                  <input required type="number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50" placeholder="Age" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">WhatsApp/Phone</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50" placeholder="+1 (000) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Select Program</label>
                <select 
                  required 
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50 cursor-pointer"
                >
                  <option value="">-- Choose a Course --</option>
                  {COURSES.map(course => (
                    <option key={course.id} value={course.id}>{course.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Current Level</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50 cursor-pointer">
                    <option>Complete Beginner</option>
                    <option>Can Read Arabic</option>
                    <option>Knows some Tajweed</option>
                    <option>Intermediate/Advanced</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Preferred Timing</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input type="text" className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50" placeholder="e.g. 6 PM - 8 PM EST" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Additional Notes</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50 resize-none" placeholder="Special requirements, health considerations, or prior experience..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 active:translate-y-0">
                Submit Application <Send className="w-5 h-5" />
              </button>
              
              <p className="text-center text-xs text-slate-400">
                By submitting this form, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
