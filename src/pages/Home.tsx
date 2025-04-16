import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Law office"
          />
          <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Lawson & Associates</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            A premier law firm dedicated to providing exceptional legal services with integrity and compassion.
            Our team of experienced attorneys is committed to protecting your rights and interests.
          </p>
          <div className="mt-10 flex space-x-4">
            <Link
              to="/contact"
              className="inline-block bg-indigo-600 py-3 px-6 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="inline-block bg-white py-3 px-6 border border-transparent rounded-md text-base font-medium text-indigo-700 hover:bg-indigo-50"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Practice Areas Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Practice Areas</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Legal Expertise
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our firm specializes in various areas of law to meet your legal needs with precision and care.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Business Law</h3>
                    <p className="mt-5 text-base text-gray-500">
                      From formation to contracts and compliance, we guide businesses through legal complexities with strategic advice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Real Estate Law</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We handle residential and commercial real estate transactions, leases, and property disputes with precision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Estate Planning</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We help you plan for the future with wills, trusts, and comprehensive estate planning strategies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Family Law</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We provide compassionate representation in divorce, custody, and other family law matters.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Personal Injury</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We fight for the compensation you deserve after accidents and injuries caused by negligence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Civil Litigation</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Our skilled litigators represent clients in complex disputes with a strategic approach to resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-200 flex items-center justify-center">
                  <span className="text-indigo-700 font-bold text-lg">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">John Doe</h4>
                  <p className="text-indigo-600">Business Client</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "The team at Lawson & Associates guided our company through a complex merger with expertise and professionalism. They anticipated issues before they arose and provided clear, strategic advice throughout the process."
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-200 flex items-center justify-center">
                  <span className="text-indigo-700 font-bold text-lg">SM</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Sarah Miller</h4>
                  <p className="text-indigo-600">Real Estate Client</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "I was impressed by how thoroughly they handled my property purchase. The attention to detail and clear communication made what could have been a stressful process smooth and straightforward."
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-200 flex items-center justify-center">
                  <span className="text-indigo-700 font-bold text-lg">RJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Robert Johnson</h4>
                  <p className="text-indigo-600">Family Law Client</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "During a difficult time, the compassion and expertise shown by my attorney made all the difference. They fought for my rights while always keeping my family's best interests at heart."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Schedule a consultation today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Our team is ready to discuss your legal needs and provide you with the expert guidance you deserve.
          </p>
          <Link
            to="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 