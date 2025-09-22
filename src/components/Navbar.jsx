import React, { useState, useEffect } from "react";
import logo1 from "../assets/logo1.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "features", label: "Features" },
    { id: "faq", label: "FAQ" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Only handle scroll-based active section detection on the home page
      if (location.pathname !== "/") return;

      const sections = navLinks.map((link) => ({
        id: link.id,
        element: document.getElementById(link.id),
      }));

      let current = "home";

      sections.forEach((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Helper function to determine if a link should be active
  const isLinkActive = (linkId) => {
    if (location.pathname === "/" && linkId === activeSection) {
      return true;
    }
    return false;
  };

  // Check if About Us page is active
  const isAboutUsActive = location.pathname === "/aboutus";

  return (
    <>
      {/* Navbar */}
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isLinkActive(link.id)
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <Link to="/aboutus">
                  <button
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isAboutUsActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    About Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Login Button */}
            <div className="hidden md:block">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                onClick={() => navigate("/signup")}
              >
                Signup/Login
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    isLinkActive(link.id)
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Link to="/aboutus" className="block">
                <button
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    isAboutUsActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </button>
              </Link>
              <button
                className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium mt-2"
                onClick={() => {
                  navigate("/signup");
                  setIsMobileMenuOpen(false);
                }}
              >
                Signup/Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
