import React from 'react';
import { Heart, Leaf, Award, Users, Eye, Shield, Cog } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Quality',
      description: 'Every spice is carefully selected and processed with love and dedication to ensure the highest quality.'
    },
    {
      icon: Eye,
      title: 'CCTV Surveillance',
      description: 'Complete monitoring system for security, purity assurance, and quality control.'
    },
    {
      icon: Award,
      title: '100% Mesh Quality',
      description: 'Premium grinding quality with consistent mesh size and perfect texture.'
    },
    {
      icon: Users,
      title: 'Job Work Services',
      description: 'Professional grinding services for masala and ayurvedic products.'
    }
  ];

  const qualityAssurance = [
    {
      icon: Eye,
      title: 'CCTV Camera Surveillance',
      description: 'For Security and Purity',
      features: [
        'Real-time monitoring of production areas',
        'Ensures hygiene and cleanliness',
        'Quality control at every step',
        'Complete process transparency'
      ]
    },
    {
      icon: Shield,
      title: 'Grinding Quality 100% Mesh',
      description: 'Premium Processing Standards',
      features: [
        'Uniform particle size distribution',
        'Perfect texture consistency',
        'Enhanced flavor release',
        'Professional grade output'
      ]
    },
    {
      icon: Cog,
      title: 'Job Work Services',
      description: 'Masala and Ayurvedic Products',
      features: [
        'Custom masala grinding',
        'Ayurvedic product processing',
        'Small to large batch orders',
        'Quality assured processing'
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Ashwini Masal Mill
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of taste, tradition, and trust spanning over five decades with modern quality assurance
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div 
              className="rounded-2xl shadow-2xl overflow-hidden h-96 bg-cover bg-center"
              style={{
                backgroundImage: 'url(industrial_grade_equipment.jpeg)'
              }}
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Our Story</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
            Founded in 2011 by our patriarch, Ashwini Masal Mills began as a small family business with a simple vision: to bring the authentic taste of India to every household. What started with a traditional stone grinder and a passion for quality has grown into one of the most trusted names in the spice industry.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            Over the decades, we have maintained our commitment to traditional processing methods while embracing modern quality standards. Our spices are sourced directly from farmers across India, ensuring freshness and supporting local communities.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 bg-orange-400 rounded-full border-4 border-white"></div>
                <div className="w-12 h-12 bg-red-400 rounded-full border-4 border-white"></div>
                <div className="w-12 h-12 bg-yellow-400 rounded-full border-4 border-white"></div>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Three Generations</p>
                <p className="text-sm text-gray-600">of spice expertise</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Quality Assurance & Security
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We ensure the highest standards of quality, purity, and security through modern monitoring and processing systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {qualityAssurance.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-orange-600 font-semibold mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Manufacturing Process</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
              <img 
                src="/quality_production.jpeg" 
                alt="Grinding machinery"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Modern Grinding Technology</h4>
              <p className="text-gray-600">
                Our state-of-the-art grinding machinery ensures 100% mesh consistency and preserves the natural oils and flavors of spices with complete CCTV monitoring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
              <img 
                src="/traditional _excellence.jpeg" 
                alt="Processing facility"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Quality Processing Facility</h4>
              <p className="text-gray-600">
                Our hygienic processing facility maintains the highest standards of cleanliness and quality control with continuous surveillance for purity assurance.
              </p>
            </div>
          </div>
        </div>

        {/* Job Work Services Section */}
        <div className="mb-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Job Work Services
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We are doing job work of masala and ayurvedic products with guaranteed quality and complete monitoring
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Cog className="mr-3" size={24} />
                Masala Products
              </h4>
              <ul className="space-y-2 text-white/90">
                <li>• Chilli powder</li>
                <li>• Coriander powder</li>
                <li>• Garam masala powder</li>
                <li>• Ghati masala</li>
                <li>• Malwani fish masala</li>
                <li>• Chicken masala</li>
                <li>• Mutton masala</li>
                <li>• Biriyani masala</li>
                <li>• Kitchen king masala</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Leaf className="mr-3" size={24} />
                Ayurvedic Products
              </h4>
              <ul className="space-y-2 text-white/90">
                <li>• Turmeric powder</li>
                <li>• Black pepper powder</li>
                <li>• Jeera powder</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed opacity-90">
              To preserve and share the authentic flavors of Indian cuisine by providing the highest quality 
              spices and masalas with modern quality assurance, CCTV surveillance for purity, and professional 
              job work services while supporting sustainable farming practices.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed opacity-90">
              To become the most trusted and beloved spice brand in India and beyond, known for our unwavering 
              commitment to quality, security, transparency through CCTV monitoring, and customer satisfaction, 
              while expanding our reach to spice lovers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;