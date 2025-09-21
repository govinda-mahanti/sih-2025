import Navbar from "../components/Navbar";
import GetStarted from "../components/GetStarted";
import heroimg from "../assets/heroImg.png";
import { Rocket } from "lucide-react";
import FeatureCard from "../Pages/Features";
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from "react";


 const faqs = [
    {
      question: "How is student data protected?",
      answer: "Student data (trauma history, sessions, sensor readings) is stored in an encrypted database, and for calls/consultations only anonymous IDs are shown to protect privacy."
    },
    {
      question: "Can colleges see individual student details?",
      answer: "No, colleges can only access aggregate statistical data (overall mental health trends, session participation, stress levels). Individual student records remain private."
    },
    {
      question: "How does the VR/AI system personalize sessions?",
      answer: "Using mind sensors, the system detects emotions and mental state before VR. Based on this, it generates a custom VR environment to improve focus, reduce anxiety, or enhance relaxation."
    },
    {
      question: "Who can respond to student counseling requests?",
      answer: "Students can connect with: AI-powered video consultations, Volunteers and counselors from their university, and Certified doctors/psychologists. The system suggests matches based on location, hostel, or gender preferences."
    },
    {
      question: "Are there additional wellness resources available?",
      answer: "Yes, students can join college yoga/meditation sessions, group discussions, and workshops. They also get access to self-help tools like guided meditations, stress trackers, and emotion dashboards."
    }
  ];
const HomePage = () => {

    const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
        {/* <GetStarted /> */}
      </section>


       <section className="bg-gray-50 text-gray-900 py-20 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                <div className="text-blue-600 flex-shrink-0">
                  {openFaqIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
              </div>

              <AnimatePresence>
                {openFaqIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 mt-4 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
      {/*  <FeatureCard /> */}

      <section id="services"></section>
      <section id="features"></section>
      <section id="footer"></section>
    </div>
  );
};

export default HomePage;
