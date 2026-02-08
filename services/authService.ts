import { User } from '../types';

// Mock service to simulate backend delays
export const authService = {
  login: async (email: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve({
            id: '1',
            name: 'Advocate John Doe',
            email: email,
            barRegistrationNumber: 'TS/1234/2020',
            avatar: 'https://picsum.photos/200'
          });
        } else {
          reject('Invalid credentials');
        }
      }, 1000);
    });
  },

  register: async (data: any): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '2',
          name: data.name,
          email: data.email,
          barRegistrationNumber: data.barId,
          avatar: 'https://picsum.photos/201'
        });
      }, 1000);
    });
  },

  resetPassword: async (_email: string): Promise<boolean> => {
    // Prefix parameter with underscore to indicate it is intentionally unused in this mock
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 800);
    });
  }
};