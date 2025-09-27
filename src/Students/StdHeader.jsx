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
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import logo1 from "../assets/logo1.png";

const StdHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
      description: "View your mental health progress",
    },
    {
      icon: Calendar,
      label: "My Sessions",
      description: "Manage counseling appointments",
    },
    {
      icon: MessageCircle,
      label: "Chat History",
      description: "Previous AI conversations",
    },
    {
      icon: Settings,
      label: "Profile Settings",
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
              {/* <span className="ml-2 text-xl font-bold text-gray-800">
                            Neurocare
                          </span> */}
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
/* 
const StudentFacilities = () => {
  const facilities = [
    {
      title: "VR Therapy Sessions",
      description:
        "Immersive virtual reality environments that adapt to your emotional state.",
      icon: Brain,
      bgColor: "bg-gradient-to-br from-purple-100 via-blue-50 to-purple-100",
      iconBg: "bg-purple-200/50",
      iconColor: "text-purple-600",
    },
    {
      title: "Volunteer Network",
      description:
        "Connect with peer counselors and volunteers in your campus area.",
      icon: Users,
      bgColor: "bg-gradient-to-br from-teal-100 via-cyan-50 to-teal-100",
      iconBg: "bg-teal-200/50",
      iconColor: "text-teal-600",
    },
    {
      title: "Mind Sensor Analysis",
      description:
        "Real-time emotion detection to personalize your therapy experience.",
      icon: Zap,
      bgColor: "bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-100",
      iconBg: "bg-orange-200/50",
      iconColor: "text-orange-600",
    },
    {
      title: "Session Scheduling",
      description:
        "Book online and offline therapy sessions based on availability.",
      icon: Calendar,
      bgColor: "bg-gradient-to-br from-violet-100 via-purple-50 to-violet-100",
      iconBg: "bg-violet-200/50",
      iconColor: "text-violet-600",
    },
    {
      title: "Location Matching",
      description:
        "Smart matching with counselors by hostel, floor, and gender preferences.",
      icon: MapPin,
      bgColor: "bg-gradient-to-br from-rose-100 via-pink-50 to-rose-100",
      iconBg: "bg-rose-200/50",
      iconColor: "text-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4" id="support-services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-700 mb-4">
            to help you in your{" "}
            <span className="italic text-blue-600">journey</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with AI support, find peer counselors, and access
            personalized mental health resources.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`${facility.bgColor} rounded-2xl p-8 h-80 relative overflow-hidden group hover:scale-105 transition-all duration-300`}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div
                  className={`${facility.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}
                >
                  <facility.icon
                    className={`w-8 h-8 ${facility.iconColor}`}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; */
/* 
export default function App() {
  return (
    <div>
      <StdHeader />
      <StudentFacilities />
      
    </div>
  );
} */
