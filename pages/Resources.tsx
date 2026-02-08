import React from 'react';
import { useLocation } from 'react-router-dom';
import { FileText, Download, Search, Book, ExternalLink } from 'lucide-react';

const Resources: React.FC = () => {
  const location = useLocation();
  const isLibrary = location.pathname.includes('library');

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-navy-900 py-16 text-center text-white">
        <h1 className="text-4xl font-serif font-bold mb-4">
          {isLibrary ? 'Legal Library' : 'Downloads & Documents'}
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          {isLibrary 
            ? 'Access our curated collection of legal journals, case laws, and reference books.' 
            : 'Download essential forms, applications, and model drafts.'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Filter */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder={isLibrary ? "Search for books, journals..." : "Search forms..."}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <div className="flex space-x-2 w-full md:w-auto overflow-x-auto">
            {['All', 'Criminal', 'Civil', 'Family', 'Corporate'].map(cat => (
              <button key={cat} className="px-4 py-2 text-sm bg-gray-100 hover:bg-gold-500 hover:text-white rounded-md transition-colors whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLibrary ? (
            // Library Items
            [1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-100 flex gap-4">
                <div className="w-20 h-28 bg-navy-100 rounded flex items-center justify-center flex-shrink-0 text-navy-800">
                  <Book size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 line-clamp-2">Supreme Court Judgments 2023 - Vol {i}</h3>
                  <p className="text-sm text-gray-500 mt-1">Author: Legal Dept</p>
                  <p className="text-xs text-gray-400 mt-1">Added: Oct 2023</p>
                  <button className="mt-3 text-gold-600 text-sm font-semibold flex items-center hover:underline">
                    Read Online <ExternalLink size={12} className="ml-1"/>
                  </button>
                </div>
              </div>
            ))
          ) : (
            // Document Items
            [1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                    <FileText size={24} />
                  </div>
                  <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">PDF</span>
                </div>
                <h3 className="font-bold text-navy-900 mb-2">Vakalatnama Form {i}</h3>
                <p className="text-sm text-gray-500 mb-4">Standard vakalatnama format for District Courts.</p>
                <button className="w-full flex items-center justify-center py-2 border border-navy-900 text-navy-900 rounded hover:bg-navy-900 hover:text-white transition">
                  <Download size={16} className="mr-2" /> Download
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;