import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const products = [
    'Garam Masala',
    'Turmeric Powder',
    'Red Chili Powder',
    'Coriander Powder',
    'Cumin Powder',
    'Biryani Masala'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Ashwini Masal Mill</h3>
                <p className="text-gray-300 text-sm">Premium Spices & Masalas</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Since 2011, we've been committed to bringing you the finest quality spices and masalas, 
              preserving traditional flavors while embracing modern quality standards.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-400 mt-1 flex-shrink-0" size={18} />
                <div className="text-gray-300">
                  <p>Plot No. A-144/2, TTC Industrial Area</p>
                  <p>Opp. Navi Mumbai Police Centre</p>
                  <p>Khairane MIDC, Kopar Khairane</p>
                  <p>Navi Mumbai - 400 705</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-400 flex-shrink-0" size={18} />
                <div className="text-gray-300">
                  <p>+91 9768048033</p>
                  <p>+91 9768211324</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-400 flex-shrink-0" size={18} />
                <div className="text-gray-300">
                  <p>ashwinienterprises214@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and offers</p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Ashwini Masal Mill. All rights reserved. | Crafted with love for authentic flavors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;