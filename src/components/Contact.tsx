import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: [
        'Plot No. A-144/2, TTC Industrial Area,',
        'Opp. Navi Mumbai Police Centre,',
        'Khairane MIDC, Kopar Khairane,',
        'Navi Mumbai - 400 705'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Aditya: +91 8286868601',
        'Aditya: +91 9768048033',
        'Vinod: +91 9768211324'
      ]
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [
        'ashwinienterprises214@gmail.com',
        'info@ashwinimasalmills.com',
        'sales@ashwinimasalmills.com'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 8:00 AM - 7:00 PM',
        'Closed on Sunday & Public Holidays'
      ]
    }
  ];

  const keyPersons = [
    {
      name: 'Aditya',
      phone: '+91 8286868601',
      whatsapp: '+91 9768048033',
      role: 'Business Development'
    },
    {
      name: 'Vinod',
      phone: '+91 9768211324',
      role: 'Operations Manager'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Contact us for any inquiries, orders, or collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3 text-green-700">
                <CheckCircle size={20} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="wholesale-order">Wholesale Order</option>
                    <option value="custom-blend">Custom Blend Request</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Please share your requirements, questions, or any specific details..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Key Persons */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Key Contacts</h4>
              <div className="space-y-4">
                {keyPersons.map((person, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="text-white" size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800">{person.name}</h5>
                      <p className="text-sm text-gray-600 mb-1">{person.role}</p>
                      <p className="text-sm text-gray-700">📞 {person.phone}</p>
                      {person.whatsapp && (
                        <p className="text-sm text-green-600">📱 WhatsApp: {person.whatsapp}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Find Us</h4>
              <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.949788830768!2d73.0199905!3d19.0946992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0c6b7c7c7c7%3A0x0!2zMTnCsDA1JzQwLjkiTiA3M8KwMDEnMjEuMiJF!5e0!3m2!1sen!2sin!4v1697031234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Spice Journey?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied customers who trust Ashwini Masal Mill for their spice needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919768048033"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Call Now: +91 9768048033
              </a>
              <a 
                href="https://wa.me/919768048033"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;