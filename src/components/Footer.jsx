import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  GraduationCap,
  Brain,
  Users,
  Shield,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Project Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-40 h-8 flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-80 mr-[5px]" />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our Smart India Hackathon project focuses on transforming mental
              health support for students through AI-driven tools and innovative
              digital solutions.
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
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="aboutus"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300">Services</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-300">
                <Brain className="w-3 h-3 mr-2" /> AI Counseling
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <Shield className="w-3 h-3 mr-2" /> Anonymous Support
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <Users className="w-3 h-3 mr-2" /> Peer Counseling
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <GraduationCap className="w-3 h-3 mr-2" /> Campus Analytics
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 mr-3 md:mr-1.5">
            <h4 className="text-lg font-semibold text-blue-300">
              Stay Connected
            </h4>
            <p className="text-gray-300 text-sm">
              Get updates on our project and new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full mr-1.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-slate-800 border border-blue-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <span>© 2025 Smart India Hackathon Project. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by our team.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
