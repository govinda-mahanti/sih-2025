import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Calendar,
  Clock,
  Star,
  Trophy,
  Heart,
  Zap,
  Target,
  TrendingUp,
  Award,
  MessageCircle,
  User,
  Home,
  Users,
  Brain,
  Stethoscope,
  Activity,
  ChevronDown,
  ChevronUp,
  Smile,
  Frown,
  Meh,
  AlertTriangle,
  BookOpen,
  Video,
  Shield,
  Phone,
  Bell,
  Headphones,
  Eye,
  Moon,
  Coffee,
  Play,
  CheckCircle,
  Flame,
  Battery,
  Watch,
} from "lucide-react";

const StudentDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("7d");
  const [todayMood, setTodayMood] = useState(null);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  // Mood tracking data
  const moodData = [
    { date: "2024-08-10", mood: 6, stress: 4, anxiety: 3, day: "Mon" },
    { date: "2024-08-11", mood: 7, stress: 3, anxiety: 2, day: "Tue" },
    { date: "2024-08-12", mood: 5, stress: 6, anxiety: 5, day: "Wed" },
    { date: "2024-08-13", mood: 8, stress: 2, anxiety: 2, day: "Thu" },
    { date: "2024-08-14", mood: 7, stress: 4, anxiety: 3, day: "Fri" },
    { date: "2024-08-15", mood: 6, stress: 5, anxiety: 4, day: "Sat" },
    { date: "2024-08-16", mood: 9, stress: 2, anxiety: 1, day: "Sun" },
  ];

  // Wellness score calculation (0-100)
  const currentMood = moodData[moodData.length - 1];
  const wellnessScore = Math.round(
    ((currentMood.mood * 2 +
      (10 - currentMood.stress) +
      (10 - currentMood.anxiety)) /
      3) *
      10
  );

  // Wearable data
  const wearableData = {
    heartRate: 72,
    hrv: 45,
    sleepHours: 7.2,
    steps: 8540,
    activeMinutes: 45,
  };

  // Progress streaks
  const streakData = {
    current: 12,
    longest: 23,
    weeklyGoal: 5,
    weeklyCompleted: 4,
  };

  // Quick assessment scores
  const assessmentScores = {
    phq9: { score: 6, level: "Mild", color: "yellow" },
    gad7: { score: 4, level: "Minimal", color: "green" },
    stress: { score: 5, level: "Moderate", color: "orange" },
  };

  const handleMoodSelect = (mood) => {
    setTodayMood(mood);
  };

  const getWellnessColor = (score) => {
    if (score >= 70) return "green";
    if (score >= 40) return "yellow";
    return "red";
  };

  const wellnessColor = getWellnessColor(wellnessScore);
  const wellnessColorClass = {
    green: "text-green-400 border-green-400",
    yellow: "text-yellow-400 border-yellow-400",
    red: "text-red-400 border-red-400",
  }[wellnessColor];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Your Wellness Journey
          </h1>
          <p className="text-gray-400 text-lg">
            Take care of your mental health, one day at a time
          </p>
        </div>

        {/* Emergency Support Button */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setShowEmergencyModal(true)}
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors"
            title="Emergency Support"
          >
            <Shield className="w-6 h-6" />
          </button>
        </div>

        {/* Emergency Modal */}
        {showEmergencyModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full border border-red-400">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Emergency Support
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-red-600 bg-opacity-20 rounded-lg">
                  <p className="text-red-300 text-sm mb-2">
                    National Suicide Prevention Hotline
                  </p>
                  <a href="tel:988" className="text-white font-bold text-lg">
                    988
                  </a>
                </div>
                <div className="p-4 bg-blue-600 bg-opacity-20 rounded-lg">
                  <p className="text-blue-300 text-sm mb-2">Crisis Text Line</p>
                  <p className="text-white font-bold">Text HOME to 741741</p>
                </div>
                <div className="p-4 bg-purple-600 bg-opacity-20 rounded-lg">
                  <p className="text-purple-300 text-sm mb-2">
                    Campus Counseling
                  </p>
                  <a href="tel:+1234567890" className="text-white font-bold">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              <button
                onClick={() => setShowEmergencyModal(false)}
                className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Daily Check-in & Wellness Score */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Daily Mood Check-in */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Daily Check-in
            </h3>
            <p className="text-gray-400 mb-4">How are you feeling today?</p>
            <div className="flex justify-around mb-4">
              {[
                { mood: 9, emoji: "😄", label: "Great" },
                { mood: 7, emoji: "😊", label: "Good" },
                { mood: 5, emoji: "😐", label: "Okay" },
                { mood: 3, emoji: "😔", label: "Low" },
                { mood: 1, emoji: "😢", label: "Rough" },
              ].map((item) => (
                <button
                  key={item.mood}
                  onClick={() => handleMoodSelect(item.mood)}
                  className={`p-3 rounded-full transition-all ${
                    todayMood === item.mood
                      ? "bg-purple-600 scale-110"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <p className="text-xs mt-1">{item.label}</p>
                </button>
              ))}
            </div>
            {todayMood && (
              <div className="mt-4 p-3 bg-purple-600 bg-opacity-20 rounded-lg">
                <p className="text-purple-300 text-sm">
                  Thanks for checking in! Keep taking care of yourself.
                </p>
              </div>
            )}
          </div>

          {/* Wellness Score */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Wellness Score
            </h3>
            <div className="flex items-center justify-center">
              <div
                className={`relative w-32 h-32 rounded-full border-4 ${wellnessColorClass} flex items-center justify-center`}
              >
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold ${
                      wellnessColorClass.split(" ")[0]
                    }`}
                  >
                    {wellnessScore}
                  </div>
                  <div className="text-sm text-gray-400">out of 100</div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p
                className={`font-semibold ${wellnessColorClass.split(" ")[0]}`}
              >
                {wellnessScore >= 70
                  ? "Great"
                  : wellnessScore >= 40
                  ? "Fair"
                  : "Needs Attention"}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Based on mood, stress, and anxiety levels
              </p>
            </div>
          </div>
        </div>

        {/* Wearable Data & Daily Tip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Wearable Data */}
          <div className="md:col-span-2 bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <Watch className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">
                Health Metrics
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-2xl font-bold text-red-400">
                  {wearableData.heartRate}
                </div>
                <div className="text-xs text-gray-400">HR (bpm)</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {wearableData.hrv}
                </div>
                <div className="text-xs text-gray-400">HRV (ms)</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Moon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {wearableData.sleepHours}h
                </div>
                <div className="text-xs text-gray-400">Sleep</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {wearableData.steps.toLocaleString()}
                </div>
                <div className="text-xs text-gray-400">Steps</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">
                  {wearableData.activeMinutes}
                </div>
                <div className="text-xs text-gray-400">Active Min</div>
              </div>
            </div>
          </div>

          {/* Daily Tip */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <Coffee className="w-6 h-6 text-orange-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">Daily Tip</h3>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌟</div>
              <p className="text-sm text-gray-300 mb-4">
                "Take 5 minutes to practice deep breathing. It's amazing how
                much it can help reset your day."
              </p>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                Try Now
              </button>
            </div>
          </div>
        </div>

        {/* Progress Streaks & Quick Assessments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Progress & Streaks */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <Flame className="w-6 h-6 text-orange-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">
                Progress & Streaks
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-orange-600 bg-opacity-20 rounded-xl">
                <div className="text-3xl font-bold text-orange-400">
                  {streakData.current}
                </div>
                <div className="text-sm text-orange-300">Day Streak</div>
              </div>
              <div className="text-center p-4 bg-purple-600 bg-opacity-20 rounded-xl">
                <div className="text-3xl font-bold text-purple-400">
                  {streakData.longest}
                </div>
                <div className="text-sm text-purple-300">Best Streak</div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-700 bg-opacity-50 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">Weekly Goal</span>
                <span className="text-sm text-gray-300">
                  {streakData.weeklyCompleted}/{streakData.weeklyGoal}
                </span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{
                    width: `${
                      (streakData.weeklyCompleted / streakData.weeklyGoal) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Quick Assessments */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-green-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">
                Quick Assessments
              </h3>
            </div>
            <div className="space-y-3">
              {Object.entries(assessmentScores).map(([key, assessment]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-3 bg-gray-700 bg-opacity-50 rounded-lg"
                >
                  <div>
                    <div className="font-medium text-white">
                      {key.toUpperCase()}
                    </div>
                    <div className="text-sm text-gray-400">
                      {assessment.level}
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      assessment.color === "green"
                        ? "bg-green-600 bg-opacity-20 text-green-400"
                        : assessment.color === "yellow"
                        ? "bg-yellow-600 bg-opacity-20 text-yellow-400"
                        : "bg-orange-600 bg-opacity-20 text-orange-400"
                    }`}
                  >
                    {assessment.score}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
              Take Full Assessment
            </button>
          </div>
        </div>

        {/* Mood & Stress Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Mood Trends */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Mood Trends</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedTimeframe("7d")}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTimeframe === "7d"
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  7D
                </button>
                <button
                  onClick={() => setSelectedTimeframe("30d")}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTimeframe === "30d"
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  30D
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis domain={[0, 10]} stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "white",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="mood"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                  name="Mood"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Stress & Anxiety */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-6">
              Stress & Anxiety
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis domain={[0, 10]} stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "white",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="stress"
                  stroke="#EF4444"
                  strokeWidth={3}
                  dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                  name="Stress"
                />
                <Line
                  type="monotone"
                  dataKey="anxiety"
                  stroke="#F59E0B"
                  strokeWidth={3}
                  dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
                  name="Anxiety"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Self-Help Library & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Self-Help Library */}
          <div className="lg:col-span-2 bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <div className="flex items-center mb-6">
              <BookOpen className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">
                Self-Help Library
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "CBT for Anxiety",
                  type: "Module",
                  duration: "15 min",
                  icon: Brain,
                },
                {
                  title: "Mindfulness Meditation",
                  type: "Audio",
                  duration: "10 min",
                  icon: Headphones,
                },
                {
                  title: "Deep Breathing",
                  type: "Exercise",
                  duration: "5 min",
                  icon: Activity,
                },
                {
                  title: "Sleep Hygiene",
                  type: "Guide",
                  duration: "Read",
                  icon: Moon,
                },
                {
                  title: "Stress Management",
                  type: "Video",
                  duration: "12 min",
                  icon: Video,
                },
                {
                  title: "Progressive Relaxation",
                  type: "Audio",
                  duration: "20 min",
                  icon: Play,
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-700 bg-opacity-50 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer border border-gray-600 border-opacity-50"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <resource.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">
                          {resource.title}
                        </h4>
                        <p className="text-sm text-gray-400">{resource.type}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-600 px-2 py-1 rounded-full">
                      {resource.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-between">
                <span>Book Counseling</span>
                <Calendar className="w-5 h-5" />
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-between">
                <span>AR/VR Session</span>
                <Eye className="w-5 h-5" />
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-between">
                <span>Chat Support</span>
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-between">
                <span>Join Community</span>
                <Users className="w-5 h-5" />
              </button>
            </div>

            {/* Weekly Report */}
            <div className="mt-6 p-4 bg-indigo-600 bg-opacity-20 rounded-xl border border-indigo-600 border-opacity-30">
              <h4 className="font-medium text-indigo-400 mb-2">
                Weekly Report Ready!
              </h4>
              <p className="text-sm text-indigo-300 mb-3">
                Your wellness summary is available
              </p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                View Report
              </button>
            </div>
          </div>
        </div>

        {/* Personalized Recommendations */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
          <div className="flex items-center mb-6">
            <Target className="w-6 h-6 text-purple-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">
              Personalized Recommendations
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-600 bg-opacity-20 rounded-xl border border-purple-600 border-opacity-30">
              <h4 className="font-semibold text-purple-400 mb-2">
                Suggested Activity
              </h4>
              <p className="text-sm text-purple-300 mb-3">
                Based on your stress levels, try a 10-minute mindfulness session
              </p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                Start Now
              </button>
            </div>
            <div className="p-4 bg-green-600 bg-opacity-20 rounded-xl border border-green-600 border-opacity-30">
              <h4 className="font-semibold text-green-400 mb-2">
                Sleep Improvement
              </h4>
              <p className="text-sm text-green-300 mb-3">
                Your sleep could be better. Try our evening relaxation routine
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                Learn More
              </button>
            </div>
            <div className="p-4 bg-blue-600 bg-opacity-20 rounded-xl border border-blue-600 border-opacity-30">
              <h4 className="font-semibold text-blue-400 mb-2">Mood Boost</h4>
              <p className="text-sm text-blue-300 mb-3">
                Physical activity helps! Try a quick 5-minute energy session
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                Get Moving
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
