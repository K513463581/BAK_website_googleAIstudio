import React from 'react';
import { Calendar, Search, ChevronRight, Tag, User } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const News: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-navy-900 py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-serif font-bold">News & Notices</h1>
        <p className="text-slate-300 mt-2">Latest updates from the Bar Association</p>
      </div>
      
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Column (WP Loop) */}
          <div className="lg:col-span-2 space-y-10">
            {[1, 2, 3, 4].map((i) => (
              <article key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                <div className="relative h-64 overflow-hidden">
                  <img src={`https://picsum.photos/seed/news${i}/800/400`} alt="News" className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
                  <div className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wide rounded">
                    {i % 2 === 0 ? 'Notice' : 'Event'}
                  </div>
                </div>
                <div className="p-8">
                   <div className="flex items-center text-xs text-gray-400 mb-3 space-x-4">
                     <span className="flex items-center"><Calendar size={12} className="mr-1" /> Oct {10 + i}, 2023</span>
                     <span className="flex items-center"><User size={12} className="mr-1" /> Admin</span>
                     <span className="flex items-center"><Tag size={12} className="mr-1" /> General</span>
                   </div>
                   <h2 className="text-2xl font-serif font-bold text-navy-900 mb-3 hover:text-gold-600 cursor-pointer">
                     Important Notification Regarding Court Holidays and Vacation Bench {i}
                   </h2>
                   <p className="text-gray-600 leading-relaxed mb-6">
                     The High Court has issued new guidelines regarding the mandatory e-filing for commercial disputes. All advocates are requested to adhere to the new protocols starting next month...
                   </p>
                   <button className="text-white bg-navy-900 hover:bg-navy-800 px-5 py-2 rounded text-sm font-medium transition flex items-center">
                     Read More <ChevronRight size={14} className="ml-1"/>
                   </button>
                </div>
              </article>
            ))}

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-8">
              <span className="w-10 h-10 flex items-center justify-center bg-navy-900 text-white rounded cursor-pointer">1</span>
              <span className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 cursor-pointer">2</span>
              <span className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 cursor-pointer">3</span>
            </div>
          </div>

          {/* Sidebar Widget Area */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy-900 border-l-4 border-gold-500 pl-3 mb-4">Search</h3>
              <div className="relative">
                <input type="text" placeholder="Search news..." className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-navy-900" />
                <button className="absolute right-2 top-2 text-gray-400 hover:text-navy-900"><Search size={20}/></button>
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy-900 border-l-4 border-gold-500 pl-3 mb-4">Categories</h3>
              <ul className="space-y-2">
                {['Official Notices', 'Events & Seminars', 'Court Orders', 'Obituary', 'General News'].map(cat => (
                  <li key={cat} className="flex justify-between items-center text-sm group cursor-pointer">
                    <span className="text-gray-600 group-hover:text-gold-600 transition">{cat}</span>
                    <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs">{(Math.random() * 10).toFixed(0)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy-900 border-l-4 border-gold-500 pl-3 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-3 items-start group cursor-pointer">
                    <img src={`https://picsum.photos/seed/recent${i}/100/100`} className="w-16 h-16 rounded object-cover flex-shrink-0" alt="Thumb"/>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900 leading-tight group-hover:text-gold-600 transition">Annual General Body Meeting Notice</h4>
                      <p className="text-xs text-gray-400 mt-1">Oct 24, 2023</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Archives Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy-900 border-l-4 border-gold-500 pl-3 mb-4">Archives</h3>
              <select className="w-full p-2 border border-gray-300 rounded text-sm text-gray-600 focus:outline-none">
                <option>Select Month</option>
                <option>October 2023</option>
                <option>September 2023</option>
                <option>August 2023</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default News;