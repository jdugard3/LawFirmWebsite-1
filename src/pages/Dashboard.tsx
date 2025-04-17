import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handlePayNow = () => {
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const PaymentModal = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">Payment Options</h3>
            <button 
              onClick={closePaymentModal}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="mb-4">
            <div className="font-medium text-gray-900 mb-2">Outstanding Balance:</div>
            <div className="text-2xl font-bold text-indigo-600">$2,500.00</div>
          </div>
          
          <div className="space-y-4 mb-6">
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
              </svg>
              Pay with Credit Card
            </button>
            
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.4 12.3l-1 3.7h1.9l1-3.7h-1.9zm-3.8 0l-1.8 3.7h2l0.3-1h1.6l0.3 1h2.1l-1.7-3.7h-2.8zm0.5 1.9l0.4-0.9 0.4 0.9h-0.8z"></path>
                <path d="M20.2 12.3h-2.1l-1.3 3.7h1.9l0.2-0.7h1.5l0.3 0.7h1.9l-1.4-3.7zm-1 2.2l0.4-1 0.4 1h-0.8z"></path>
                <path d="M7.9 12.3l-2 3.7h2.1l1.9-3.7z"></path>
                <path d="M7.1 12.3l-3.6 3.7h1.9l0.5-0.6 2.3-2.3-0.1-0.8z"></path>
              </svg>
              Pay with PayPal
            </button>
            
            <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
              </svg>
              Bank Transfer
            </button>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Secure payment processing. Your payment information is encrypted and secure.</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {showPaymentModal && <PaymentModal />}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Welcome, {user?.name}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handlePayNow}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Pay Now
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Logout
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">Your Profile</h2>
                <div className="text-sm px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                  Balance Due: $2,500.00
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{user?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Account ID</p>
                  <p className="font-medium">{user?.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Case Status</p>
                  <p className="font-medium">Pending Client Documents</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <p>Logged in today at {new Date().toLocaleTimeString()}</p>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <p>Profile updated 2 days ago</p>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <p>Appointment scheduled for next week</p>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    <p>Invoice #INV-2023-05 issued</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Appointments</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-md">
                    <p className="font-medium">Initial Consultation</p>
                    <p className="text-sm text-gray-500">May 15, 2023 - 10:00 AM</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-md">
                    <p className="font-medium">Document Review</p>
                    <p className="text-sm text-gray-500">May 22, 2023 - 2:30 PM</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Payment History</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Retainer Payment</span>
                      <span className="text-green-600">$1,500.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>April 10, 2023</span>
                      <span>Paid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 