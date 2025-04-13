import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-white rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Our Law Firm
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Providing exceptional legal services with integrity and dedication to our clients.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Schedule a Consultation
        </Link>
      </section>

      {/* Services Preview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Law</h3>
          <p className="text-gray-600 mb-4">
            Expert guidance for businesses of all sizes, from startups to established corporations.
          </p>
          <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
            Learn more →
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Law</h3>
          <p className="text-gray-600 mb-4">
            Compassionate support for family matters, including divorce, custody, and adoption.
          </p>
          <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
            Learn more →
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Criminal Defense</h3>
          <p className="text-gray-600 mb-4">
            Strong defense for individuals facing criminal charges at any stage of the process.
          </p>
          <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
            Learn more →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <p className="text-gray-600">Cases Won</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Expert Attorneys</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-600">Client Support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 