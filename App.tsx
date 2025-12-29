
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
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
          </Routes>
        </main>
        <Footer />
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
