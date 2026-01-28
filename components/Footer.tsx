import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Scale } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 text-gold-500">
               <Scale size={28} />
               <span className="font-serif font-bold text-xl text-white">BAK</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Upholding justice, fostering legal excellence, and serving the community since 1950. The Bar Association of Karimnagar is dedicated to the welfare of advocates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-500 font-semibold mb-6 tracking-wide uppercase text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#/" className="hover:text-gold-500 transition">Home</a></li>
              <li><a href="#/about" className="hover:text-gold-500 transition">About Us</a></li>
              <li><a href="#/executive-body" className="hover:text-gold-500 transition">Executive Body</a></li>
              <li><a href="#/news" className="hover:text-gold-500 transition">News & Notices</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gold-500 font-semibold mb-6 tracking-wide uppercase text-sm">Resources</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#/resources/library" className="hover:text-gold-500 transition">Legal Library</a></li>
              <li><a href="#/resources/documents" className="hover:text-gold-500 transition">Forms & Documents</a></li>
              <li><a href="#" className="hover:text-gold-500 transition">Court Cause Lists</a></li>
              <li><a href="#" className="hover:text-gold-500 transition">Judgments</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold-500 font-semibold mb-6 tracking-wide uppercase text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-gold-500" />
                <span>District Court Complex,<br/>Karimnagar, Telangana 505001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold-500" />
                <span>+91 878 222 XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold-500" />
                <span>info@barassociationkarimnagar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Bar Association of Karimnagar. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;