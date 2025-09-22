import React, { useState } from 'react';
import { Users, MessageCircle, Calendar, Clock, Heart, TrendingUp, Bell, Settings, User, MapPin, Phone, Video, CheckCircle, XCircle, Star, AlertCircle, UserCheck } from 'lucide-react';

const CnlDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  // Counselor data
  const counselorData = {
    id: 'COUN-2024-003',
    name: 'Sarah Johnson',
    batch: '2021',
    degree: 'Psychology',
    hostel: 'Rose Hall',
    room: 'B-204',
    gender: 'Female',
    totalSessions: 89,
    activeConnections: 7,
    rating: 4.6,
    availability: 'Available'
  };

  // Student connection requests
  const connectionRequests = [
    {
      id: 'REQ-001',
      studentId: 'STU-2024-234',
      gender: 'Female',
      hostelBlock: 'Rose Hall',
      roomArea: 'B-Block',
      requestTime: '2025-09-22 10:30 AM',
      reason: 'Academic stress and anxiety',
      preferredMode: 'in-person',
      urgency: 'medium',
      status: 'pending'
    },
    {
      id: 'REQ-002',
      studentId: 'STU-2024-156',
      gender: 'Female',
      hostelBlock: 'Rose Hall',
      roomArea: 'A-Block',
      requestTime: '2025-09-22 11:15 AM',
      reason: 'Social isolation and loneliness',
      preferredMode: 'online',
      urgency: 'low',
      status: 'pending'
    },
    {
      id: 'REQ-003',
      studentId: 'STU-2024-298',
      gender: 'Female',
      hostelBlock: 'Rose Hall',
      roomArea: 'C-Block',
      requestTime: '2025-09-22 02:45 PM',
      reason: 'Relationship issues and emotional support',
      preferredMode: 'in-person',
      urgency: 'high',
      status: 'pending'
    }
  ];

  // Active counseling sessions
  const activeSessions = [
    {
      id: 'SESS-001',
      studentId: 'STU-2024-087',
      startDate: '2025-09-15',
      sessionCount: 4,
      nextSession: '2025-09-24 3:00 PM',
      mode: 'in-person',
      location: 'Rose Hall Common Room',
      progress: 'Good progress',
      notes: 'Student showing improvement in managing stress'
    },
    {
      id: 'SESS-002',
      studentId: 'STU-2024-145',
      startDate: '2025-09-18',
      sessionCount: 2,
      nextSession: '2025-09-23 7:00 PM',
      mode: 'online',
      location: 'Video Call',
      progress: 'Moderate progress',
      notes: 'Working on social anxiety and confidence building'
    },
    {
      id: 'SESS-003',
      studentId: 'STU-2024-203',
      startDate: '2025-09-20',
      sessionCount: 1,
      nextSession: '2025-09-25 4:30 PM',
      mode: 'in-person',
      location: 'Garden Area',
      progress: 'Initial assessment',
      notes: 'New connection, building trust and rapport'
    }
  ];

  // Recent completed sessions
  const recentSessions = [
    {
      id: 'COMP-001',
      studentId: 'STU-2024-***',
      date: '2025-09-21',
      duration: '45 min',
      mode: 'in-person',
      outcome: 'Positive session',
      rating: 5,
      feedback: 'Very helpful and understanding counselor'
    },
    {
      id: 'COMP-002',
      studentId: 'STU-2024-***',
      date: '2025-09-20',
      duration: '30 min',
      mode: 'online',
      outcome: 'Follow-up required',
      rating: 4,
      feedback: 'Good guidance, need more sessions'
    },
    {
      id: 'COMP-003',
      studentId: 'STU-2024-***',
      date: '2025-09-19',
      duration: '60 min',
      mode: 'in-person',
      outcome: 'Issue resolved',
      rating: 5,
      feedback: 'Excellent support during difficult time'
    }
  ];

  // Weekly activity stats
  const weeklyStats = [
    { day: 'Mon', sessions: 2 },
    { day: 'Tue', sessions: 3 },
    { day: 'Wed', sessions: 1 },
    { day: 'Thu', sessions: 4 },
    { day: 'Fri', sessions: 2 },
    { day: 'Sat', sessions: 1 },
    { day: 'Sun', sessions: 1 }
  ];

  // Handle connection request
  const handleConnectionRequest = (requestId, action) => {
    if (action === 'accept') {
      alert(`Connection request ${requestId} accepted. You can now reach out to the student.`);
    } else {
      alert(`Connection request ${requestId} declined.`);
    }
  };

  // Get urgency color
  const getUrgencyColor = (urgency) => {
    const colors = {
      'high': 'bg-red-100 text-red-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'low': 'bg-green-100 text-green-800'
    };
    return colors[urgency] || 'bg-gray-100 text-gray-800';
  };

  // Get progress color
  const getProgressColor = (progress) => {
    if (progress.includes('Good')) return 'text-green-600';
    if (progress.includes('Moderate')) return 'text-yellow-600';
    if (progress.includes('Initial')) return 'text-blue-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-pink-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Counselor Portal</h1>
                <p className="text-sm text-gray-600">Welcome back, {counselorData.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-green-50 text-green-700 px-3 py-2 rounded-lg">
                <UserCheck className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{counselorData.availability}</span>
              </div>
              <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-2 rounded-lg">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{counselorData.activeConnections} Active</span>
              </div>
              <Bell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800" />
              <Settings className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800" />
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <User className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">{counselorData.id}</span>
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
                <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                <p className="text-3xl font-bold text-blue-600">{counselorData.totalSessions}</p>
              </div>
              <MessageCircle className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Connections</p>
                <p className="text-3xl font-bold text-green-600">{counselorData.activeConnections}</p>
              </div>
              <Users className="h-12 w-12 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-3xl font-bold text-yellow-600">{counselorData.rating}</p>
              </div>
              <Star className="h-12 w-12 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-3xl font-bold text-purple-600">{weeklyStats.reduce((sum, day) => sum + day.sessions, 0)}</p>
              </div>
              <TrendingUp className="h-12 w-12 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'requests', label: 'Connection Requests' },
                { key: 'active', label: 'Active Sessions' },
                { key: 'history', label: 'Recent Sessions' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedTab(tab.key)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    selectedTab === tab.key
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {selectedTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Weekly Activity Chart */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Activity</h3>
                    <div className="flex items-end justify-between h-32 space-x-2">
                      {weeklyStats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className="bg-pink-500 rounded-t"
                            style={{ height: `${(stat.sessions / 4) * 100}px`, width: '24px' }}
                          ></div>
                          <span className="text-xs text-gray-600 mt-2">{stat.day}</span>
                          <span className="text-xs font-medium text-gray-800">{stat.sessions}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Counselor Profile */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm text-gray-600">Degree & Batch</label>
                        <p className="font-medium text-gray-900">{counselorData.degree} - {counselorData.batch}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Location</label>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 text-gray-600 mr-1" />
                          <span className="font-medium text-gray-900">{counselorData.hostel}, {counselorData.room}</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Gender & Matching</label>
                        <p className="font-medium text-gray-900">{counselorData.gender} - Same Gender Matching</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Student Rating</label>
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900 mr-2">{counselorData.rating}</span>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(counselorData.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Connection Requests Tab */}
            {selectedTab === 'requests' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">Student Connection Requests</h3>
                  <span className="text-sm text-gray-600">Matched by location and gender</span>
                </div>
                {connectionRequests.map((request) => (
                  <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-gray-900">Student ID: {request.studentId}</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getUrgencyColor(request.urgency)}`}>
                          {request.urgency} urgency
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{request.requestTime}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="text-xs text-gray-600">Location Match</label>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm font-medium">{request.hostelBlock} - {request.roomArea}</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Gender Match</label>
                        <div className="flex items-center mt-1">
                          <UserCheck className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm font-medium">{request.gender} ✓</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Preferred Mode</label>
                        <div className="flex items-center mt-1">
                          {request.preferredMode === 'in-person' ? (
                            <Users className="h-4 w-4 text-blue-600 mr-2" />
                          ) : (
                            <Video className="h-4 w-4 text-purple-600 mr-2" />
                          )}
                          <span className="text-sm font-medium capitalize">{request.preferredMode}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="text-xs text-gray-600">Reason for Connection</label>
                      <p className="text-sm text-gray-800 mt-1">{request.reason}</p>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleConnectionRequest(request.id, 'accept')}
                        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Accept & Connect
                      </button>
                      <button
                        onClick={() => handleConnectionRequest(request.id, 'decline')}
                        className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Active Sessions Tab */}
            {selectedTab === 'active' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Ongoing Counseling Sessions</h3>
                {activeSessions.map((session) => (
                  <div key={session.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-gray-900">Student ID: {session.studentId}</span>
                        <span className="text-sm text-gray-600">({session.sessionCount} sessions)</span>
                      </div>
                      <span className="text-sm text-gray-600">Started: {session.startDate}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="text-xs text-gray-600">Next Session</label>
                        <div className="flex items-center mt-1">
                          <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                          <span className="text-sm font-medium">{session.nextSession}</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Mode & Location</label>
                        <div className="flex items-center mt-1">
                          {session.mode === 'in-person' ? (
                            <Users className="h-4 w-4 text-green-600 mr-2" />
                          ) : (
                            <Video className="h-4 w-4 text-purple-600 mr-2" />
                          )}
                          <span className="text-sm font-medium">{session.location}</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Progress</label>
                        <p className={`text-sm font-medium mt-1 ${getProgressColor(session.progress)}`}>
                          {session.progress}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="text-xs text-gray-600">Session Notes</label>
                      <p className="text-sm text-gray-800 mt-1">{session.notes}</p>
                    </div>

                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Contact Student
                      </button>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Schedule Session
                      </button>
                      <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                        Add Notes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Recent Sessions Tab */}
            {selectedTab === 'history' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Recently Completed Sessions</h3>
                {recentSessions.map((session) => (
                  <div key={session.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-gray-900">Anonymous Student</span>
                        <span className="text-sm text-gray-600">{session.studentId}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{session.date}</span>
                        <span className="text-sm text-gray-500">({session.duration})</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <label className="text-xs text-gray-600">Session Mode</label>
                        <div className="flex items-center mt-1">
                          {session.mode === 'in-person' ? (
                            <Users className="h-4 w-4 text-green-600 mr-2" />
                          ) : (
                            <Video className="h-4 w-4 text-purple-600 mr-2" />
                          )}
                          <span className="text-sm capitalize">{session.mode}</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Outcome</label>
                        <p className="text-sm font-medium mt-1">{session.outcome}</p>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Student Rating</label>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-600">Student Feedback</label>
                      <p className="text-sm text-gray-800 mt-1 italic">"{session.feedback}"</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
              <Clock className="h-6 w-6 text-gray-600 mr-2" />
              <span className="text-gray-700">Update Availability</span>
            </button>
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
              <MessageCircle className="h-6 w-6 text-gray-600 mr-2" />
              <span className="text-gray-700">Send Message</span>
            </button>
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
              <Calendar className="h-6 w-6 text-gray-600 mr-2" />
              <span className="text-gray-700">View Calendar</span>
            </button>
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
              <TrendingUp className="h-6 w-6 text-gray-600 mr-2" />
              <span className="text-gray-700">View Reports</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CnlDashboard;