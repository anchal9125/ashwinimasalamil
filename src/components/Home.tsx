import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Award, Users, Truck, Star, Shield, Eye, Cog } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/quality_production.jpeg',
      title: 'Quality Production',
      description: 'Advanced machinery ensuring consistent quality and purity'
    },
    {
      image: '/traditional _excellence.jpeg',
      title: 'Traditional Excellence',
      description: 'Combining traditional methods with modern technology'
    },

    {
      image: '/modern_grinding_technology.jpeg',
      title: 'Modern Grinding Technology',
      description: 'State-of-the-art machinery for premium spice processing'
    },
    {
      image: 'industrial_grade_equipment.jpeg',
      title: 'Industrial Grade Equipment',
      description: 'Professional masala grinding and processing facility'
    },
    {
      image: 'firm.jpeg',
      title: 'Firm',
      description: 'Professional masala Firm with 14+ years of experience'
    },
    {
      image: 'godown.jpeg',
      title: 'Godown',
      description: 'Professional masala Godown with 14+ years of experience'
    },
    {
      image: 'raw_masala.jpeg',
      title: 'Raw Masala',
      description: 'Professional masala Raw Masala with 14+ years of experience'
    }
  ];

  const features = [
    {
      icon: Award,
      title: '100% Mesh Quality',
      description: 'Premium grinding quality with 100% mesh consistency for perfect texture'
    },
    {
      icon: Eye,
      title: 'CCTV Surveillance',
      description: 'Complete CCTV camera surveillance for security, purity and quality assurance'
    },
    {
      icon: Cog,
      title: 'Job Work Services',
      description: 'Professional grinding services for masala and ayurvedic products'
    },
    {
      icon: Star,
      title: 'Trusted Brand',
      description: 'Preferred choice of thousands of families and businesses'
    }
  ];

  const stats = [
    { number: '14+', label: 'Years of Excellence' },
    { number: '300+', label: 'Happy Customers' },
    { number: '50+', label: 'Premium Products' },
    { number: '25+', label: 'Cities Served' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="min-h-screen">
      {/* Hero Section with Slider */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-orange-900/70"></div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ashwini
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Masala Mills
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Bringing you the authentic taste of India with premium quality spices and masalas, 
              crafted with tradition and delivered with love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Explore Our Products
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300">
                Learn Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-float-delayed"></div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that comes with decades of expertise and commitment to quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-orange-100 hover:border-orange-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Quality & Security Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trust is our priority - ensuring purity, quality, and security at every step
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">CCTV Surveillance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Complete CCTV camera surveillance system installed throughout our facility for:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Security monitoring</li>
                <li>• Purity assurance</li>
                <li>• Quality control</li>
                <li>• Process transparency</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Mesh Quality</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our grinding process ensures:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 100% mesh consistency</li>
                <li>• Perfect texture</li>
                <li>• Uniform particle size</li>
                <li>• Premium quality output</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Cog className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Job Work Services</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Professional grinding services for:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Masala products</li>
                <li>• Ayurvedic products</li>
                <li>• Custom formulations</li>
                <li>• Bulk processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;