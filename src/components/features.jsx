import {
  Phone,
  Video,
  Brain,
  Users,
  Shield,
  Zap,
  Calendar,
  MapPin,
} from "lucide-react";

export default function StudentFacilities() {
  const facilities = [
    {
      title: "AI Voice Support",
      description:
        "24/7 AI-powered voice companion for immediate emotional support and guidance.",
      icon: Phone,
      bgColor: "bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100",
      iconBg: "bg-pink-200/50",
      iconColor: "text-pink-600",
    },
    {
      title: "AI Video Consultation",
      description:
        "Face-to-face video sessions with intelligent AI therapist avatars.",
      icon: Video,
      bgColor: "bg-gradient-to-br from-blue-100 via-indigo-50 to-blue-100",
      iconBg: "bg-blue-200/50",
      iconColor: "text-blue-600",
    },
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
      title: "Anonymous Doctor Calls",
      description:
        "Private consultations with licensed mental health professionals.",
      icon: Shield,
      bgColor: "bg-gradient-to-br from-green-100 via-emerald-50 to-green-100",
      iconBg: "bg-green-200/50",
      iconColor: "text-green-600",
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
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`${facility.bgColor} rounded-2xl p-8 h-80 relative overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4">
                  <facility.icon
                    className="w-24 h-24 text-white"
                    strokeWidth={0.5}
                  />
                </div>
                <div className="absolute bottom-4 left-4">
                  <facility.icon
                    className="w-16 h-16 text-white rotate-12"
                    strokeWidth={0.5}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`${facility.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}
                >
                  <facility.icon
                    className={`w-8 h-8 ${facility.iconColor}`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {facility.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {facility.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/*  <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to start your wellness journey?
            </h2>
            <p className="text-gray-600 mb-6">
              Access all these resources through your personalized student
              dashboard.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started Today
            </button>
          </div>
        </div> */}

        {/* Additional Info */}
        {/*         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              100% Confidential
            </h3>
            <p className="text-gray-600 text-sm">
              All sessions and data are completely private and secure.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Peer Support Network
            </h3>
            <p className="text-gray-600 text-sm">
              Connect with trained student volunteers and counselors.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              AI-Powered Insights
            </h3>
            <p className="text-gray-600 text-sm">
              Personalized recommendations based on your mental health data.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
