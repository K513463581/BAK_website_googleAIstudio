import React from 'react';
import { Link, useLocation } from '../types';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="bg-slate-100 border-b border-slate-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-navy-900">
                <Home size={16} />
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const title = value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

              return (
                <li key={to} className="flex items-center">
                  <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
                  <Link
                    to={to}
                    className={`ml-2 text-sm font-medium ${
                      isLast ? 'text-navy-900 font-bold pointer-events-none' : 'text-gray-500 hover:text-navy-900'
                    }`}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;