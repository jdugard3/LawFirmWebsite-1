import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Firm</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A tradition of excellence in legal representation since 1995
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[rgba(116,192,22,0.83)] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Lawson & Associates was founded in 1995 by Jonathan Lawson with a vision to provide exceptional legal services with integrity and dedication. What began as a small practice has grown into a respected firm with a team of experienced attorneys serving clients across various practice areas.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have built a reputation for excellence, professionalism, and client satisfaction. Our attorneys bring decades of combined experience to every case, ensuring that our clients receive the highest quality legal representation.
              </p>
              <p className="text-gray-600">
                Today, Lawson & Associates continues to uphold the founding principles of integrity, dedication, and client-focused service, as we help individuals and businesses navigate complex legal challenges and achieve favorable outcomes.
              </p>
            </div>
            <div className="h-[500px] rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                alt="Law firm office interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Guiding principles that define our approach to legal representation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[rgba(116,192,22,0.83)] rounded-full flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards in all our interactions, providing honest advice and transparent communication to our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[rgba(116,192,22,0.83)] rounded-full flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedication</h3>
              <p className="text-gray-600">
                We are committed to pursuing the best interests of our clients with unwavering dedication, working tirelessly to achieve favorable outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[rgba(116,192,22,0.83)] rounded-full flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client-Focused</h3>
              <p className="text-gray-600">
                We prioritize client satisfaction, providing personalized attention and tailored solutions that address the unique needs of each client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Legal Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Meet our experienced attorneys who are dedicated to providing exceptional legal representation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Attorney 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-80">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Jonathan Lawson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Jonathan Lawson</h3>
                <p className="text-[rgba(116,192,22,0.83)] mb-4">Founding Partner</p>
                <p className="text-gray-600 mb-4">
                  With over 30 years of experience in business law and litigation, Jonathan has established himself as a respected legal expert and advocate.
                </p>
                <p className="text-gray-800 font-medium">Areas of Practice:</p>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>• Business Law</li>
                  <li>• Corporate Litigation</li>
                  <li>• Contract Disputes</li>
                </ul>
              </div>
            </div>

            {/* Attorney 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-80">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Sarah Thompson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Thompson</h3>
                <p className="text-[rgba(116,192,22,0.83)] mb-4">Senior Partner</p>
                <p className="text-gray-600 mb-4">
                  Sarah brings 20 years of experience in family law, guiding clients through complex legal matters with compassion and expertise.
                </p>
                <p className="text-gray-800 font-medium">Areas of Practice:</p>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>• Family Law</li>
                  <li>• Divorce Proceedings</li>
                  <li>• Child Custody</li>
                </ul>
              </div>
            </div>

            {/* Attorney 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-80">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Michael Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Rodriguez</h3>
                <p className="text-[rgba(116,192,22,0.83)] mb-4">Partner</p>
                <p className="text-gray-600 mb-4">
                  Michael specializes in personal injury law with 15 years of experience helping victims secure the compensation they deserve.
                </p>
                <p className="text-gray-800 font-medium">Areas of Practice:</p>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>• Personal Injury</li>
                  <li>• Medical Malpractice</li>
                  <li>• Wrongful Death</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block bg-[rgba(116,192,22,0.83)] hover:bg-green-600 text-white px-6 py-3 rounded-md transition-colors font-medium">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 