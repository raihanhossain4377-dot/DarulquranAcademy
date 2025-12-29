
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
            <Route path="/dashboard/*" element={user ? <DashboardShell user={user} /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        {!window.location.hash.includes('dashboard') && <Footer />}
        <Assistant />
      </div>
    </Router>
  );
};

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
