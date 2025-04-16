import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      setErrorMessage('Please fill in all required fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }
    
    try {
      setIsSubmitting(true);
      setErrorMessage('');
      
      const success = await register(formData.name, formData.email, formData.password);
      
      if (success) {
        navigate('/dashboard');
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-law-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-law">
        <div className="text-center">
          <Link to="/" className="text-2xl font-serif font-bold text-law-primary">
            Lawson & Associates
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-law-primary">Create your account</h2>
          <p className="mt-2 text-sm text-law-muted">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-law-secondary hover:text-law-primary transition-colors">
              Sign in
            </Link>
          </p>
        </div>
        
        {errorMessage && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-law-primary">
                Full Name <span className="text-law-secondary">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-law-primary focus:border-law-primary sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-law-primary">
                Email address <span className="text-law-secondary">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-law-primary focus:border-law-primary sm:text-sm"
                placeholder="john.doe@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-law-primary">
                Password <span className="text-law-secondary">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-law-primary focus:border-law-primary sm:text-sm"
                placeholder="********"
              />
              <p className="mt-1 text-xs text-law-muted">Password must be at least 8 characters long</p>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-law-primary">
                Confirm Password <span className="text-law-secondary">*</span>
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-law-primary focus:border-law-primary sm:text-sm"
                placeholder="********"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isSubmitting ? 'bg-law-primary opacity-70 cursor-not-allowed' : 'bg-law-primary hover:bg-law-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-law-primary'
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                  Creating account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </div>
          
          <div className="text-center text-sm">
            <p className="text-law-muted">
              By creating an account, you agree to our{' '}
              <a href="#" className="font-medium text-law-secondary hover:text-law-primary">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-law-secondary hover:text-law-primary">
                Privacy Policy
              </a>
            </p>
          </div>
        </form>
        
        <div className="mt-6">
          <Link to="/" className="flex items-center justify-center text-sm text-law-primary hover:text-law-secondary transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register; 