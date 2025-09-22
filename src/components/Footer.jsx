import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
           
              {/* <h3 className="text-xl font-bold">Neurocare</h3> */}
               <div className="w-40 h-8 rounded-lg flex items-center justify-center">
                                <img src={logo} alt="logo" className="w-80 mr-[5px]" />
                              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advanced neurological care and treatment solutions. We're committed to improving lives through cutting-edge neuroscience and compassionate patient care.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#neurology" className="text-gray-300 hover:text-white transition-colors text-sm">Neurology Consultation</a></li>
              <li><a href="#diagnostics" className="text-gray-300 hover:text-white transition-colors text-sm">Brain Imaging</a></li>
              <li><a href="#therapy" className="text-gray-300 hover:text-white transition-colors text-sm">Cognitive Therapy</a></li>
              <li><a href="#surgery" className="text-gray-300 hover:text-white transition-colors text-sm">Neurosurgery</a></li>
              <li><a href="#rehab" className="text-gray-300 hover:text-white transition-colors text-sm">Rehabilitation</a></li>
              <li><a href="#telemedicine" className="text-gray-300 hover:text-white transition-colors text-sm">Telemedicine</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>123 Medical Center Drive</p>
                  <p>Healthcare District, HC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>+1 (555) 123-NEURO</p>
                  <p className="text-xs text-gray-400">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">info@neurocare.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="border-t border-blue-800/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-blue-300 mb-2">Stay Informed</h4>
              <p className="text-gray-300 text-sm">Get the latest updates on neurological health and treatment advances.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-slate-800 border border-blue-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[250px]"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800/30 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>© 2025 Neurocare. All rights reserved. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for better neurological health.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#hipaa" className="text-gray-400 hover:text-white transition-colors">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;