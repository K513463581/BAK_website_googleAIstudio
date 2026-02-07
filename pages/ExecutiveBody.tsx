import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { ExecutiveMember } from '../types';
import Breadcrumbs from '../components/Breadcrumbs';

const tier1Members: ExecutiveMember[] = [
  { id: '1', name: 'Sri. L.Nagaraju', position: 'President', image: 'https://picsum.photos/seed/pres/400/400', email: 'president@bak.com' },
  { id: '2', name: 'Sri. K.Arun Kumar', position: 'General Secretary', image: 'https://picsum.photos/seed/sec/400/400', email: 'secretary@bak.com' },
  { id: '3', name: 'Sri. Ch.Ramesh', position: 'Vice President', image: 'https://picsum.photos/seed/vp/400/400' },
];

const tier2Members: ExecutiveMember[] = [
  { id: '4', name: 'Sri. S.Sridhar Rao', position: 'Secretary', image: 'https://picsum.photos/seed/js/300/300' },
  { id: '5', name: 'Sri. M. Sampat', position: 'Treasurer', image: 'https://picsum.photos/seed/tres/300/300' },
  { id: '6', name: 'Smt. R. Rajini Gandhi', position: 'Lady Representative', image: 'https://picsum.photos/seed/lady/300/300' },
];

const tier3Members: ExecutiveMember[] = [
  { id: '7', name: 'Sri. T.prabhakar', position: 'Library Secretary', image: 'https://picsum.photos/seed/lib/300/300' },
  { id: '8', name: 'Sri. G.Balram Nayak', position: 'Sports Secretary', image: 'https://picsum.photos/seed/sport/300/300' },
];

const MemberCard = ({ member, isLarge = false }: { member: ExecutiveMember, isLarge?: boolean }) => (
  <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${isLarge ? 'border-gold-600 p-8' : 'border-navy-900 p-6'}`}>
    <div className="relative mb-6">
      <img 
        src={member.image} 
        alt={member.name} 
        className={`${isLarge ? 'w-48 h-48 border-4' : 'w-32 h-32 border-3'} rounded-full mx-auto object-cover border-slate-100 shadow-md`} 
      />
    </div>
    <div className="text-center">
      <h3 className={`font-bold text-navy-900 ${isLarge ? 'text-2xl mb-2' : 'text-lg mb-1'}`}>
        {member.name}
      </h3>
      <p className={`text-gold-600 font-semibold uppercase tracking-wide ${isLarge ? 'text-base mb-6' : 'text-sm mb-4'}`}>
        {member.position}
      </p>
      <div className="flex justify-center space-x-4 text-gray-400">
          {member.email && <Mail size={isLarge ? 20 : 16} className="hover:text-navy-900 cursor-pointer"/>}
          <Phone size={isLarge ? 20 : 16} className="hover:text-navy-900 cursor-pointer"/>
      </div>
    </div>
  </div>
);

const ExecutiveBody: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
       <div className="bg-navy-900 py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-serif font-bold">Executive Body</h1>
        <p className="text-slate-300 mt-2">Leadership Team (2023-2024)</p>
      </div>
      
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Row 1: President, Gen Sec, Vice President (Larger) */}
        <div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
             {tier1Members.map(member => (
               <MemberCard key={member.id} member={member} isLarge={true} />
             ))}
           </div>
        </div>

        <div className="w-full h-px bg-gray-200 max-w-4xl mx-auto"></div>

        {/* Row 2: Secretary, Treasurer, Lady Representative */}
        <div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
             {tier2Members.map(member => (
               <MemberCard key={member.id} member={member} />
             ))}
           </div>
        </div>

        {/* Row 3: Library Secretary, Sport Secretary */}
        <div>
           <div className="flex flex-wrap justify-center gap-8">
             {tier3Members.map(member => (
               <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.33rem)]">
                 <MemberCard member={member} />
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default ExecutiveBody;