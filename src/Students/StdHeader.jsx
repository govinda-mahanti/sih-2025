import React, { useState, useEffect } from "react";
import {
  Brain,
  Users,
  Zap,
  Calendar,
  MapPin,
  Star,
  Menu,
  X,
  User,
  Settings,
  LogOut,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ import
import logo1 from "../assets/logo1.png";

const StdHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate(); // ✅ hook for navigation

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "wellnesscheck", label: "Wellness Check" },
    { id: "community", label: "Community" },
    { id: "resources", label: "Resources" },
  ];

  const profileMenuItems = [
    {
      icon: BarChart3,
      label: "My Dashboard",
      to: "/student/dashboard",
      description: "View your mental health progress",
    },
    {
      icon: Calendar,
      label: "My Sessions",
      to: "/student/sessions", // ✅ removed extra space
      description: "Manage counseling appointments",
    },
    {
      icon: Settings,
      label: "Profile Settings",
      to: "/student/profile",
      description: "Update personal information",
    },
  ];

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => ({
        id: link.id,
        element: document.getElementById(link.id),
      }));
      let current = "home";
      sections.forEach((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown")) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLinkActive = (linkId) => linkId === activeSection;

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center"
            >
              <div className="w-40 h-8 rounded-lg flex items-center justify-center">
                <img src={logo1} alt="logo" className="w-80 mr-[5px]" />
              </div>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium 
                    ${
                      isLinkActive(link.id)
                        ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {isLoggedIn && (
              <div className="relative profile-dropdown">
                <button
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-700">
                    Student
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border py-2 z-50">
                    <div className="px-4 py-3 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            John Doe
                          </p>
                          <p className="text-sm text-gray-500">
                            Computer Science, 3rd Year
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      {profileMenuItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={i}
                            onClick={() => navigate(item.to)} // ✅ navigation added
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-start space-x-3"
                          >
                            <Icon className="w-5 h-5 text-gray-400 mt-0.5" />
                            <div>
                              <p className="font-medium text-gray-800">
                                {item.label}
                              </p>
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <div className="border-t pt-2">
                      <button className="w-full px-4 py-3 text-left flex items-center space-x-3 text-red-600 hover:bg-red-50">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-md 
                ${
                  isLinkActive(link.id)
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default StdHeader;
