import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <header className="bg-[rgba(116,192,22,0.83)] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-serif font-bold text-white">Erra Law</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`${location.pathname === '/' ? 'text-white border-b-2 border-white' : 'text-green-50 hover:text-white'} transition-colors duration-200 px-1 py-2 text-sm font-medium`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`${location.pathname === '/about' ? 'text-white border-b-2 border-white' : 'text-green-50 hover:text-white'} transition-colors duration-200 px-1 py-2 text-sm font-medium`}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`${location.pathname === '/services' ? 'text-white border-b-2 border-white' : 'text-green-50 hover:text-white'} transition-colors duration-200 px-1 py-2 text-sm font-medium`}
              >
                Practice Areas
              </Link>
              <Link 
                to="/contact" 
                className={`${location.pathname === '/contact' ? 'text-white border-b-2 border-white' : 'text-green-50 hover:text-white'} transition-colors duration-200 px-1 py-2 text-sm font-medium`}
              >
                Contact
              </Link>
              <Link 
                to="/login" 
                className="bg-white text-[rgba(116,192,22,0.83)] hover:bg-green-50 ml-4 px-5 py-2 rounded transition-colors duration-200 text-sm font-medium"
              >
                Client Portal
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-200 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-600 shadow-lg">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'bg-green-700 text-white' : 'text-green-50 hover:bg-green-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`${location.pathname === '/about' ? 'bg-green-700 text-white' : 'text-green-50 hover:bg-green-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`${location.pathname === '/services' ? 'bg-green-700 text-white' : 'text-green-50 hover:bg-green-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice Areas
            </Link>
            <Link 
              to="/contact" 
              className={`${location.pathname === '/contact' ? 'bg-green-700 text-white' : 'text-green-50 hover:bg-green-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-white text-[rgba(116,192,22,0.83)] hover:bg-green-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Client Portal
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[rgba(116,192,22,0.83)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Erra Law</h3>
              <p className="text-green-50 text-sm mb-4">
                Providing exceptional legal services with integrity and professionalism.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-green-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-green-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.028 10.028 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-green-200">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Contact Info</h3>
              <p className="text-green-50 text-sm mb-2">2601 South Bayshore Drive, 18th Floor</p>
              <p className="text-green-50 text-sm mb-2">Coconut Grove, FL 33133</p>
              <p className="text-green-50 text-sm mb-2">Phone: (305) 444-5969</p>
              <p className="text-green-50 text-sm">Email: info@erralaw.com</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Practice Areas</h3>
              <ul className="space-y-2 text-green-50 text-sm">
                <li><a href="#" className="hover:text-green-200 transition-colors duration-200">Business Law</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors duration-200">Family Law</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors duration-200">Personal Injury</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors duration-200">Real Estate Law</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors duration-200">Estate Planning</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-green-600">
            <p className="text-center text-green-50 text-sm">
              © {new Date().getFullYear()} Erra Law. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 