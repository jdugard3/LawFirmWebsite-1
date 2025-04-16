import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const practiceAreas = [
    {
      id: 1,
      title: 'Business Law',
      description: 'We provide comprehensive legal services for businesses of all sizes, from startups to established corporations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      services: [
        'Business Formation & Structuring',
        'Contract Drafting & Negotiation',
        'Intellectual Property Protection',
        'Employment Law Compliance',
        'Business Litigation',
        'Mergers & Acquisitions'
      ]
    },
    {
      id: 2,
      title: 'Family Law',
      description: 'We offer compassionate legal representation for families navigating challenging life transitions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      services: [
        'Divorce & Legal Separation',
        'Child Custody & Support',
        'Alimony & Spousal Support',
        'Property Division',
        'Adoption',
        'Prenuptial & Postnuptial Agreements'
      ]
    },
    {
      id: 3,
      title: 'Personal Injury',
      description: 'We fight for fair compensation for those injured due to the negligence of others.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      services: [
        'Car & Vehicle Accidents',
        'Slip & Fall Accidents',
        'Medical Malpractice',
        'Workplace Injuries',
        'Product Liability',
        'Wrongful Death Claims'
      ]
    },
    {
      id: 4,
      title: 'Real Estate Law',
      description: 'We provide legal guidance for all aspects of real estate transactions and disputes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      services: [
        'Residential & Commercial Transactions',
        'Lease Agreements',
        'Property Disputes',
        'Title Examinations & Insurance',
        'Real Estate Development',
        'Zoning & Land Use'
      ]
    },
    {
      id: 5,
      title: 'Estate Planning',
      description: 'We help clients plan for the future and protect their assets for generations to come.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      services: [
        'Wills & Trusts',
        'Powers of Attorney',
        'Healthcare Directives',
        'Estate Administration & Probate',
        'Asset Protection',
        'Special Needs Planning'
      ]
    },
    {
      id: 6,
      title: 'Criminal Defense',
      description: 'We provide vigorous defense for those facing criminal charges.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      services: [
        'Felony & Misdemeanor Defense',
        'DUI Defense',
        'Drug Offenses',
        'White Collar Crimes',
        'Juvenile Defense',
        'Appeals & Post-Conviction Relief'
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-indigo-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Practice Areas</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Comprehensive legal services tailored to meet your specific needs
          </p>
        </div>
      </section>

      {/* Practice Areas List */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {practiceAreas.map((area) => (
              <div key={area.id} className="bg-gray-50 rounded-lg p-8 shadow-md">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                    {area.icon}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-indigo-900 mb-4">{area.title}</h2>
                    <p className="text-gray-600 mb-8">{area.description}</p>
                    
                    <h3 className="text-lg font-semibold text-indigo-900 mb-4">How We Can Help You</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {area.services.map((service, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{service}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to="/contact" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
                      Discuss Your Case
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 px-4 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule a Consultation</h2>
          <p className="text-xl mb-10 text-indigo-100">Our team of experienced attorneys is ready to help you with your legal matters.</p>
          <Link to="/contact" className="bg-white hover:bg-indigo-50 text-indigo-900 px-8 py-4 rounded-md text-lg font-medium transition-all duration-300 inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services; 