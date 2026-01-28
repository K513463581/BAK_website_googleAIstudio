import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { ExecutiveMember } from '../types';

const members: ExecutiveMember[] = [
  { id: '1', name: 'Sri. Rajesh Kumar', position: 'President', image: 'https://picsum.photos/seed/pres/300/300', email: 'president@bak.com' },
  { id: '2', name: 'Sri. V. Sharma', position: 'General Secretary', image: 'https://picsum.photos/seed/sec/300/300', email: 'secretary@bak.com' },
  { id: '3', name: 'Smt. K. Latha', position: 'Vice President', image: 'https://picsum.photos/seed/vp/300/300' },
  { id: '4', name: 'Sri. M. Reddy', position: 'Joint Secretary', image: 'https://picsum.photos/seed/js/300/300' },
  { id: '5', name: 'Sri. P. Rao', position: 'Treasurer', image: 'https://picsum.photos/seed/tres/300/300' },
  { id: '6', name: 'Smt. S. Devi', position: 'Librarian', image: 'https://picsum.photos/seed/lib/300/300' },
];

const ExecutiveBody: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">Executive Body</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the elected representatives leading the Bar Association of Karimnagar for the current term.
          </p>
        </div>

        {/* President Highlight */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center border-t-4 border-gold-500">
             <img src={members[0].image} alt={members[0].name} className="w-40 h-40 rounded-full mx-auto object-cover mb-6 border-4 border-slate-50" />
             <h2 className="text-2xl font-bold text-navy-900">{members[0].name}</h2>
             <p className="text-gold-600 font-semibold mb-4 uppercase tracking-wide">{members[0].position}</p>
             <div className="flex justify-center space-x-4 text-gray-400">
                <Mail size={18} className="hover:text-navy-900 cursor-pointer"/>
                <Phone size={18} className="hover:text-navy-900 cursor-pointer"/>
             </div>
          </div>
        </div>

        {/* Rest of the Body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.slice(1).map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative mb-6">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover" />
                <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 bg-navy-900 text-white text-xs px-3 py-1 rounded-full">
                  Elected
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-navy-900">{member.name}</h3>
                <p className="text-gold-600 text-sm font-medium mb-4">{member.position}</p>
                <div className="flex justify-center space-x-3 text-gray-400">
                   {member.email && <Mail size={16} className="hover:text-navy-900 cursor-pointer"/>}
                   <Phone size={16} className="hover:text-navy-900 cursor-pointer"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveBody;