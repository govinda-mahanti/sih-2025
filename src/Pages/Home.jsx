import React from "react";
import Navbar from "../components/Navbar";
import GetStarted from "../components/GetStarted";
import heroimg from "../assets/heroImg.png";
import { Rocket } from "lucide-react";
import FeatureCard from "../Pages/Features";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section>
        <Navbar />
      </section>
      <section
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Discover to Connect,Calm &
                  <span className="text-blue-600 block">Recharge</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Your personal emotional support platform. Start your journey
                  to mindfulness and emotional wellness today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    window.location.href = "/signup";
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 flex items-center space-x-3 mx-auto lg:mx-0 mb-12"
                >
                  <Rocket size={20} />
                  <span>Get Started</span>
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={heroimg}
                  alt="Team collaboration"
                  /*   className="rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover" */
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Additional Sections */}
      {/* ////////////////////////////////////////////////////////////////////////////////// */}
      <FeatureCard />
      <section>
        <GetStarted />
      </section>
    </div>
  );
};

export default HomePage;
