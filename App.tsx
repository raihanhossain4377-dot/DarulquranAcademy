
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import CourseDetailPage from './components/CourseDetailPage';
import AdmissionsPage from './components/AdmissionsPage';
import Login from './components/Login';
import DashboardShell from './components/Dashboard/DashboardShell';
import { ArrowLeft, Mail } from 'lucide-react';

const App: React.FC = () => {
  const [user, setUser] = useState<{ role: 'student' | 'teacher' | 'admin'; name: string } | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('dqa_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (role: 'student' | 'teacher' | 'admin') => {
    const newUser = { role, name: role.charAt(0).toUpperCase() + role.slice(1) + ' User' };
    setUser(newUser);
    localStorage.setItem('dqa_user', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('dqa_user');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Courses />
                <Stats />
                <Testimonials />
                <Contact />
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
            <Route path="/apply" element={<AdmissionsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/dashboard/*" element={user ? <DashboardShell user={user} /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        {!window.location.hash.includes('dashboard') && <Footer />}
        <Assistant />
      </div>
    </Router>
  );
};

const ForgotPasswordPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
    <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 text-center animate-fade-in-up">
      <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <Mail className="text-emerald-600 w-8 h-8" />
      </div>
      <h1 className="text-3xl font-serif font-bold text-emerald-950 mb-4">Reset Password</h1>
      <p className="text-slate-500 mb-8">Enter your email address and we'll send you a link to reset your password.</p>
      <div className="space-y-4">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
        />
        <button className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all">
          Send Reset Link
        </button>
      </div>
      <Link to="/login" className="mt-8 flex items-center justify-center gap-2 text-emerald-600 font-bold hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Login
      </Link>
    </div>
  </div>
);

const AboutPage: React.FC = () => (
  <div className="py-24 px-6 max-w-7xl mx-auto">
    <h1 className="text-4xl font-serif mb-6 text-emerald-900">About Our Academy</h1>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-lg text-slate-600 mb-4">
          Darul Quran Academy was founded with the mission of providing accessible, high-quality Quranic and Islamic education to the global Muslim community.
        </p>
        <p className="text-lg text-slate-600 mb-4">
          Our teachers are certified from world-renowned Islamic institutions, ensuring that every student receives authentic and expert guidance.
        </p>
      </div>
      <img src="https://picsum.photos/seed/academy-about/800/600" className="rounded-2xl shadow-xl" alt="Academy building" />
    </div>
  </div>
);

const CoursesPage: React.FC = () => (
  <div className="py-24">
    <Courses />
  </div>
);

export default App;
