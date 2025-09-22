import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Video,
  Phone,
  Headphones,
  Users,
  Brain,
  Heart,
  TrendingUp,
  Bell,
  Settings,
  User,
  MapPin,
  Star,
} from "lucide-react";

const StdProfile = () => {
  const [selectedMood, setSelectedMood] = useState("");

  // Student data
  const studentData = {
    id: "STU-2024-312",
    name: "Alex Johnson",
    degree: "Computer Science",
    batch: "2024",
    mentalHealthScore: 75,
    totalSessions: 12,
    upcomingSessions: 2,
  };

  // Mood tracking data
  const moodData = [
    { date: "Mon", mood: "Good", score: 7 },
    { date: "Tue", mood: "Fair", score: 6 },
    { date: "Wed", mood: "Excellent", score: 9 },
    { date: "Thu", mood: "Good", score: 8 },
    { date: "Fri", mood: "Fair", score: 5 },
    { date: "Sat", mood: "Good", score: 7 },
    { date: "Sun", mood: "Excellent", score: 9 },
  ];

  // Upcoming sessions
  const upcomingSessions = [
    {
      id: "SESS-001",
      title: "AI Video Consultation",
      type: "ai-video",
      date: "2025-09-23",
      time: "2:00 PM",
      counselor: "AI Assistant Maya",
      status: "scheduled",
    },
    {
      id: "SESS-002",
      title: "Group Therapy Session",
      type: "group",
      date: "2025-09-25",
      time: "10:30 AM",
      counselor: "Dr. Sarah Johnson",
      location: "Room 204",
      status: "scheduled",
    },
  ];

  // Recent activity
  const recentActivity = [
    {
      id: 1,
      type: "VR Session",
      description: "VR + Mind Sensor Session completed",
      date: "2025-09-21",
      duration: "35 min",
      rating: 4,
    },
    {
      id: 2,
      type: "AI Call",
      description: "AI Character Call with Luna",
      date: "2025-09-20",
      duration: "20 min",
      rating: 5,
    },
    {
      id: 3,
      type: "Counseling",
      description: "Volunteer Counseling Session",
      date: "2025-09-19",
      duration: "45 min",
      rating: 4,
    },
  ];

  // Wellness resources
  const wellnessResources = [
    {
      title: "AI Video Consultation",
      description: "Talk to AI counselor via video call",
      icon: Video,
      color: "bg-blue-500",
    },
    {
      title: "Anonymous Doctor Call",
      description: "Private consultation with psychiatrist",
      icon: Phone,
      color: "bg-green-500",
    },
    {
      title: "VR Environment",
      description: "Immersive therapy with mind sensors",
      icon: Brain,
      color: "bg-purple-500",
    },
    {
      title: "AI Character Call",
      description: "Voice support from AI companion",
      icon: Headphones,
      color: "bg-orange-500",
    },
    {
      title: "Volunteer Connect",
      description: "Connect with peer counselors",
      icon: Users,
      color: "bg-pink-500",
    },
    {
      title: "Yoga Sessions",
      description: "College wellness programs",
      icon: Heart,
      color: "bg-teal-500",
    },
  ];

  // Get mood color
  const getMoodColor = (mood) => {
    const colors = {
      Excellent: "text-green-600",
      Good: "text-blue-600",
      Fair: "text-yellow-600",
      Poor: "text-red-600",
    };
    return colors[mood] || "text-gray-600";
  };

  // Get mood emoji
  const getMoodEmoji = (mood) => {
    const emojis = {
      Excellent: "😊",
      Good: "🙂",
      Fair: "😐",
      Poor: "😔",
    };
    return emojis[mood] || "😐";
  };

  const handleMoodSubmit = () => {
    if (selectedMood) {
      alert(`Mood "${selectedMood}" recorded for today!`);
      setSelectedMood("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Mind Flayer
                </h1>
                <p className="text-sm text-gray-600">
                  Welcome back, {studentData.name}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800" />
              <Settings className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800" />
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <User className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">
                  {studentData.id}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Mental Health Score
                </p>
                <p className="text-3xl font-bold text-blue-600">
                  {studentData.mentalHealthScore}%
                </p>
              </div>
              <TrendingUp className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Sessions
                </p>
                <p className="text-3xl font-bold text-green-600">
                  {studentData.totalSessions}
                </p>
              </div>
              <Calendar className="h-12 w-12 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Upcoming Sessions
                </p>
                <p className="text-3xl font-bold text-purple-600">
                  {studentData.upcomingSessions}
                </p>
              </div>
              <Clock className="h-12 w-12 text-purple-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Current Mood
                </p>
                <p className="text-2xl font-bold text-orange-600">Good 🙂</p>
              </div>
              <Heart className="h-12 w-12 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mood Tracker */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Weekly Mood Tracker
              </h2>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {moodData.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-gray-600 mb-1">{day.date}</div>
                    <div className={`text-2xl ${getMoodColor(day.mood)}`}>
                      {getMoodEmoji(day.mood)}
                    </div>
                    <div className="text-xs text-gray-500">{day.score}/10</div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  How are you feeling today?
                </h3>
                <div className="flex space-x-2 mb-3">
                  {["Excellent", "Good", "Fair", "Poor"].map((mood) => (
                    <button
                      key={mood}
                      onClick={() => setSelectedMood(mood)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        selectedMood === mood
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-gray-50 text-gray-600 border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {mood} {getMoodEmoji(mood)}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleMoodSubmit}
                  disabled={!selectedMood}
                  className="w-full py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Record Today's Mood
                </button>
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Upcoming Sessions
              </h2>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">
                        {session.title}
                      </h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {session.status}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(session.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {session.time}
                      </div>
                      {session.location && (
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {session.location}
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      with {session.counselor}
                    </p>
                    <div className="flex space-x-2 mt-3">
                      <button className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors">
                        Join Session
                      </button>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300 transition-colors">
                        Reschedule
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {activity.type}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {activity.description}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span>{activity.date}</span>
                        <span className="mx-2">•</span>
                        <span>{activity.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < activity.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Wellness Resources
              </h2>
              <div className="space-y-3">
                {wellnessResources.map((resource, index) => {
                  const IconComponent = resource.icon;
                  return (
                    <button
                      key={index}
                      className="w-full flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <div
                        className={`w-10 h-10 ${resource.color} rounded-lg flex items-center justify-center mr-3`}
                      >
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {resource.title}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {resource.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Emergency Support */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-red-800 mb-4">
                Emergency Support
              </h2>
              <p className="text-sm text-red-700 mb-4">
                If you're experiencing a mental health crisis or need immediate
                support, don't hesitate to reach out.
              </p>
              <div className="space-y-2">
                <button className="w-full py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
                  Crisis Hotline: 1-800-273-8255
                </button>
                <button className="w-full py-2 bg-red-100 text-red-800 text-sm rounded-lg hover:bg-red-200 transition-colors">
                  Campus Emergency Services
                </button>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Profile
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">Student ID</label>
                  <p className="font-medium text-gray-900">{studentData.id}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Degree</label>
                  <p className="font-medium text-gray-900">
                    {studentData.degree}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Batch</label>
                  <p className="font-medium text-gray-900">
                    {studentData.batch}
                  </p>
                </div>
                <button className="w-full py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StdProfile;
