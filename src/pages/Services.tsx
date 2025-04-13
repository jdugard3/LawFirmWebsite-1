import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Corporate Law',
      description: 'Comprehensive legal solutions for businesses of all sizes, including formation, mergers, acquisitions, and corporate governance.',
      icon: '🏢'
    },
    {
      title: 'Civil Litigation',
      description: 'Expert representation in civil disputes, with a focus on achieving favorable outcomes through negotiation or litigation.',
      icon: '⚖️'
    },
    {
      title: 'Real Estate Law',
      description: 'Legal guidance for property transactions, development projects, and real estate investment strategies.',
      icon: '🏠'
    },
    {
      title: 'Employment Law',
      description: 'Protection of employee rights and employer interests, including workplace policies and dispute resolution.',
      icon: '👥'
    },
    {
      title: 'Intellectual Property',
      description: 'Protection and enforcement of intellectual property rights, including patents, trademarks, and copyrights.',
      icon: '💡'
    },
    {
      title: 'Family Law',
      description: 'Sensitive handling of family matters, including divorce, custody, and estate planning.',
      icon: '👨‍👩‍👧‍👦'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Legal Services</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Comprehensive legal solutions tailored to meet your specific needs and objectives.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Schedule a consultation with our experienced attorneys today.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services; 