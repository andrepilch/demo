import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
              Portfolio
            </Link>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Work
              </Link>
              <Link 
                to="/side-projects" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/side-projects') 
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Side Projects
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;