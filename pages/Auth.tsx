import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { User, Lock, Mail, CreditCard, Scale, AlertCircle } from 'lucide-react';

interface AuthProps {
  onLogin: (user: any) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [view, setView] = useState<'login' | 'register' | 'forgot'>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  // Login State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  // Register State
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regBarId, setRegBarId] = useState('');
  const [regPass, setRegPass] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMsg('');
    try {
      const user = await authService.login(loginEmail, loginPass);
      onLogin(user);
      navigate('/profile');
    } catch (err: any) {
      setError(err.message || 'Invalid email or password. Please check your database connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMsg('');
    
    try {
        const user = await authService.register({
            name: regName,
            email: regEmail,
            barId: regBarId,
            password: regPass
        });
        setSuccessMsg("Registration successful! You can now log in.");
        setView('login');
    } catch (err: any) {
        setError(err.message || "Registration failed. Please try again.");
    } finally {
        setIsLoading(false);
    }
  };

  const handleForgot = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsLoading(true);
     await authService.resetPassword("test@test.com"); // Using mock/api logic
     setIsLoading(false);
     alert("If your account exists, a reset link has been sent.");
     setView('login');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-navy-900 rounded-full flex items-center justify-center text-white mb-4">
            <Scale size={32} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900">
            {view === 'login' ? 'Member Login' : view === 'register' ? 'Advocate Registration' : 'Reset Password'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {view === 'login' 
              ? 'Access the digital services of Karimnagar Bar Association' 
              : view === 'register' ? 'Join the official digital portal' : 'Enter email to receive reset link'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded text-sm text-center border border-red-200 flex items-center justify-center">
            <AlertCircle size={16} className="mr-2" /> {error}
          </div>
        )}

        {successMsg && (
          <div className="bg-green-50 text-green-600 p-3 rounded text-sm text-center border border-green-200">
            {successMsg}
          </div>
        )}

        {view === 'login' && (
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="relative">
                <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-navy-900 focus:border-navy-900 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-navy-900 focus:border-navy-900 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 text-navy-900 focus:ring-navy-900 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
              <button type="button" onClick={() => setView('forgot')} className="text-sm font-medium text-gold-600 hover:text-gold-500">
                Forgot password?
              </button>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-navy-900 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-900 transition-colors"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">Not registered yet? </span>
              <button type="button" onClick={() => setView('register')} className="text-sm font-medium text-gold-600 hover:text-gold-500">
                Create an account
              </button>
            </div>
          </form>
        )}

        {view === 'register' && (
           <form className="mt-8 space-y-4" onSubmit={handleRegister}>
             <div className="relative">
                <User className="absolute top-3 left-3 text-gray-400" size={20} />
                <input 
                    type="text" 
                    required 
                    className="pl-10 w-full py-3 border border-gray-300 rounded focus:ring-navy-900 focus:border-navy-900" 
                    placeholder="Full Name" 
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                />
             </div>
             <div className="relative">
                <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
                <input 
                    type="email" 
                    required 
                    className="pl-10 w-full py-3 border border-gray-300 rounded focus:ring-navy-900 focus:border-navy-900" 
                    placeholder="Email Address"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                />
             </div>
             <div className="relative">
                <CreditCard className="absolute top-3 left-3 text-gray-400" size={20} />
                <input 
                    type="text" 
                    required 
                    className="pl-10 w-full py-3 border border-gray-300 rounded focus:ring-navy-900 focus:border-navy-900" 
                    placeholder="Bar Registration Number" 
                    value={regBarId}
                    onChange={(e) => setRegBarId(e.target.value)}
                />
             </div>
             <div className="relative">
                <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
                <input 
                    type="password" 
                    required 
                    className="pl-10 w-full py-3 border border-gray-300 rounded focus:ring-navy-900 focus:border-navy-900" 
                    placeholder="Create Password" 
                    value={regPass}
                    onChange={(e) => setRegPass(e.target.value)}
                />
             </div>
             
             <button type="submit" disabled={isLoading} className="w-full py-3 bg-gold-600 hover:bg-gold-500 text-white rounded font-medium transition">
               {isLoading ? 'Processing...' : 'Submit Registration'}
             </button>
             <button type="button" onClick={() => setView('login')} className="w-full text-center text-sm text-gray-600 mt-2">
               Already have an account? Sign in
             </button>
           </form>
        )}

        {view === 'forgot' && (
          <form className="mt-8 space-y-6" onSubmit={handleForgot}>
             <div className="relative">
                <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
                <input type="email" required className="pl-10 w-full py-3 border border-gray-300 rounded focus:ring-navy-900 focus:border-navy-900" placeholder="Enter your registered email" />
             </div>
             <button type="submit" disabled={isLoading} className="w-full py-3 bg-navy-900 text-white rounded font-medium transition">
               {isLoading ? 'Sending...' : 'Send Reset Link'}
             </button>
             <button type="button" onClick={() => setView('login')} className="w-full text-center text-sm text-gray-600">
               Back to Login
             </button>
          </form>
        )}

      </div>
    </div>
  );
};

export default Auth;