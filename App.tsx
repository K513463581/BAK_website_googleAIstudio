import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ExecutiveBody from './pages/ExecutiveBody';
import Resources from './pages/Resources';
import News from './pages/News';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persisted session simulation
    const savedUser = localStorage.getItem('bak_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('bak_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('bak_user');
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-50 text-navy-900">Loading...</div>;

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-800">
        <Navbar user={user} onLogout={handleLogout} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/executive-body" element={<ExecutiveBody />} />
            
            {/* Resources Sub-routes */}
            <Route path="/resources/library" element={<Resources />} />
            <Route path="/resources/documents" element={<Resources />} />
            
            <Route path="/news" element={<News />} />
            
            <Route 
              path="/auth" 
              element={!user ? <Auth onLogin={handleLogin} /> : <Navigate to="/profile" />} 
            />
            
            <Route 
              path="/profile" 
              element={user ? <Profile user={user} /> : <Navigate to="/auth" />} 
            />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;