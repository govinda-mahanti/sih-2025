import React, { useState } from 'react';
import { Search, Filter, Plus, Edit, Trash2, Calendar, Clock, Users, MapPin, Video, X, User } from 'lucide-react';

const ClgSessions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSession, setNewSession] = useState({
    title: '',
    type: 'online',
    date: '',
    time: '',
    duration: '',
    counselor: '',
    location: '',
    maxParticipants: '',
    description: ''
  });

  // Sample sessions data
  const [sessionsData, setSessionsData] = useState([
    {
      id: 'SESS-2024-001',
      title: 'Stress Management Workshop',
      type: 'online',
      date: '2025-09-25',
      time: '10:00 AM',
      duration: '60 min',
      counselor: 'Sarah Johnson',
      location: 'Zoom Meeting Room',
      maxParticipants: 30,
      enrolled: 25,
      status: 'scheduled',
      description: 'Learn effective techniques to manage academic stress'
    },
    {
      id: 'SESS-2024-002',
      title: 'Group Therapy Session',
      type: 'offline',
      date: '2025-09-24',
      time: '2:00 PM',
      duration: '90 min',
      counselor: 'Michael Chen',
      location: 'Room 204, Counseling Center',
      maxParticipants: 15,
      enrolled: 12,
      status: 'scheduled',
      description: 'Group discussion on anxiety and coping mechanisms'
    },
    {
      id: 'SESS-2024-003',
      title: 'Mindfulness Meditation',
      type: 'online',
      date: '2025-09-23',
      time: '6:00 PM',
      duration: '45 min',
      counselor: 'Emily Rodriguez',
      location: 'Google Meet',
      maxParticipants: 50,
      enrolled: 48,
      status: 'completed',
      description: 'Guided meditation session for mental wellness'
    },
    {
      id: 'SESS-2024-004',
      title: 'Career Counseling Workshop',
      type: 'offline',
      date: '2025-09-26',
      time: '11:00 AM',
      duration: '120 min',
      counselor: 'David Thompson',
      location: 'Main Auditorium',
      maxParticipants: 100,
      enrolled: 78,
      status: 'scheduled',
      description: 'Professional guidance for career planning and development'
    },
    {
      id: 'SESS-2024-005',
      title: 'Yoga and Wellness',
      type: 'offline',
      date: '2025-09-22',
      time: '7:00 AM',
      duration: '75 min',
      counselor: 'Lisa Park',
      location: 'Gymnasium',
      maxParticipants: 25,
      enrolled: 25,
      status: 'completed',
      description: 'Morning yoga session for physical and mental wellness'
    },
    {
      id: 'SESS-2024-006',
      title: 'Academic Support Group',
      type: 'online',
      date: '2025-09-27',
      time: '4:00 PM',
      duration: '60 min',
      counselor: 'James Wilson',
      location: 'Teams Meeting',
      maxParticipants: 20,
      enrolled: 15,
      status: 'scheduled',
      description: 'Support group for students struggling with academics'
    }
  ]);

  // Sample counselors list for dropdown
  const counselors = [
    'Sarah Johnson',
    'Michael Chen',
    'Emily Rodriguez',
    'David Thompson',
    'Lisa Park',
    'James Wilson',
    'Amanda Davis',
    'Robert Kim'
  ];

  // Filter sessions based on search, type, and status
  const filteredSessions = sessionsData.filter(session => {
    const matchesSearch = session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.counselor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || session.type === filterType;
    const matchesStatus = filterStatus === 'all' || session.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  // Get session type styling
  const getTypeStyle = (type) => {
    return type === 'online' 
      ? 'bg-blue-100 text-blue-800' 
      : 'bg-green-100 text-green-800';
  };

  // Get status styling
  const getStatusStyle = (status) => {
    const statusStyles = {
      'scheduled': 'bg-yellow-100 text-yellow-800',
      'completed': 'bg-green-100 text-green-800',
      'cancelled': 'bg-red-100 text-red-800'
    };
    return statusStyles[status] || 'bg-gray-100 text-gray-800';
  };

  // Get statistics
  const stats = {
    total: sessionsData.length,
    scheduled: sessionsData.filter(s => s.status === 'scheduled').length,
    completed: sessionsData.filter(s => s.status === 'completed').length,
    totalEnrolled: sessionsData.reduce((sum, s) => sum + s.enrolled, 0),
    online: sessionsData.filter(s => s.type === 'online').length,
    offline: sessionsData.filter(s => s.type === 'offline').length
  };

  // Handle add session
  const handleAddSession = () => {
    if (newSession.title && newSession.date && newSession.time && newSession.counselor) {
      const newId = `SESS-2024-${String(sessionsData.length + 1).padStart(3, '0')}`;
      const sessionToAdd = {
        id: newId,
        ...newSession,
        maxParticipants: parseInt(newSession.maxParticipants) || 20,
        enrolled: 0,
        status: 'scheduled'
      };
      setSessionsData([...sessionsData, sessionToAdd]);
      setNewSession({
        title: '',
        type: 'online',
        date: '',
        time: '',
        duration: '',
        counselor: '',
        location: '',
        maxParticipants: '',
        description: ''
      });
      setShowAddModal(false);
    }
  };

  // Handle delete session
  const handleDeleteSession = (id) => {
    if (window.confirm('Are you sure you want to delete this session?')) {
      setSessionsData(sessionsData.filter(session => session.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Session Management</h1>
          <p className="text-gray-600">Manage online and offline counseling sessions for students</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                <p className="text-3xl font-bold text-gray-800">{stats.total}</p>
              </div>
              <Calendar className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Scheduled</p>
                <p className="text-3xl font-bold text-gray-800">{stats.scheduled}</p>
              </div>
              <Clock className="h-12 w-12 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Enrolled</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalEnrolled}</p>
              </div>
              <Users className="h-12 w-12 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Online/Offline</p>
                <p className="text-3xl font-bold text-gray-800">{stats.online}/{stats.offline}</p>
              </div>
              <Video className="h-12 w-12 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Search, Filter, and Add Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by Title, Counselor, Location, or ID..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <select
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
              <div className="relative">
                <select
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Session
            </button>
          </div>
        </div>

        {/* Sessions Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Sessions List</h2>
            <p className="text-sm text-gray-600 mt-1">Showing {filteredSessions.length} of {sessionsData.length} sessions</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Counselor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSessions.map((session) => (
                  <tr key={session.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{session.title}</div>
                        <div className="text-sm text-gray-500">{session.id}</div>
                        <div className="text-xs text-gray-400 mt-1">{session.duration}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getTypeStyle(session.type)}`}>
                        {session.type === 'online' ? <Video className="h-3 w-3 mr-1" /> : <MapPin className="h-3 w-3 mr-1" />}
                        {session.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        <div>
                          <div>{new Date(session.date).toLocaleDateString()}</div>
                          <div className="text-xs text-gray-400">{session.time}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="h-4 w-4 mr-1" />
                        {session.counselor}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600 max-w-xs truncate">
                        {session.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{session.enrolled}/{session.maxParticipants}</div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div 
                          className="bg-blue-600 h-1.5 rounded-full" 
                          style={{ width: `${(session.enrolled / session.maxParticipants) * 100}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusStyle(session.status)}`}>
                        {session.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 transition-colors" title="Edit Session">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteSession(session.id)}
                          className="text-red-600 hover:text-red-900 transition-colors"
                          title="Delete Session"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredSessions.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No sessions found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>

        {/* Add Session Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Add New Session</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Session Title *</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={newSession.title}
                      onChange={(e) => setNewSession({...newSession, title: e.target.value})}
                      placeholder="Enter session title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Session Type *</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={newSession.type}
                      onChange={(e) => setNewSession({...newSession, type: e.target.value})}
                    >
                      <option value="online">Online</option>
                      <option value="offline">Offline</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={newSession.date}
                      onChange={(e) => setNewSession({...newSession, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={newSession.time}
                      onChange={(e) => setNewSession({...newSession, time: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={newSession.duration}
                      onChange={(e) => setNewSession({...newSession, duration: e.target.value})}
                      placeholder="e.g., 60 min"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Counselor *</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={newSession.counselor}
                      onChange={(e) => setNewSession({...newSession, counselor: e.target.value})}
                    >
                      <option value="">Select Counselor</option>
                      {counselors.map(counselor => (
                        <option key={counselor} value={counselor}>{counselor}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Max Participants</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={newSession.maxParticipants}
                      onChange={(e) => setNewSession({...newSession, maxParticipants: e.target.value})}
                      placeholder="20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={newSession.location}
                    onChange={(e) => setNewSession({...newSession, location: e.target.value})}
                    placeholder={newSession.type === 'online' ? 'e.g., Zoom Meeting Room' : 'e.g., Room 204, Counseling Center'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={newSession.description}
                    onChange={(e) => setNewSession({...newSession, description: e.target.value})}
                    placeholder="Brief description of the session..."
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 p-6 border-t">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddSession}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Session
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClgSessions;