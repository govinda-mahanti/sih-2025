import React from "react";
import StdHeader from "./StdHeader";
import EmotionCheckin from "../components/Emoji";
import StudentFacilities from "../components/features";
import bgimg from "../assets/herobgcover.webp";
import {
  Brain,
  Users,
  Zap,
  Calendar,
  MapPin,
  MessageCircle,
  Heart,
  Shield,
} from "lucide-react";

const StdHomePg = () => {
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
    <>
      <StdHeader />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex flex-col justify-center items-center"
      >
        <div className="absolute left-10 bottom-10 hidden md:block z-10"></div>
        <div className="absolute right-10 bottom-10 hidden md:block z-10"></div>

        <div className="w-full flex flex-col justify-center items-center text-center px-4 z-20 mt-20">
          <div className="mb-10">
            <svg width="110" height="110" viewBox="0 0 120 120">
              {Array.from({ length: 16 }, (_, i) => {
                const angle = (i * 22.5 * Math.PI) / 180;
                const x1 = 60 + 26 * Math.cos(angle);
                const y1 = 60 + 26 * Math.sin(angle);
                const x2 = 60 + 38 * Math.cos(angle);
                const y2 = 60 + 38 * Math.sin(angle);
                const color = `hsl(${210 + i * 12}, 50%, 85%)`;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={color}
                    strokeWidth="8"
                    strokeLinecap="round"
                    opacity={0.35 + i * 0.035}
                  />
                );
              })}
            </svg>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight z-10">
            hey, are you{" "}
            <span className="italic font-normal text-gray-600">feeling</span>{" "}
            okay?
          </h1>

          <p className="text-lg md:text-2xl text-gray-500 max-w-2xl mx-auto mb-8 z-10">
            Sattava is here, to understand, and support you through your mental
            health journey. Let's talk about what's on your mind.
          </p>

          <button className="bg-white border-2 border-purple-100 shadow-md px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 hover:bg-purple-50 hover:scale-105 focus:outline-none z-10">
            I am ready to talk
          </button>

          <img
            src={bgimg}
            alt="stdhero"
            className="absolute bottom-0 left-0 w-full object-cover z-0"
          />
        </div>
      </section>

      {/* Facilities / Features Section */}
      <section id="features" className="py-12 bg-gray-50">
        <div className="min-h-screen py-16 px-4">
          <StudentFacilities />
        </div>
      </section>

      {/* Emotion Check-in */}
      <section id="wellnesscheck" className=" bg-white">
        <EmotionCheckin />
      </section>

      {/* Community Section */}
      <section
        id="community"
        className="bg-white/90 backdrop-blur-sm border-t border-gray-200 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-gray-700 mb-4">
            Join Our <span className="italic text-blue-600">Community</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Connect with fellow students, share experiences, and build a
            supportive network for your mental wellness journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">
                Student Forums
              </h3>
              <p className="text-gray-600 text-sm">
                Share your thoughts and experiences with peers in safe,
                moderated spaces.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">
                Group Sessions
              </h3>
              <p className="text-gray-600 text-sm">
                Participate in virtual group therapy and support meetings.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">
                Wellness Events
              </h3>
              <p className="text-gray-600 text-sm">
                Join campus wellness activities, workshops, and mindfulness
                sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-gray-700 mb-4">
            Mental Health{" "}
            <span className="italic text-blue-600">Resources</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Access comprehensive resources, guides, and tools to support your
            mental wellness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Calendar className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">
                Crisis Hotlines
              </h4>
              <p className="text-gray-600 text-sm">
                24/7 emergency mental health support and crisis intervention.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-8 h-8 text-purple-600 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">
                Self-Help Guides
              </h4>
              <p className="text-gray-600 text-sm">
                Evidence-based techniques for managing anxiety, stress, and
                depression.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">
                Privacy & Safety
              </h4>
              <p className="text-gray-600 text-sm">
                Learn about data protection and maintaining privacy in digital
                therapy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Zap className="w-8 h-8 text-orange-600 mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2">
                Wellness Tips
              </h4>
              <p className="text-gray-600 text-sm">
                Daily habits and practices to maintain good mental health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StdHomePg;
