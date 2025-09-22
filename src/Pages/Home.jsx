import Navbar from "../components/Navbar";
import GetStarted from "../components/GetStarted";
import heroimg from "../assets/heroImg.png";
import { Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
const FeatureCard = ({ name, image, shortInfo, details }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative h-72 sm:h-80 lg:h-80 w-full perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden bg-white">
          <div className="relative h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-32 sm:h-40 lg:h-48 object-cover"
            />
            <div className="p-4 lg:p-6">
              <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">
                {name}
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 lg:mb-4">
                {shortInfo}
              </p>
            </div>
            <button
              onClick={handleFlip}
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-blue-600 text-white p-1.5 sm:p-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="p-4 lg:p-6 h-full flex flex-col">
            <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4">
              {name}
            </h4>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed flex-grow overflow-y-auto">
              {details}
            </p>
            <button
              onClick={handleFlip}
              className="self-end bg-gray-600 text-white p-1.5 sm:p-2 rounded-full hover:bg-gray-700 transition duration-300 shadow-lg mt-2 sm:mt-4"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "How is student data protected?",
    answer:
      "Student data (trauma history, sessions, sensor readings) is stored in an encrypted database, and for calls/consultations only anonymous IDs are shown to protect privacy.",
  },
  {
    question: "Can colleges see individual student details?",
    answer:
      "No, colleges can only access aggregate statistical data (overall mental health trends, session participation, stress levels). Individual student records remain private.",
  },
  {
    question: "How does the VR/AI system personalize sessions?",
    answer:
      "Using mind sensors, the system detects emotions and mental state before VR. Based on this, it generates a custom VR environment to improve focus, reduce anxiety, or enhance relaxation.",
  },
  {
    question: "Who can respond to student counseling requests?",
    answer:
      "Students can connect with: AI-powered video consultations, Volunteers and counselors from their university, and Certified doctors/psychologists. The system suggests matches based on location, hostel, or gender preferences.",
  },
  {
    question: "Are there additional wellness resources available?",
    answer:
      "Yes, students can join college yoga/meditation sessions, group discussions, and workshops. They also get access to self-help tools like guided meditations, stress trackers, and emotion dashboards.",
  },
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

      <section id="services">
        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}</style>
        {/* Services Heading */}
        <div className="text-center mb-20 mt-20 px-4">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive mental wellness solutions connecting students,
            colleges, volunteers, and therapists through innovative technology
            and compassionate care
          </p>
        </div>

        {/* Service Section 1 - College/Institute Platform */}
        <div className="w-full mb-10">
          <div className="max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center bg-blue-50 rounded-r-full shadow-xl border-10 border-blue-500 border-l-0 overflow-hidden">
              {/* Content Side */}
              <div className="w-full lg:w-full p-12 lg:p-16">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800">
                    College Management Platform
                  </h3>
                </div>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Empower your institution with a comprehensive mental wellness
                  ecosystem. Create a dedicated system for your students and
                  volunteers with complete administrative control and insights.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Student Dashboard & Analytics
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Real-time mental health statistics and progress tracking
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Volunteer Management
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Organize counselors, clubs, and support groups
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        VR Environment Control
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Manage VR availability and therapeutic environments
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Wellness Programs
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Schedule yoga sessions and group activities
                      </p>
                    </div>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 font-semibold text-lg shadow-lg">
                  Register Your Institution
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Section 2 - Student Wellness Platform */}
        <div className="w-full mb-10">
          <div className="max-w-7xl ml-auto">
            <div className="flex flex-col lg:flex-row items-center bg-green-50 rounded-l-full shadow-xl border-10 border-green-500 border-r-0 overflow-hidden">
              {/* Content Side */}
              <div className="w-full flex flex-col lg:w-full p-12 lg:p-16 ">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 ml-5">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800">
                    Student Wellness Hub
                  </h3>
                </div>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Access personalized mental health support through cutting-edge
                  technology. Connect with AI counselors, therapists, and
                  volunteers while maintaining complete privacy and anonymity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        AI-Powered Support
                      </h4>
                      <p className="text-gray-600 text-sm">
                        24/7 AI calling, AR characters, and video consultations
                        for immediate support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Immersive VR Therapy
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Mind sensor-guided VR environments tailored to your
                        emotional state
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Peer Volunteer Network
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Location-based matching with trained student volunteers
                        and counselors
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Personal Wellness Dashboard
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Track your mental health journey with detailed analytics
                        and insights
                      </p>
                    </div>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-xl hover:from-green-700 hover:to-green-800 transition duration-300 font-semibold text-lg shadow-lg ml-auto">
                  Start Your Wellness Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="w-full px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Platform Features
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the innovative features that make our mental wellness
                platform unique and effective
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                name="AI Counselor Chat"
                image="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                shortInfo="24/7 AI-powered mental health support"
                details="Our advanced AI counselor provides round-the-clock emotional support through natural conversations. It uses machine learning to understand your concerns and provides personalized coping strategies, mindfulness exercises, and professional guidance whenever you need it."
              />

              <FeatureCard
                name="VR Therapy Rooms"
                image="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                shortInfo="Immersive virtual reality healing environments"
                details="Step into carefully designed virtual environments like serene beaches, peaceful forests, or calming gardens. These VR spaces are scientifically designed to reduce stress, anxiety, and promote emotional well-being through immersive therapeutic experiences."
              />

              <FeatureCard
                name="Anonymous Calling"
                image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                shortInfo="Private connections with licensed therapists"
                details="Connect with licensed mental health professionals through completely anonymous audio/video calls. Your identity remains protected while you receive professional counseling. All sessions are encrypted and no personal information is shared with therapists."
              />

              <FeatureCard
                name="Peer Support Network"
                image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                shortInfo="Connect with trained student volunteers"
                details="Join a supportive community of trained peer volunteers from your institution. Get matched with volunteers based on location, interests, and availability. Share experiences, receive emotional support, and build meaningful connections in a safe, moderated environment."
              />

              <FeatureCard
                name="Mind Sensors"
                image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                shortInfo="Real-time emotional state monitoring"
                details="Advanced biosensors monitor your heart rate, stress levels, sleep patterns, and emotional state in real-time. This data helps create personalized therapy sessions and provides early warning signs for mental health concerns, enabling proactive intervention."
              />

              <FeatureCard
                name="Progress Analytics"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                shortInfo="Track your mental wellness journey"
                details="Comprehensive analytics dashboard showing your mental health progress over time. View mood trends, therapy session insights, stress level patterns, and milestone achievements. All data is anonymized and helps both you and your institution understand wellness patterns."
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-gray-50 text-gray-900 py-20 px-6 md:px-24"
        id="faq"
      >
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
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
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

      <section id="footer"></section>
    </div>
  );
};

export default HomePage;
