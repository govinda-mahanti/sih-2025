import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Bell,
  Search,
  Calendar,
  MessageCircle,
  Video,
  AlertTriangle,
  Shield,
  Users,
  User,
  FileText,
  TrendingUp,
  Clock,
  Phone,
  BookOpen,
  Settings,
  Eye,
  Activity,
  Brain,
  Heart,
  ChevronRight,
  ChevronDown,
  Plus,
  Send,
  Filter,
  Download,
  Share2,
  Lock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Zap,
  Target,
  Moon,
} from "lucide-react";

const CounselorDashboard = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [showAlerts, setShowAlerts] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [riskFilter, setRiskFilter] = useState("all");
  const [newNote, setNewNote] = useState("");

  // Mock data for students
  const students = [
    {
      id: "STU-001",
      pseudonym: "Student Alpha",
      riskLevel: "high",
      lastActive: "2024-08-16",
      wellnessScore: 35,
      currentMood: 3,
      stressLevel: 8,
      anxietyLevel: 7,
      recentAssessments: {
        phq9: { score: 15, date: "2024-08-15", level: "Moderate Depression" },
        gad7: { score: 12, date: "2024-08-14", level: "Moderate Anxiety" },
      },
      trends: [
        { date: "Aug 10", mood: 5, stress: 6, anxiety: 5 },
        { date: "Aug 11", mood: 4, stress: 7, anxiety: 6 },
        { date: "Aug 12", mood: 3, stress: 8, anxiety: 7 },
        { date: "Aug 13", mood: 2, stress: 9, anxiety: 8 },
        { date: "Aug 14", mood: 3, stress: 8, anxiety: 7 },
        { date: "Aug 15", mood: 4, stress: 7, anxiety: 6 },
        { date: "Aug 16", mood: 3, stress: 8, anxiety: 7 },
      ],
      notes: [
        {
          date: "2024-08-15",
          counselor: "Dr. Smith",
          content:
            "Student reports increased academic pressure. Recommended CBT anxiety module. Follow-up scheduled.",
          type: "session",
        },
        {
          date: "2024-08-12",
          counselor: "Dr. Smith",
          content:
            "Initial assessment completed. High stress indicators related to upcoming exams.",
          type: "assessment",
        },
      ],
      engagementMetrics: {
        sessionsAttended: 3,
        modulesCompleted: 2,
        lastLogin: "2024-08-16 14:30",
        streakDays: 5,
      },
    },
    {
      id: "STU-002",
      pseudonym: "Student Beta",
      riskLevel: "moderate",
      lastActive: "2024-08-16",
      wellnessScore: 65,
      currentMood: 6,
      stressLevel: 5,
      anxietyLevel: 4,
      recentAssessments: {
        phq9: { score: 8, date: "2024-08-15", level: "Mild Depression" },
        gad7: { score: 6, date: "2024-08-14", level: "Mild Anxiety" },
      },
      trends: [
        { date: "Aug 10", mood: 6, stress: 4, anxiety: 3 },
        { date: "Aug 11", mood: 7, stress: 3, anxiety: 3 },
        { date: "Aug 12", mood: 5, stress: 6, anxiety: 5 },
        { date: "Aug 13", mood: 6, stress: 5, anxiety: 4 },
        { date: "Aug 14", mood: 7, stress: 4, anxiety: 3 },
        { date: "Aug 15", mood: 6, stress: 5, anxiety: 4 },
        { date: "Aug 16", mood: 6, stress: 5, anxiety: 4 },
      ],
      notes: [
        {
          date: "2024-08-14",
          counselor: "Dr. Johnson",
          content:
            "Positive progress noted. Student engaging well with mindfulness exercises.",
          type: "session",
        },
      ],
      engagementMetrics: {
        sessionsAttended: 5,
        modulesCompleted: 4,
        lastLogin: "2024-08-16 10:15",
        streakDays: 12,
      },
    },
    {
      id: "STU-003",
      pseudonym: "Student Gamma",
      riskLevel: "low",
      lastActive: "2024-08-16",
      wellnessScore: 85,
      currentMood: 8,
      stressLevel: 2,
      anxietyLevel: 2,
      recentAssessments: {
        phq9: { score: 3, date: "2024-08-15", level: "Minimal Depression" },
        gad7: { score: 2, date: "2024-08-14", level: "Minimal Anxiety" },
      },
      trends: [
        { date: "Aug 10", mood: 8, stress: 3, anxiety: 2 },
        { date: "Aug 11", mood: 9, stress: 2, anxiety: 1 },
        { date: "Aug 12", mood: 7, stress: 3, anxiety: 3 },
        { date: "Aug 13", mood: 8, stress: 2, anxiety: 2 },
        { date: "Aug 14", mood: 8, stress: 2, anxiety: 2 },
        { date: "Aug 15", mood: 9, stress: 1, anxiety: 1 },
        { date: "Aug 16", mood: 8, stress: 2, anxiety: 2 },
      ],
      notes: [
        {
          date: "2024-08-13",
          counselor: "Dr. Wilson",
          content:
            "Maintenance check-in. Student doing well, continue current wellness plan.",
          type: "session",
        },
      ],
      engagementMetrics: {
        sessionsAttended: 2,
        modulesCompleted: 6,
        lastLogin: "2024-08-16 16:45",
        streakDays: 18,
      },
    },
  ];

  // Real-time alerts
  const alerts = [
    {
      id: 1,
      studentId: "STU-001",
      type: "high_risk",
      message: "Student Alpha wellness score dropped below 40",
      timestamp: "2024-08-16 15:30",
      priority: "urgent",
    },
    {
      id: 2,
      studentId: "STU-004",
      type: "missed_session",
      message: "Student Delta missed scheduled session",
      timestamp: "2024-08-16 14:00",
      priority: "medium",
    },
    {
      id: 3,
      studentId: "STU-002",
      type: "assessment_due",
      message: "Student Beta assessment reminder due",
      timestamp: "2024-08-16 12:00",
      priority: "low",
    },
  ];

  // Aggregate analytics
  const aggregateData = {
    totalStudents: 156,
    activeToday: 98,
    highRisk: 12,
    moderateRisk: 34,
    lowRisk: 110,
    averageWellnessScore: 72,
    sessionsThisWeek: 45,
    engagement: {
      selfHelpModules: 78,
      vrSessions: 23,
      counselingSessions: 45,
      chatInteractions: 156,
    },
  };

  const getRiskColor = (level) => {
    switch (level) {
      case "high":
        return "text-red-400 bg-red-600";
      case "moderate":
        return "text-yellow-400 bg-yellow-600";
      case "low":
        return "text-green-400 bg-green-600";
      default:
        return "text-gray-400 bg-gray-600";
    }
  };

  const getRiskBorderColor = (level) => {
    switch (level) {
      case "high":
        return "border-red-400";
      case "moderate":
        return "border-yellow-400";
      case "low":
        return "border-green-400";
      default:
        return "border-gray-400";
    }
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.pseudonym.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk =
      riskFilter === "all" || student.riskLevel === riskFilter;
    return matchesSearch && matchesRisk;
  });

  const handleAddNote = () => {
    if (newNote.trim() && selectedStudent) {
      const note = {
        date: new Date().toISOString().split("T")[0],
        counselor: "Current User",
        content: newNote,
        type: "note",
      };
      // In a real app, this would update the backend
      setNewNote("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Navigation Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">
              Counselor Dashboard
            </h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowAlerts(!showAlerts)}
              className="relative p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5" />
              {alerts.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {alerts.length}
                </span>
              )}
            </button>
            <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              <Calendar className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Alerts Dropdown */}
        {showAlerts && (
          <div className="absolute right-6 top-16 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-semibold text-white">Recent Alerts</h3>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="p-3 border-b border-gray-700 hover:bg-gray-700"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-white">{alert.message}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {alert.timestamp}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        alert.priority === "urgent"
                          ? "bg-red-600 bg-opacity-20 text-red-400"
                          : alert.priority === "medium"
                          ? "bg-yellow-600 bg-opacity-20 text-yellow-400"
                          : "bg-blue-600 bg-opacity-20 text-blue-400"
                      }`}
                    >
                      {alert.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="w-80 bg-gray-800 border-r border-gray-700 overflow-y-auto">
          {/* Quick Stats */}
          <div className="p-4 border-b border-gray-700">
            <h2 className="font-semibold text-white mb-3">Overview</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-700 p-3 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">
                  {aggregateData.totalStudents}
                </div>
                <div className="text-xs text-gray-400">Total Students</div>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-400">
                  {aggregateData.activeToday}
                </div>
                <div className="text-xs text-gray-400">Active Today</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div className="bg-red-600 bg-opacity-20 p-2 rounded text-center">
                <div className="text-lg font-bold text-red-400">
                  {aggregateData.highRisk}
                </div>
                <div className="text-xs text-red-300">High Risk</div>
              </div>
              <div className="bg-yellow-600 bg-opacity-20 p-2 rounded text-center">
                <div className="text-lg font-bold text-yellow-400">
                  {aggregateData.moderateRisk}
                </div>
                <div className="text-xs text-yellow-300">Moderate</div>
              </div>
              <div className="bg-green-600 bg-opacity-20 p-2 rounded text-center">
                <div className="text-lg font-bold text-green-400">
                  {aggregateData.lowRisk}
                </div>
                <div className="text-xs text-green-300">Low Risk</div>
              </div>
            </div>
          </div>

          {/* Filter Controls */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-2 mb-3">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">
                Filter by Risk Level
              </span>
            </div>
            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Students</option>
              <option value="high">High Risk</option>
              <option value="moderate">Moderate Risk</option>
              <option value="low">Low Risk</option>
            </select>
          </div>

          {/* Student List */}
          <div className="p-4">
            <h3 className="font-semibold text-white mb-3">
              Students ({filteredStudents.length})
            </h3>
            <div className="space-y-2">
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  onClick={() => setSelectedStudent(student)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors border-l-4 ${
                    selectedStudent?.id === student.id
                      ? "bg-purple-600 bg-opacity-20 border-purple-400"
                      : `bg-gray-700 hover:bg-gray-600 ${getRiskBorderColor(
                          student.riskLevel
                        )}`
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-white">
                      {student.pseudonym}
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium bg-opacity-20 ${getRiskColor(
                        student.riskLevel
                      )}`}
                    >
                      {student.riskLevel}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    ID: {student.id} • Score: {student.wellnessScore}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Last active: {student.lastActive}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {selectedStudent ? (
            <>
              {/* Student Header */}
              <div className="bg-gray-800 border-b border-gray-700 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {selectedStudent.pseudonym}
                      </h2>
                      <p className="text-sm text-gray-400">
                        ID: {selectedStudent.id}
                      </p>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-opacity-20 ${getRiskColor(
                        selectedStudent.riskLevel
                      )}`}
                    >
                      {selectedStudent.riskLevel.charAt(0).toUpperCase() +
                        selectedStudent.riskLevel.slice(1)}{" "}
                      Risk
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors flex items-center">
                      <Video className="w-4 h-4 mr-2" />
                      Start Session
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors flex items-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Emergency
                    </button>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="bg-gray-800 border-b border-gray-700 px-6">
                <div className="flex space-x-6">
                  {[
                    { key: "overview", label: "Overview", icon: TrendingUp },
                    { key: "assessments", label: "Assessments", icon: Brain },
                    { key: "notes", label: "Case Notes", icon: FileText },
                    { key: "engagement", label: "Engagement", icon: Activity },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex items-center space-x-2 py-3 px-1 border-b-2 transition-colors ${
                        activeTab === tab.key
                          ? "border-purple-400 text-purple-400"
                          : "border-transparent text-gray-400 hover:text-white"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {activeTab === "overview" && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Wellness Metrics */}
                    <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Wellness Trends
                      </h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={selectedStudent.trends}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#374151"
                          />
                          <XAxis dataKey="date" stroke="#9CA3AF" />
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
                            strokeWidth={2}
                            name="Mood"
                          />
                          <Line
                            type="monotone"
                            dataKey="stress"
                            stroke="#EF4444"
                            strokeWidth={2}
                            name="Stress"
                          />
                          <Line
                            type="monotone"
                            dataKey="anxiety"
                            stroke="#F59E0B"
                            strokeWidth={2}
                            name="Anxiety"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Current Status */}
                    <div className="space-y-6">
                      {/* Wellness Score */}
                      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Current Status
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">
                              Wellness Score
                            </span>
                            <span
                              className={`text-2xl font-bold ${
                                selectedStudent.wellnessScore >= 70
                                  ? "text-green-400"
                                  : selectedStudent.wellnessScore >= 40
                                  ? "text-yellow-400"
                                  : "text-red-400"
                              }`}
                            >
                              {selectedStudent.wellnessScore}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Mood</span>
                            <span className="text-green-400">
                              {selectedStudent.currentMood}/10
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Stress</span>
                            <span className="text-red-400">
                              {selectedStudent.stressLevel}/10
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Anxiety</span>
                            <span className="text-yellow-400">
                              {selectedStudent.anxietyLevel}/10
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Quick Actions
                        </h3>
                        <div className="space-y-2">
                          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm transition-colors flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            Schedule Follow-up
                          </button>
                          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Assign Resources
                          </button>
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition-colors flex items-center">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share Care Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "assessments" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Recent Assessments
                      </h3>
                      <div className="space-y-4">
                        {Object.entries(selectedStudent.recentAssessments).map(
                          ([key, assessment]) => (
                            <div
                              key={key}
                              className="p-4 bg-gray-700 rounded-lg"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-white">
                                  {key.toUpperCase()}
                                </h4>
                                <span className="text-sm text-gray-400">
                                  {assessment.date}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-gray-400">
                                  {assessment.level}
                                </span>
                                <span
                                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    assessment.score <= 5
                                      ? "bg-green-600 bg-opacity-20 text-green-400"
                                      : assessment.score <= 10
                                      ? "bg-yellow-600 bg-opacity-20 text-yellow-400"
                                      : "bg-red-600 bg-opacity-20 text-red-400"
                                  }`}
                                >
                                  {assessment.score}
                                </span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Schedule New Assessment
                      </button>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Care Plan
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-white">CBT Anxiety Module</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                          <Clock className="w-5 h-5 text-yellow-400" />
                          <span className="text-white">
                            Mindfulness Exercises
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                          <Plus className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-400">
                            Add new intervention
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "notes" && (
                  <div className="max-w-4xl">
                    {/* Add Note */}
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Add Session Note
                      </h3>
                      <div className="space-y-3">
                        <textarea
                          value={newNote}
                          onChange={(e) => setNewNote(e.target.value)}
                          placeholder="Enter your session notes here..."
                          className="w-full bg-gray-700 text-white p-3 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <div className="flex justify-end">
                          <button
                            onClick={handleAddNote}
                            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Save Note
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Notes History */}
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Session History
                      </h3>
                      <div className="space-y-4">
                        {selectedStudent.notes.map((note, index) => (
                          <div
                            key={index}
                            className="p-4 bg-gray-700 rounded-lg border-l-4 border-purple-400"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    note.type === "session"
                                      ? "bg-blue-600 bg-opacity-20 text-blue-400"
                                      : note.type === "assessment"
                                      ? "bg-green-600 bg-opacity-20 text-green-400"
                                      : "bg-gray-600 bg-opacity-20 text-gray-400"
                                  }`}
                                >
                                  {note.type}
                                </span>
                                <span className="text-sm text-gray-400">
                                  by {note.counselor}
                                </span>
                              </div>
                              <span className="text-sm text-gray-400">
                                {note.date}
                              </span>
                            </div>
                            <p className="text-white">{note.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "engagement" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Engagement Metrics */}
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Engagement Metrics
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Video className="w-5 h-5 text-blue-400" />
                            <span className="text-white">
                              Sessions Attended
                            </span>
                          </div>
                          <span className="text-blue-400 font-semibold">
                            {selectedStudent.engagementMetrics.sessionsAttended}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <BookOpen className="w-5 h-5 text-green-400" />
                            <span className="text-white">
                              Modules Completed
                            </span>
                          </div>
                          <span className="text-green-400 font-semibold">
                            {selectedStudent.engagementMetrics.modulesCompleted}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Zap className="w-5 h-5 text-orange-400" />
                            <span className="text-white">Current Streak</span>
                          </div>
                          <span className="text-orange-400 font-semibold">
                            {selectedStudent.engagementMetrics.streakDays} days
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-purple-400" />
                            <span className="text-white">Last Login</span>
                          </div>
                          <span className="text-purple-400 font-semibold">
                            {selectedStudent.engagementMetrics.lastLogin}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Resource Recommendations */}
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Recommend Resources
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            title: "Anxiety Management CBT",
                            type: "Module",
                            duration: "20 min",
                          },
                          {
                            title: "Deep Breathing VR Session",
                            type: "VR Experience",
                            duration: "15 min",
                          },
                          {
                            title: "Sleep Hygiene Guide",
                            type: "Article",
                            duration: "5 min read",
                          },
                          {
                            title: "Mindfulness Meditation",
                            type: "Audio",
                            duration: "10 min",
                          },
                        ].map((resource, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
                          >
                            <div>
                              <h4 className="text-white font-medium">
                                {resource.title}
                              </h4>
                              <p className="text-sm text-gray-400">
                                {resource.type} • {resource.duration}
                              </p>
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
                              Assign
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            // No Student Selected - Analytics Overview
            <div className="flex-1 p-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Analytics & Insights
                </h2>

                {/* Aggregate Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Total Students</p>
                        <p className="text-3xl font-bold text-white">
                          {aggregateData.totalStudents}
                        </p>
                      </div>
                      <Users className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">
                          Average Wellness
                        </p>
                        <p className="text-3xl font-bold text-green-400">
                          {aggregateData.averageWellnessScore}
                        </p>
                      </div>
                      <Heart className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">
                          Sessions This Week
                        </p>
                        <p className="text-3xl font-bold text-blue-400">
                          {aggregateData.sessionsThisWeek}
                        </p>
                      </div>
                      <Calendar className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Active Today</p>
                        <p className="text-3xl font-bold text-yellow-400">
                          {aggregateData.activeToday}
                        </p>
                      </div>
                      <Activity className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                </div>

                {/* Risk Distribution & Engagement Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Risk Distribution */}
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Risk Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={[
                            {
                              name: "Low Risk",
                              value: aggregateData.lowRisk,
                              fill: "#10B981",
                            },
                            {
                              name: "Moderate Risk",
                              value: aggregateData.moderateRisk,
                              fill: "#F59E0B",
                            },
                            {
                              name: "High Risk",
                              value: aggregateData.highRisk,
                              fill: "#EF4444",
                            },
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {[
                            {
                              name: "Low Risk",
                              value: aggregateData.lowRisk,
                              fill: "#10B981",
                            },
                            {
                              name: "Moderate Risk",
                              value: aggregateData.moderateRisk,
                              fill: "#F59E0B",
                            },
                            {
                              name: "High Risk",
                              value: aggregateData.highRisk,
                              fill: "#EF4444",
                            },
                          ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1F2937",
                            border: "1px solid #374151",
                            borderRadius: "8px",
                            color: "white",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Engagement Overview */}
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Platform Engagement
                    </h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart
                        data={[
                          {
                            name: "Self-Help",
                            value: aggregateData.engagement.selfHelpModules,
                          },
                          {
                            name: "VR Sessions",
                            value: aggregateData.engagement.vrSessions,
                          },
                          {
                            name: "Counseling",
                            value: aggregateData.engagement.counselingSessions,
                          },
                          {
                            name: "Chat",
                            value: aggregateData.engagement.chatInteractions,
                          },
                        ]}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="name" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1F2937",
                            border: "1px solid #374151",
                            borderRadius: "8px",
                            color: "white",
                          }}
                        />
                        <Bar dataKey="value" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Early Warning Signals */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Early Warning Signals
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-red-600 bg-opacity-20 rounded-lg border border-red-400 border-opacity-30">
                      <div className="flex items-center space-x-3 mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                        <h4 className="font-semibold text-red-400">
                          At-Risk Students
                        </h4>
                      </div>
                      <p className="text-red-300 text-sm">
                        5 students showing declining trends this week
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-600 bg-opacity-20 rounded-lg border border-yellow-400 border-opacity-30">
                      <div className="flex items-center space-x-3 mb-2">
                        <Clock className="w-5 h-5 text-yellow-400" />
                        <h4 className="font-semibold text-yellow-400">
                          Missed Sessions
                        </h4>
                      </div>
                      <p className="text-yellow-300 text-sm">
                        8 students have missed recent appointments
                      </p>
                    </div>
                    <div className="p-4 bg-blue-600 bg-opacity-20 rounded-lg border border-blue-400 border-opacity-30">
                      <div className="flex items-center space-x-3 mb-2">
                        <Target className="w-5 h-5 text-blue-400" />
                        <h4 className="font-semibold text-blue-400">
                          Low Engagement
                        </h4>
                      </div>
                      <p className="text-blue-300 text-sm">
                        12 students haven't logged in for 3+ days
                      </p>
                    </div>
                  </div>
                </div>

                {/* Team Collaboration */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Team Activity */}
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Team Activity
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          counselor: "Dr. Smith",
                          action: "Completed session with STU-001",
                          time: "2 hours ago",
                        },
                        {
                          counselor: "Dr. Johnson",
                          action: "Updated care plan for STU-002",
                          time: "4 hours ago",
                        },
                        {
                          counselor: "Dr. Wilson",
                          action: "Escalated STU-004 to psychiatrist",
                          time: "6 hours ago",
                        },
                        {
                          counselor: "Dr. Brown",
                          action: "Assigned new resources to STU-003",
                          time: "1 day ago",
                        },
                      ].map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-3 bg-gray-700 rounded-lg"
                        >
                          <User className="w-5 h-5 text-purple-400 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-white text-sm">
                              <span className="font-semibold">
                                {activity.counselor}
                              </span>{" "}
                              {activity.action}
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Privacy & Compliance */}
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Privacy & Compliance
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Lock className="w-5 h-5 text-green-400" />
                          <span className="text-white">Data Encryption</span>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-green-400" />
                          <span className="text-white">Audit Trail</span>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-blue-400" />
                          <span className="text-white">Consent Tracking</span>
                        </div>
                        <span className="text-blue-400 text-sm">
                          156/156 compliant
                        </span>
                      </div>
                      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                        <Download className="w-4 h-4 mr-2" />
                        Export Compliance Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CounselorDashboard;
