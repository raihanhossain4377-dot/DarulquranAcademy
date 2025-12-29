
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
          {/* Info Side */}
          <div className="bg-emerald-900 text-white p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-serif mb-6">Get in Touch</h3>
              <p className="text-emerald-100 mb-12 text-lg">
                Have questions about our programs or enrollment process? Our friendly team is here to help you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-emerald-800 p-3 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-emerald-300 text-sm font-bold uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-lg font-medium">info@darulquranacademy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="bg-emerald-800 p-3 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-emerald-300 text-sm font-bold uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-lg font-medium">+1 (800) QURAN-01</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="bg-emerald-800 p-3 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-emerald-300 text-sm font-bold uppercase tracking-wider mb-1">Office</p>
                    <p className="text-lg font-medium">Global Virtual Presence &<br/>London, UK Support Center</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 flex gap-4">
              {['Facebook', 'Twitter', 'Instagram'].map(social => (
                <div key={social} className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center cursor-pointer hover:bg-emerald-700 transition-colors">
                  <span className="sr-only">{social}</span>
                  {/* Icons would go here */}
                </div>
              ))}
            </div>
          </div>
          
          {/* Form Side */}
          <div className="p-12 lg:p-16">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50">
                  <option>General Inquiry</option>
                  <option>Admissions</option>
                  <option>Teacher Recruitment</option>
                  <option>Technical Support</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50 resize-none" placeholder="Tell us how we can help..."></textarea>
              </div>
              
              <button className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 flex items-center justify-center gap-2 transition-all">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
