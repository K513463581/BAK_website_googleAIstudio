import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';

interface NavbarProps {
  user: any | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Placeholder logo matching the blue theme - Replace src with your actual file
  const LOGO_URL = "https://ui-avatars.com/api/?name=BA&background=1e3a8a&color=fff&size=128&rounded=true&bold=true&length=2";

  const NavLink = ({ to, children, mobile = false }: { to: string; children?: React.ReactNode; mobile?: boolean }) => (
    <Link
      to={to}
      onClick={() => setIsOpen(false)}
      className={`${
        mobile ? 'block w-full py-2 px-4' : 'px-3 py-2'
      } ${
        isActive(to) 
          ? 'text-gold-500 font-bold' 
          : 'text-gray-700 hover:text-navy-900 transition-colors duration-200'
      } font-medium text-sm uppercase tracking-wide`}
    >
      {children}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
                <div className="absolute inset-0 bg-navy-900 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img 
                    src={LOGO_URL} 
                    alt="Bar Association of Karimnagar Logo" 
                    className="h-16 w-16 relative z-10 rounded-full border-2 border-white shadow-sm"
                />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl md:text-2xl text-navy-900 leading-tight">
                BAR ASSOCIATION
              </span>
              <span className="font-sans text-xs md:text-sm text-gold-600 tracking-[0.2em] font-bold uppercase">
                KARIMNAGAR
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/executive-body">Executive Body</NavLink>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 px-3 py-2 font-medium text-sm uppercase tracking-wide ${
                  location.pathname.includes('resources') ? 'text-gold-500 font-bold' : 'text-gray-700 hover:text-navy-900'
                }`}
              >
                <span>Resources</span>
                <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white border-t-2 border-gold-500 shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <Link to="/resources/library" className="block px-4 py-3 text-sm text-gray-700 hover:bg-slate-50 hover:text-navy-900 border-b border-gray-100">
                  Legal Library
                </Link>
                <Link to="/resources/documents" className="block px-4 py-3 text-sm text-gray-700 hover:bg-slate-50 hover:text-navy-900">
                  Documents & Forms
                </Link>
              </div>
            </div>

            <NavLink to="/news">News</NavLink>

            {/* Auth Button */}
            {user ? (
              <div className="relative group ml-4">
                <button className="flex items-center space-x-2 text-navy-900 hover:text-gold-600 font-medium border border-gray-200 rounded-full px-4 py-2 bg-gray-50 transition-colors">
                  <User size={18} />
                  <span className="max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
                </button>
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                   <div className="px-4 py-3 border-b border-gray-100 bg-slate-50">
                      <p className="text-sm font-medium text-navy-900 truncate">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                   </div>
                   <Link to="/profile" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                     <User size={14} className="mr-2"/> Profile
                   </Link>
                   <button onClick={onLogout} className="block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center border-t border-gray-100">
                      <LogOut size={14} className="mr-2" /> Logout
                   </button>
                </div>
              </div>
            ) : (
              <Link to="/auth" className="ml-6 bg-navy-900 hover:bg-gold-600 text-white px-6 py-2.5 rounded shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm font-bold tracking-wide uppercase">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy-900 hover:text-gold-500 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 max-h-screen overflow-y-auto shadow-inner">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <NavLink to="/" mobile>Home</NavLink>
            <NavLink to="/about" mobile>About</NavLink>
            <NavLink to="/executive-body" mobile>Executive Body</NavLink>
            
            {/* Mobile Resources Accordion */}
            <div className="border-b border-gray-50">
              <button 
                onClick={() => setResourceOpen(!resourceOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 font-medium uppercase text-sm tracking-wide"
              >
                <span>Resources</span>
                <ChevronDown size={16} className={`transform transition-transform ${resourceOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourceOpen && (
                <div className="bg-slate-50 pl-6 py-2">
                   <Link to="/resources/library" onClick={() => setIsOpen(false)} className="block py-3 px-4 text-sm text-gray-600 hover:text-navy-900">Legal Library</Link>
                   <Link to="/resources/documents" onClick={() => setIsOpen(false)} className="block py-3 px-4 text-sm text-gray-600 hover:text-navy-900">Documents</Link>
                </div>
              )}
            </div>

            <NavLink to="/news" mobile>News</NavLink>
            
            <div className="pt-6 mt-4">
              {user ? (
                <>
                  <Link to="/profile" onClick={() => setIsOpen(false)} className="block w-full text-center px-4 py-3 mb-3 bg-slate-100 text-navy-900 font-bold rounded">My Profile</Link>
                  <button onClick={() => { onLogout(); setIsOpen(false); }} className="block w-full text-center px-4 py-3 text-red-600 font-medium border border-red-100 rounded">Logout</button>
                </>
              ) : (
                <Link to="/auth" onClick={() => setIsOpen(false)} className="block w-full text-center bg-navy-900 text-white px-4 py-3 rounded shadow font-bold uppercase tracking-wide">
                  Login / Join
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;