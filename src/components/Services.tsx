import React from 'react';
import { Package, Truck, Shield, Users, Star, CheckCircle, Eye, Cog, Award } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Package,
      title: 'Premium Spice Blending',
      description: 'Custom spice blends crafted to your specific requirements and taste preferences.',
      features: ['Custom formulations', 'Small to large batches', 'Recipe consultation', 'Quality testing']
    },
    {
      icon: Cog,
      title: 'Job Work Services',
      description: 'Professional grinding and processing services for masala and ayurvedic products.',
      features: ['Masala grinding', 'Ayurvedic products', 'Custom processing', 'Bulk orders']
    },
    {
      icon: Truck,
      title: 'Wholesale Distribution',
      description: 'Reliable supply chain solutions for retailers and restaurants across India.',
      features: ['Bulk ordering', 'Competitive pricing', 'Timely delivery', 'Flexible payment terms']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control with CCTV surveillance and 100% mesh grinding quality.',
      features: ['CCTV monitoring', '100% mesh quality', 'Purity certification', 'Traceability']
    }
  ];

  const qualityFeatures = [
    {
      icon: Eye,
      title: 'CCTV Surveillance',
      description: 'Complete facility monitoring for security and purity assurance',
      details: [
        'Real-time monitoring of all production areas',
        'Ensures hygiene and cleanliness standards',
        'Quality control at every step',
        'Complete transparency in processing'
      ]
    },
    {
      icon: Award,
      title: '100% Mesh Quality',
      description: 'Premium grinding quality with consistent mesh size',
      details: [
        'Uniform particle size distribution',
        'Perfect texture and consistency',
        'Enhanced flavor release',
        'Professional grade output'
      ]
    },
    {
      icon: Cog,
      title: 'Job Work Specialization',
      description: 'Expert processing services for various products',
      details: [
        'Masala grinding and blending',
        'Ayurvedic product processing',
        'Custom formulation development',
        'Small to large batch processing'
      ]
    }
  ];

  const products = [
    {
      name: 'Garam Masala',
      image: './products/garam-masala.jpg',
      description: 'Our signature blend of aromatic spices'
    },
    {
      name: 'Turmeric Powder',
      image: './products/turmeric-powder.jpg',
      description: 'Pure, high-quality turmeric from farms'
    },
    {
      name: 'Red Chili Powder',
      image: './products/red-chili-powder.jpg',
      description: 'Vibrant color and perfect heat level'
    },
    {
      name: 'Coriander Powder',
      image: './products/coriander-powder.jpg',
      description: 'Freshly ground coriander seeds'
    },
    {
      name: 'Jeera Powder',
      image: './products/jeera-powder.jpg',
      description: 'Freshly ground Jeera Powder'
    },
    {
      name: 'Biryani Masala',
      image: './products/biryani-masala.jpg',
      description: 'Perfect blend for authentic biryani'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive spice solutions with quality assurance and professional job work services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-orange-100 hover:border-orange-200"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-600">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Quality & Security Features
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced monitoring and processing capabilities ensuring the highest standards
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Job Work Services Highlight */}
        <div className="mb-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Job Work Services
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We provide expert grinding and processing services for masala and ayurvedic products with guaranteed quality and purity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Masala Products</h4>
              <ul className="space-y-2 text-white/90">
                <li>• Garam masala blending</li>
                <li>• Spice powder grinding</li>
                <li>• Custom masala formulations</li>
                <li>• Bulk processing services</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Ayurvedic Products</h4>
              <ul className="space-y-2 text-white/90">
                <li>• Herbal powder processing</li>
                <li>• Ayurvedic formulations</li>
                <li>• Fine grinding services</li>
                <li>• Quality assured processing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Premium Products
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of authentic spices and masalas, each crafted with care and tradition all products are premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <button className="text-orange-600 hover:text-orange-700 font-semibold hover:underline">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Premium Quality?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with us to discuss your spice requirements, job work needs, or discover how we can enhance your culinary journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Request Quote
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300">
              Job Work Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;