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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    
    // Clear submission states when form is modified
    if (formSubmitted) setFormSubmitted(false);
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      setIsSubmitting(true);
      setSubmitError(null);
      
      try {
        // Send data to webhook
        const response = await fetch('https://hook.us2.make.com/k564dt97dp8dj8dogaoxpb5rr5g6b1ii', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          setFormSubmitted(true);
          
          // Reset form after submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
        } else {
          // Handle error response
          console.error('Form submission failed:', await response.text());
          setSubmitError('There was an error submitting your message. Please try again later.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError('Network error. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-700 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto">
            We're here to help. Reach out to discuss your legal needs.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 px-4 bg-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[rgba(116,192,22,0.83)] mb-6">Get in Touch</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[rgba(116,192,22,0.83)] mb-4">Location</h3>
                <p className="text-gray-800 mb-2">2601 South Bayshore Drive, 18th Floor</p>
                <p className="text-gray-800 mb-2">Coconut Grove, FL 33133</p>
                <p className="text-gray-800">United States</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[rgba(116,192,22,0.83)] mb-4">Contact Information</h3>
                <p className="text-gray-800 mb-2">Phone: (305) 444-5969</p>
                <p className="text-gray-800 mb-2">Fax: (305) 444-5970</p>
                <p className="text-gray-800">Email: info@erralaw.com</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[rgba(116,192,22,0.83)] mb-4">Business Hours</h3>
                <p className="text-gray-800 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-800">Saturday - Sunday: Closed</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[rgba(116,192,22,0.83)] mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-[rgba(116,192,22,0.83)] hover:text-green-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.028 10.028 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[rgba(116,192,22,0.83)] hover:text-green-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[rgba(116,192,22,0.83)] mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Message Sent Successfully!</h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>Thank you for reaching out to us. A member of our team will review your message and get back to you within 1-2 business days.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">{submitError}</h3>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name <span className="text-[rgba(116,192,22,0.83)]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(116,192,22,0.83)] ${
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
                      Email Address <span className="text-[rgba(116,192,22,0.83)]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(116,192,22,0.83)] ${
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(116,192,22,0.83)]"
                      placeholder="(305) 444-5969"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(116,192,22,0.83)]"
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
                    Message <span className="text-[rgba(116,192,22,0.83)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(116,192,22,0.83)] ${
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
                    disabled={isSubmitting}
                    className="bg-[rgba(116,192,22,0.83)] hover:bg-green-600 text-white px-6 py-3 rounded-md transition-colors font-medium disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
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
          <div className="bg-gray-50 h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.211556513058!2d-80.24261492361548!3d25.7354244138146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7d0a65d7cc5%3A0xa57e89bef87a0bf0!2s2601%20S%20Bayshore%20Dr%2C%20Miami%2C%20FL%2033133!5e0!3m2!1sen!2sus!4v1685452174381!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Erra Law Firm - 2601 South Bayshore Drive, Coconut Grove"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 