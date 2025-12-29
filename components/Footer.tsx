
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, ChevronRight, CheckCircle2 } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Book className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white">Darul Quran</span>
          </div>
          <p className="leading-relaxed mb-8 text-sm">
            Enabling the global Muslim community to learn and master the Holy Quran through personalized online education and expert guidance.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-8 border-l-4 border-emerald-600 pl-4 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            {['Home', 'About Us', 'All Courses', 'Our Teachers', 'Scholarships'].map(link => (
              <li key={link}>
                <Link to="#" className="hover:text-emerald-500 flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-4 h-4" /> {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-8 border-l-4 border-emerald-600 pl-4 uppercase tracking-widest text-xs">Support</h4>
          <ul className="space-y-4 text-sm">
            {['Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Live Chat'].map(link => (
              <li key={link}>
                <Link to="#" className="hover:text-emerald-500 flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-4 h-4" /> {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-8 border-l-4 border-emerald-600 pl-4 uppercase tracking-widest text-xs">Newsletter</h4>
          <p className="mb-6 text-sm">Stay updated with our latest courses and Islamic insights.</p>
          
          {subscribed ? (
            <div className="bg-emerald-900/20 border border-emerald-800/50 p-6 rounded-2xl animate-fade-in-up">
              <div className="flex items-center gap-3 text-emerald-500 mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-bold text-sm">Subscribed!</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                JazakAllah Khair! You've successfully joined our spiritual community.
              </p>
            </div>
          ) : (
            <form className="relative" onSubmit={handleSubscribe}>
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none focus:border-emerald-600 transition-all text-white text-sm"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-6 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-bold text-sm"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Darul Quran Academy. All Rights Reserved.
        </p>
        <p className="text-xs font-medium text-slate-600 uppercase tracking-widest">
          Designed for Excellence in Islamic Education.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
