import React, { useState } from "react";
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
  X,
} from "lucide-react";

const AssessmentModal = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: "current_mood",
      question: "How are you feeling right now?",
      type: "scale",
      scale: {
        min: 1,
        max: 10,
        minLabel: "Very Bad",
        maxLabel: "Very Good",
      },
      required: false,
    },
    {
      id: "main_concern",
      question: "What's the main thing on your mind today?",
      type: "textarea",
      placeholder:
        "Share what's bothering you or what you'd like support with...",
      required: false,
    },
    {
      id: "previous_therapy",
      question: "Have you ever spoken with a counselor or therapist before?",
      type: "radio",
      options: [
        "Yes, recently (within last 6 months)",
        "Yes, but it was a while ago",
        "No, this is my first time",
        "I prefer not to say",
      ],
      required: false,
    },
    {
      id: "trauma_history",
      question:
        "Have you experienced any traumatic events that still affect you?",
      type: "checkbox",
      options: [
        "Academic pressure/failure",
        "Family conflicts",
        "Relationship issues",
        "Financial stress",
        "Health concerns",
        "Loss of a loved one",
        "Bullying or harassment",
        "Accident or injury",
        "Other traumatic experience",
        "Prefer not to answer",
      ],
      required: false,
      sensitive: true,
    },
    {
      id: "support_system",
      question: "Who do you usually turn to for support?",
      type: "checkbox",
      options: [
        "Family members",
        "Friends",
        "Roommates/dormmates",
        "Teachers/professors",
        "Campus counselors",
        "Religious/spiritual leaders",
        "Online communities",
        "I don't have anyone to talk to",
        "Prefer not to say",
      ],
      required: false,
    },
    {
      id: "symptoms",
      question:
        "Have you been experiencing any of these recently? (Check all that apply)",
      type: "checkbox",
      options: [
        "Difficulty sleeping",
        "Changes in appetite",
        "Feeling anxious or worried",
        "Feeling sad or hopeless",
        "Difficulty concentrating",
        "Panic attacks",
        "Social withdrawal",
        "Thoughts of self-harm",
        "None of the above",
        "Prefer not to answer",
      ],
      required: false,
      sensitive: true,
    },
    {
      id: "goals",
      question: "What would you like to achieve through our conversations?",
      type: "checkbox",
      options: [
        "Better stress management",
        "Improved mood",
        "Better sleep",
        "Social confidence",
        "Academic performance",
        "Relationship skills",
        "Coping strategies",
        "Just someone to listen",
        "I'm not sure yet",
      ],
      required: false,
    },
  ];

  if (!isOpen) return null;

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const skipQuestion = () => {
    handleAnswerChange(questions[currentQuestion].id, "skipped");
    nextQuestion();
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Assessment completed:", answers);
    onClose();
    alert(
      "Thank you for sharing. Let's begin your mental wellness journey together."
    );
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const renderQuestion = (question) => {
    const currentAnswer = answers[question.id] || "";

    switch (question.type) {
      case "scale":
        return (
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{question.scale.minLabel}</span>
              <span>{question.scale.maxLabel}</span>
            </div>
            <div className="flex justify-between items-center">
              {Array.from({ length: question.scale.max }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handleAnswerChange(question.id, i + 1)}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-medium transition-all ${
                    currentAnswer === i + 1
                      ? "bg-blue-500 text-white border-blue-500"
                      : "border-gray-300 hover:border-blue-400 text-gray-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        );

      case "textarea":
        return (
          <textarea
            value={currentAnswer}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            placeholder={question.placeholder}
            rows={4}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        );

      case "radio":
        return (
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerChange(question.id, option)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  currentAnswer === option
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full mr-3 ${
                      currentAnswer === option
                        ? "bg-blue-500"
                        : "border-2 border-gray-300"
                    }`}
                  />
                  {option}
                </div>
              </button>
            ))}
          </div>
        );

      case "checkbox":
        const selectedOptions = Array.isArray(currentAnswer)
          ? currentAnswer
          : [];
        return (
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  const isSelected = selectedOptions.includes(option);
                  const newSelection = isSelected
                    ? selectedOptions.filter((item) => item !== option)
                    : [...selectedOptions, option];
                  handleAnswerChange(question.id, newSelection);
                }}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedOptions.includes(option)
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded mr-3 flex items-center justify-center ${
                      selectedOptions.includes(option)
                        ? "bg-blue-500"
                        : "border-2 border-gray-300"
                    }`}
                  >
                    {selectedOptions.includes(option) && (
                      <span className="text-white text-xs">✓</span>
                    )}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Brain className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Mental Wellness Assessment
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentQ?.sensitive && (
            <div className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-yellow-600 mr-2" />
                <p className="text-sm text-yellow-700">
                  This is a sensitive question. Your privacy is protected, and
                  you can skip if you're not comfortable answering.
                </p>
              </div>
            </div>
          )}

          <h3 className="text-lg font-medium text-gray-800 mb-6">
            {currentQ?.question}
          </h3>

          <div className="mb-8">{renderQuestion(currentQ)}</div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                currentQuestion === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Previous
            </button>

            <div className="space-x-3">
              <button
                onClick={skipQuestion}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium"
              >
                Skip
              </button>
              <button
                onClick={nextQuestion}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
              >
                {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Modal */}
    </div>
  );
};

const StdHomePg = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

          <button
            className="bg-white border-2 border-purple-100 shadow-md px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 hover:bg-purple-50 hover:scale-105 focus:outline-none z-10"
            onClick={() => setIsModalOpen(true)}
          >
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

      {/* Assessment Modal */}
      <AssessmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default StdHomePg;
