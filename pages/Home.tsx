import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Gavel, Scale, BookOpen, Users, ArrowRight, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      label: "ESTABLISHED 1950",
      title: "Upholding Justice, Defending Rights",
      desc: "The official digital portal of the Bar Association of Karimnagar. Serving the legal community with integrity and excellence.",
      btnText: "Learn More",
      link: "/about",
      color: "text-gold-500"
    },
    {
      label: "LATEST NEWS",
      title: "General Body Meeting Notice",
      desc: "Important gathering regarding the new court complex allocation. All members are requested to attend this mandatory session.",
      btnText: "Read News",
      link: "/news",
      color: "text-blue-400"
    },
    {
      label: "UPCOMING EVENTS",
      title: "Annual Legal Workshop 2024",
      desc: "Join us for a seminar on Digital Forensics in Criminal Law featuring High Court Justices. Registration is now open.",
      btnText: "View Event Details",
      link: "/news",
      color: "text-green-400"
    },
    {
      label: "LEGAL LIBRARY",
      title: "Access Digital Judgments",
      desc: "Our new comprehensive library offers instant access to Supreme Court and High Court judgments for all registered members.",
      btnText: "Browse Library",
      link: "/resources/library",
      color: "text-purple-400"
    },
    {
      label: "MEMBERSHIP",
      title: "Join Our Community",
      desc: "Become a part of a legacy that has stood for over 70 years. Apply for membership to access exclusive benefits.",
      btnText: "Register Now",
      link: "/auth",
      color: "text-gold-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Placeholder for the Lady Justice statue user uploaded
  const LADY_JUSTICE_IMG = "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=1000&auto=format&fit=crop";

  return (
    <div className="animate-fade-in">
      
      {/* Hero Section with Carousel and Image */}
      <section className="relative bg-navy-900 overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center min-h-[600px] py-12 md:py-0">
            
            {/* Left Side: Text Carousel (70%) */}
            <div className="w-full md:w-[70%] z-10 pr-0 md:pr-12 pt-8 md:pt-0">
               <div className="relative min-h-[300px] flex flex-col justify-center">
                  
                  {/* Slide Content */}
                  {slides.map((slide, index) => (
                    <div 
                      key={index}
                      className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center ${
                        index === currentSlide 
                          ? 'opacity-100 translate-x-0 relative' 
                          : 'opacity-0 -translate-x-8 absolute pointer-events-none'
                      }`}
                    >
                      <span className={`inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 ${slide.color} text-sm font-semibold tracking-wider mb-6 w-fit`}>
                        {slide.label}
                      </span>
                      <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-lg font-light leading-relaxed">
                        {slide.desc}
                      </p>
                      <div>
                        <Link 
                          to={slide.link} 
                          className="inline-flex items-center px-8 py-3 bg-gold-600 hover:bg-gold-500 text-white rounded-md font-semibold transition-all transform hover:scale-105 shadow-lg"
                        >
                          {slide.btnText} <ArrowRight size={18} className="ml-2"/>
                        </Link>
                      </div>
                    </div>
                  ))}
               </div>

               {/* Carousel Controls */}
               <div className="flex space-x-4 mt-8 md:mt-12">
                  <button onClick={prevSlide} className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
                    <ChevronLeft size={24} />
                  </button>
                  <div className="flex space-x-2 items-center">
                    {slides.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-gold-500' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                      />
                    ))}
                  </div>
                  <button onClick={nextSlide} className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
                    <ChevronRight size={24} />
                  </button>
               </div>
            </div>

            {/* Right Side: Statue Image (30%) */}
            <div className="w-full md:w-[30%] z-10 flex justify-center md:justify-end relative h-[400px] md:h-[600px]">
               {/* Glowing effect behind the statue */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gold-500/20 blur-[80px] rounded-full"></div>
               
               <img 
                 src={LADY_JUSTICE_IMG}
                 alt="Lady Justice Statue" 
                 className="h-full w-auto object-contain drop-shadow-2xl relative z-10 mask-image-gradient"
                 style={{ filter: 'brightness(1.1) contrast(1.1)' }}
               />
            </div>

          </div>
        </div>
      </section>

      {/* Info Cards / Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-30">
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
      <section className="py-16 bg-navy-900 text-white border-t border-white/10">
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