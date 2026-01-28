import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut, Scale } from 'lucide-react';

interface NavbarProps {
  user: any | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
      } font-medium`}
    >
      {children}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-navy-900 p-2 rounded-full text-white group-hover:bg-gold-500 transition-colors">
              {/* Using Scale icon as generic logo, but img tag is prepared for real asset */}
              <Scale size={32} />
              {/* <img src="URL_TO_LOGO" alt="Logo" className="h-10 w-10" /> */}
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-navy-900 leading-tight">
                Bar Association
              </span>
              <span className="font-sans text-xs md:text-sm text-gold-600 tracking-wider font-semibold">
                OF KARIMNAGAR
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/executive-body">Executive Body</NavLink>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 px-3 py-2 font-medium ${
                  location.pathname.includes('resources') ? 'text-gold-500 font-bold' : 'text-gray-700 hover:text-navy-900'
                }`}
              >
                <span>Resources</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <Link to="/resources/library" className="block px-4 py-3 text-sm text-gray-700 hover:bg-slate-50 hover:text-navy-900">
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
                <button className="flex items-center space-x-2 text-navy-900 hover:text-gold-600 font-medium border border-gray-200 rounded-full px-3 py-1 bg-gray-50">
                  <User size={18} />
                  <span>Account</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                   <div className="px-4 py-3 border-b border-gray-100 bg-slate-50">
                      <p className="text-sm font-medium text-navy-900 truncate">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                   </div>
                   <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</Link>
                   <button onClick={onLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2">
                      <LogOut size={14} /> <span>Logout</span>
                   </button>
                </div>
              </div>
            ) : (
              <Link to="/auth" className="ml-4 bg-navy-900 hover:bg-navy-800 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm">
                Login / Join
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy-900 hover:text-gold-500 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 max-h-screen overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" mobile>Home</NavLink>
            <NavLink to="/about" mobile>About</NavLink>
            <NavLink to="/executive-body" mobile>Executive Body</NavLink>
            
            {/* Mobile Resources Accordion */}
            <div>
              <button 
                onClick={() => setResourceOpen(!resourceOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 font-medium"
              >
                <span>Resources</span>
                <ChevronDown size={16} className={`transform transition-transform ${resourceOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourceOpen && (
                <div className="bg-slate-50 pl-6 py-1">
                   <Link to="/resources/library" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-sm text-gray-600">Legal Library</Link>
                   <Link to="/resources/documents" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-sm text-gray-600">Documents</Link>
                </div>
              )}
            </div>

            <NavLink to="/news" mobile>News</NavLink>
            
            <div className="pt-4 border-t border-gray-100 mt-2">
              {user ? (
                <>
                  <Link to="/profile" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-navy-900 font-medium">My Profile</Link>
                  <button onClick={() => { onLogout(); setIsOpen(false); }} className="block w-full text-left px-4 py-2 text-red-600 font-medium">Logout</button>
                </>
              ) : (
                <Link to="/auth" onClick={() => setIsOpen(false)} className="block mx-4 text-center bg-navy-900 text-white px-4 py-2 rounded-md font-medium">
                  Login / Register
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