import React from 'react';
import { Calendar } from 'lucide-react';

const News: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-navy-900 mb-4">News & Notices</h1>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-32 flex-shrink-0 bg-gray-200 rounded-md overflow-hidden">
                <img src={`https://picsum.photos/seed/news${i}/400/300`} alt="News" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                 <div className="flex items-center text-sm text-gray-500 mb-2">
                   <Calendar size={14} className="mr-1" /> <span>Oct {10 + i}, 2023</span>
                   <span className="mx-2">•</span>
                   <span className="text-gold-600 font-medium">Notice</span>
                 </div>
                 <h2 className="text-xl font-bold text-navy-900 mb-2 hover:text-gold-600 cursor-pointer">
                   High Court Circular Regarding E-Filing Procedure {i}
                 </h2>
                 <p className="text-gray-600 line-clamp-2">
                   The High Court has issued new guidelines regarding the mandatory e-filing for commercial disputes. All advocates are requested to adhere to the new protocols starting next month.
                 </p>
                 <button className="mt-4 text-navy-900 font-semibold text-sm hover:underline">Read Full Article</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;