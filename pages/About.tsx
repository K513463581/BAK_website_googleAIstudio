import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-xl text-slate-300">A legacy of trust, competence, and service.</p>
        </div>
      </div>
      
      <Breadcrumbs />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg text-gray-600 mx-auto">
          <p className="lead text-xl text-navy-900 font-medium mb-8">
            The Bar Association of Karimnagar is a premier body of legal professionals dedicated to upholding the constitution and serving the cause of justice in the district.
          </p>
          
          <h2 className="text-2xl font-bold text-navy-900 mt-12 mb-4">Our History</h2>
          <p className="mb-6">
            Established in 1950, shortly after India became a republic, our association started with a handful of dedicated advocates. Over the decades, we have grown into a robust community of over 1,200 active members. We have played a pivotal role in the judicial administration of the region and have consistently raised our voice for the rights of the bar and the bench.
          </p>

          <div className="my-12 p-8 bg-slate-50 border-l-4 border-gold-500 rounded-r-lg">
            <h3 className="text-xl font-bold text-navy-900 mb-2">Mission Statement</h3>
            <p className="italic text-gray-700">
              "To foster a spirit of brotherhood among members, to maintain high standards of professional conduct, and to ensure equal access to justice for the common man."
            </p>
          </div>

          <h2 className="text-2xl font-bold text-navy-900 mt-12 mb-4">What We Do</h2>
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>Provide continuing legal education to members through seminars and workshops.</li>
            <li>Maintain a well-equipped library with the latest law journals and digital resources.</li>
            <li>Safeguard the rights, privileges, and interests of the advocates.</li>
            <li>Organize legal aid camps for the underprivileged sections of society.</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <img src="https://picsum.photos/seed/court1/600/400" alt="Old Court Building" className="rounded-lg shadow-md" />
            <img src="https://picsum.photos/seed/court2/600/400" alt="Association Hall" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;