import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Code } from 'lucide-react';

const Footer: React.FC = () => {
  // Placeholder logo matching Navbar
  const LOGO_URL = "https://ui-avatars.com/api/?name=BA&background=1e3a8a&color=fff&size=128&rounded=true&bold=true&length=2";

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 border-t-4 border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
               <img src={LOGO_URL} alt="Logo" className="h-12 w-12 rounded-full border border-white/20" />
               <div className="flex flex-col">
                 <span className="font-serif font-bold text-lg text-white leading-none">Bar Association</span>
                 <span className="text-xs text-gold-500 font-bold tracking-widest uppercase mt-1">Karimnagar</span>
               </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Upholding justice, fostering legal excellence, and serving the community since 1950. The Bar Association of Karimnagar is dedicated to the welfare of advocates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition"><Linkedin size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm border-l-4 border-gold-500 pl-3">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/" className="hover:text-gold-500 transition flex items-center"><span className="mr-2">›</span> Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition flex items-center"><span className="mr-2">›</span> About Us</Link></li>
              <li><Link to="/executive-body" className="hover:text-gold-500 transition flex items-center"><span className="mr-2">›</span> Executive Body</Link></li>
              <li><Link to="/news" className="hover:text-gold-500 transition flex items-center"><span className="mr-2">›</span> News & Notices</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm border-l-4 border-gold-500 pl-3">Resources</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/resources/library" className="hover:text-gold-500 transition flex items-center"><span className="mr-2">›</span> Legal Library</Link></li>
              <li><Link to="/resources/documents" className="hover:text-gold-500 transition flex items-center"><span className="mr-2">›</span> Forms & Documents</Link></li>
              <li><a href="#" className="hover:text-gold-500 transition flex items-center"><span className="mr-2">›</span> Court Cause Lists</a></li>
              <li><a href="#" className="hover:text-gold-500 transition flex items-center"><span className="mr-2">›</span> Judgments</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm border-l-4 border-gold-500 pl-3">Contact Us</h3>
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
          <div className="mt-4 md:mt-0 flex space-x-6 items-center">
            <Link to="/theme-export" className="hover:text-white flex items-center text-gold-500 hover:underline">
              <Code size={14} className="mr-1"/> Get WordPress Theme
            </Link>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;