import React from 'react';
import { Settings, Bell, FileText, Calendar } from 'lucide-react';
import { User as UserType } from '../types';

interface ProfileProps {
  user: UserType;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-navy-900 h-32"></div>
          <div className="px-8 pb-8 relative">
            <div className="absolute -top-16 left-8">
              <img 
                src={user.avatar} 
                alt="Profile" 
                className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover bg-white" 
              />
            </div>
            <div className="pt-20 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h1 className="text-3xl font-bold text-navy-900">{user.name}</h1>
                <p className="text-gray-500 flex items-center mt-1">
                  <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-sm mr-2">{user.barRegistrationNumber}</span>
                  Senior Advocate
                </p>
              </div>
              <button className="mt-4 sm:mt-0 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center">
                <Settings size={16} className="mr-2" /> Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-gray-900 mb-4">Membership Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Status</span>
                  <span className="text-green-600 font-semibold bg-green-50 px-2 rounded-full">Active</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Joined</span>
                  <span className="text-gray-900">Jan 15, 2020</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Valid Till</span>
                  <span className="text-gray-900">Dec 31, 2024</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-gray-900 mb-4">Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Bell size={16} className="text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-800">Membership dues pending for 2024.</p>
                    <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-xl text-navy-900 mb-6 flex items-center">
                <FileText size={20} className="mr-2 text-gold-600"/> My Downloads
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white p-2 rounded shadow-sm">
                        <FileText size={20} className="text-navy-900" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Bail Application Form Type B</p>
                        <p className="text-xs text-gray-500">Downloaded on Oct {i}, 2023</p>
                      </div>
                    </div>
                    <button className="text-sm text-navy-900 font-medium hover:underline">View</button>
                  </div>
                ))}
              </div>
            </div>

             <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-xl text-navy-900 mb-6 flex items-center">
                <Calendar size={20} className="mr-2 text-gold-600"/> Upcoming Events
              </h3>
              <div className="p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                No upcoming events registered.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;