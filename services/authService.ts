import { User } from '../types';

// Configuration for the API
// If your PHP files are hosted on a different domain, change this URL (e.g., 'https://your-backend.com/api')
// If they are in a folder named 'api' in your public root, keep it as '/api'
const API_BASE_URL = '/api';

export const authService = {
  login: async (email: string, password: string): Promise<User> => {
    try {
      const response = await fetch(`${API_BASE_URL}/login.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Transform backend response to User type
      return {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        barRegistrationNumber: data.user.bar_registration_number, // Mapping from DB column
        avatar: data.user.avatar || 'https://ui-avatars.com/api/?name=' + data.user.name,
      };
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  },

  register: async (formData: any): Promise<User> => {
    try {
      const response = await fetch(`${API_BASE_URL}/register.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          bar_id: formData.barId, // Mapping to backend expectation
          password: formData.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      return {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        barRegistrationNumber: data.user.bar_registration_number,
        avatar: 'https://ui-avatars.com/api/?name=' + data.user.name,
      };
    } catch (error) {
      console.error("Registration Error:", error);
      throw error;
    }
  },

  resetPassword: async (email: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE_URL}/reset-password.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      return response.ok;
    } catch (error) {
      console.error("Reset Password Error:", error);
      return false;
    }
  }
};