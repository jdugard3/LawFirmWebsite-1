import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the user type
export interface User {
  id: string;
  name: string;
  email: string;
}

// Define the authentication context type
export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, you would verify the token with your backend
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Authentication error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      
      // In a real app, this would be an API call to your backend
      // For demo purposes, we'll simulate a successful login with any credentials
      // with a slight delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a random user ID for the session
      const userId = Math.random().toString(36).substring(2, 15);
      
      // Use the email name part as the user name if not available
      const name = email.split('@')[0];
      
      // Mock user data
      const userData: User = {
        id: userId,
        name: name,
        email: email
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('User logged in:', userData);
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      
      // In a real app, this would be an API call to your backend
      // For demo purposes, we'll simulate a successful registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a random user ID for the session
      const userId = Math.random().toString(36).substring(2, 15);
      
      // Mock user data
      const userData: User = {
        id: userId,
        name: name,
        email: email
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('User registered:', userData);
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 