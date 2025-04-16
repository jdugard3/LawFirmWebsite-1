import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: false,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email),
      message: !formData.message.trim(),
    };
    
    setFormErrors(errors);
    
    // If no errors, submit form
    if (!Object.values(errors).some(Boolean)) {
      // In a real application, you would send the form data to your backend or API
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-indigo-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            We're here to help. Reach out to discuss your legal needs.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">Get in Touch</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">Location</h3>
                <p className="text-gray-600 mb-2">123 Legal Avenue, Suite 400</p>
                <p className="text-gray-600 mb-2">New York, NY 10001</p>
                <p className="text-gray-600">United States</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-2">Phone: (555) 123-4567</p>
                <p className="text-gray-600 mb-2">Fax: (555) 123-4568</p>
                <p className="text-gray-600">Email: info@lawson-associates.com</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">Business Hours</h3>
                <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.028 10.028 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Thank you for contacting us! We will get back to you shortly.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name <span className="text-indigo-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">Please enter your name</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address <span className="text-indigo-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john.doe@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Business Law">Business Law</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Personal Injury">Personal Injury</option>
                      <option value="Real Estate Law">Real Estate Law</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message <span className="text-indigo-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Please describe how we can assist you..."
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">Please enter your message</p>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-law-light h-96 rounded-lg overflow-hidden shadow-law">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343035!2d-74.00425872429328!3d40.74076697138933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1680280143272!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Law Firm Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 