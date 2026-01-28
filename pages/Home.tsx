import React from 'react';
import { Link } from 'react-router-dom';
import { Gavel, Scale, BookOpen, Users, ArrowRight, Calendar, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-navy-900 overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-gold-500/20 border border-gold-500 text-gold-500 text-sm font-semibold tracking-wider mb-6">ESTABLISHED 1950</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Upholding Justice,<br/> <span className="text-gold-500">Defending Rights</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            The official digital portal of the Bar Association of Karimnagar. Serving the legal community with integrity and excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/auth" className="px-8 py-3 bg-gold-600 hover:bg-gold-500 text-white rounded-md font-semibold transition-all transform hover:scale-105 shadow-lg">
              Member Login
            </Link>
            <Link to="/about" className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white/10 rounded-md font-semibold transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Info Cards / Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-30">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-gold-500 hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mb-6">
                <Gavel size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Legal Advocacy</h3>
              <p className="text-gray-600 mb-4">Promoting the rule of law and ensuring fair representation for all citizens in the Karimnagar district.</p>
              <Link to="/about" className="text-gold-600 font-semibold flex items-center text-sm hover:underline">Read More <ArrowRight size={14} className="ml-1" /></Link>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-navy-900 hover:shadow-2xl transition-shadow">
               <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Resource Library</h3>
              <p className="text-gray-600 mb-4">Access a vast digital repository of judgments, acts, and legal forms exclusively for our members.</p>
              <Link to="/resources/library" className="text-gold-600 font-semibold flex items-center text-sm hover:underline">Browse Library <ArrowRight size={14} className="ml-1" /></Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-gold-500 hover:shadow-2xl transition-shadow">
               <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Member Welfare</h3>
              <p className="text-gray-600 mb-4">Dedicated to the professional growth and social security of all registered advocates.</p>
              <Link to="/executive-body" className="text-gold-600 font-semibold flex items-center text-sm hover:underline">View Committee <ArrowRight size={14} className="ml-1" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Infographics Stripe */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="p-4">
              <div className="text-gold-500 mb-2 flex justify-center"><Users size={32}/></div>
              <div className="text-4xl font-bold mb-1">1,200+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">Active Members</div>
            </div>
            <div className="p-4">
              <div className="text-gold-500 mb-2 flex justify-center"><Calendar size={32}/></div>
              <div className="text-4xl font-bold mb-1">73</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">Years of Legacy</div>
            </div>
            <div className="p-4">
              <div className="text-gold-500 mb-2 flex justify-center"><Scale size={32}/></div>
              <div className="text-4xl font-bold mb-1">500+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">Daily Cases</div>
            </div>
            <div className="p-4">
              <div className="text-gold-500 mb-2 flex justify-center"><Award size={32}/></div>
              <div className="text-4xl font-bold mb-1">15</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-gold-600 font-bold uppercase tracking-wider text-sm">Updates</span>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mt-2">Latest News & Notices</h2>
            </div>
            <Link to="/news" className="hidden md:inline-flex items-center font-semibold text-navy-900 hover:text-gold-600 transition">View All News <ArrowRight size={16} className="ml-2"/></Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <article key={item} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={`https://picsum.photos/seed/${item + 10}/600/400`} 
                    alt="News" 
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500" 
                  />
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className="bg-navy-100 text-navy-800 px-2 py-1 rounded mr-3">Notice</span>
                  <span>Oct {item + 10}, 2023</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition">General Body Meeting scheduled for next month regarding new court complex.</h3>
                <p className="text-gray-600 line-clamp-2">All members are requested to attend the extraordinary general body meeting scheduled at the Bar Association Hall.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;