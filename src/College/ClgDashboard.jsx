import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, UserCheck, Heart, BookOpen } from 'lucide-react';

const CollegeDashboard = () => {
  // Sample data for mental health conditions
  const mentalHealthData = [
    { condition: 'Excellent', count: 450, percentage: 35 },
    { condition: 'Good', count: 520, percentage: 40 },
    { condition: 'Fair', count: 230, percentage: 18 },
    { condition: 'Poor', count: 90, percentage: 7 }
  ];

  // Sample data for monthly wellness activities
  const monthlyWellnessData = [
    { month: 'Jan', counselingSessions: 120, aiConsultations: 145, vrSessions: 85, anonymousCalls: 65 },
    { month: 'Feb', counselingSessions: 135, aiConsultations: 162, vrSessions: 92, anonymousCalls: 78 },
    { month: 'Mar', counselingSessions: 145, aiConsultations: 178, vrSessions: 105, anonymousCalls: 82 },
    { month: 'Apr', counselingSessions: 128, aiConsultations: 155, vrSessions: 98, anonymousCalls: 71 },
    { month: 'May', counselingSessions: 152, aiConsultations: 189, vrSessions: 110, anonymousCalls: 89 },
    { month: 'Jun', counselingSessions: 140, aiConsultations: 171, vrSessions: 88, anonymousCalls: 76 },
    { month: 'Jul', counselingSessions: 118, aiConsultations: 134, vrSessions: 95, anonymousCalls: 68 },
    { month: 'Aug', counselingSessions: 165, aiConsultations: 203, vrSessions: 125, anonymousCalls: 94 },
    { month: 'Sep', counselingSessions: 158, aiConsultations: 195, vrSessions: 118, anonymousCalls: 87 }
  ];

  const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">College Dashboard</h1>
          <p className="text-gray-600">Overview of student statistics and wellness metrics</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-3xl font-bold text-gray-800">1,290</p>
              </div>
              <Users className="h-12 w-12 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Psychiatrists</p>
                <p className="text-3xl font-bold text-gray-800">8</p>
              </div>
              <Heart className="h-12 w-12 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Counselors</p>
                <p className="text-3xl font-bold text-gray-800">15</p>
              </div>
              <UserCheck className="h-12 w-12 text-purple-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Programs</p>
                <p className="text-3xl font-bold text-gray-800">42</p>
              </div>
              <BookOpen className="h-12 w-12 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mental Health Conditions Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Mental Health Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mentalHealthData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ condition, percentage }) => `${condition}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {mentalHealthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} students`, 'Count']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              {mentalHealthData.map((item, index) => (
                <div key={item.condition} className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded mr-2"
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  <span>{item.condition}: {item.count} students</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Wellness Activities Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Monthly Wellness Activities</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyWellnessData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="counselingSessions" fill="#3B82F6" name="Volunteer Counseling" />
                <Bar dataKey="aiConsultations" fill="#10B981" name="AI Video Consultations" />
                <Bar dataKey="vrSessions" fill="#F59E0B" name="VR Environment Sessions" />
                <Bar dataKey="anonymousCalls" fill="#EF4444" name="Anonymous Doctor Calls" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span>Volunteer Counseling</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span>AI Video Consultations</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                <span>VR Environment Sessions</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                <span>Anonymous Doctor Calls</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Mind Wellness Sessions */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Mind Wellness Sessions</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Student ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Session Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date & Time</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Duration</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">STU-2024-001</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Volunteer Counseling</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Sept 21, 2025 - 2:00 PM</td>
                  <td className="px-4 py-3 text-sm text-gray-600">45 min</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">STU-2024-042</td>
                  <td className="px-4 py-3 text-sm text-gray-600">AI Video Consultation</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Sept 21, 2025 - 10:30 AM</td>
                  <td className="px-4 py-3 text-sm text-gray-600">30 min</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">STU-2024-089</td>
                  <td className="px-4 py-3 text-sm text-gray-600">VR Environment Session</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Sept 20, 2025 - 3:15 PM</td>
                  <td className="px-4 py-3 text-sm text-gray-600">25 min</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">STU-2024-156</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Anonymous Doctor Call</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Sept 22, 2025 - 11:00 AM</td>
                  <td className="px-4 py-3 text-sm text-gray-600">50 min</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      Scheduled
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">STU-2024-234</td>
                  <td className="px-4 py-3 text-sm text-gray-600">AI Character Call</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Sept 19, 2025 - 4:00 PM</td>
                  <td className="px-4 py-3 text-sm text-gray-600">20 min</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">STU-2024-298</td>
                  <td className="px-4 py-3 text-sm text-gray-600">VR + Mind Sensor Session</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Sept 21, 2025 - 1:30 PM</td>
                  <td className="px-4 py-3 text-sm text-gray-600">35 min</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      In Progress
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">STU-2024-312</td>
                  <td className="px-4 py-3 text-sm text-gray-600">College Yoga Session</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Sept 20, 2025 - 9:00 AM</td>
                  <td className="px-4 py-3 text-sm text-gray-600">60 min</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">STU-2024-387</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Anonymous Volunteer Connect</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Sept 22, 2025 - 2:30 PM</td>
                  <td className="px-4 py-3 text-sm text-gray-600">40 min</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      Scheduled
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDashboard;