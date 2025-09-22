import React, { useState } from 'react';
import { Search, Filter, Users, Calendar, Heart, GraduationCap } from 'lucide-react';

const ClgStudent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample student data
  const studentsData = [
    {
      id: 'STU-2024-001',
      degree: 'Computer Science',
      batch: '2024',
      lastSession: 'AI Video Consultation',
      sessionDate: 'Sept 21, 2025',
      mentalHealth: 'Good'
    },
    {
      id: 'STU-2024-042',
      degree: 'Mechanical Engineering',
      batch: '2023',
      lastSession: 'VR Environment Session',
      sessionDate: 'Sept 20, 2025',
      mentalHealth: 'Excellent'
    },
    {
      id: 'STU-2024-089',
      degree: 'Psychology',
      batch: '2024',
      lastSession: 'Volunteer Counseling',
      sessionDate: 'Sept 19, 2025',
      mentalHealth: 'Fair'
    },
    {
      id: 'STU-2024-156',
      degree: 'Business Administration',
      batch: '2022',
      lastSession: 'Anonymous Doctor Call',
      sessionDate: 'Sept 22, 2025',
      mentalHealth: 'Poor'
    },
    {
      id: 'STU-2024-234',
      degree: 'Electrical Engineering',
      batch: '2024',
      lastSession: 'AI Character Call',
      sessionDate: 'Sept 18, 2025',
      mentalHealth: 'Good'
    },
    {
      id: 'STU-2024-298',
      degree: 'Civil Engineering',
      batch: '2023',
      lastSession: 'VR + Mind Sensor Session',
      sessionDate: 'Sept 21, 2025',
      mentalHealth: 'Excellent'
    },
    {
      id: 'STU-2024-312',
      degree: 'Information Technology',
      batch: '2024',
      lastSession: 'College Yoga Session',
      sessionDate: 'Sept 20, 2025',
      mentalHealth: 'Good'
    },
    {
      id: 'STU-2024-387',
      degree: 'Data Science',
      batch: '2022',
      lastSession: 'Anonymous Volunteer Connect',
      sessionDate: 'Sept 17, 2025',
      mentalHealth: 'Fair'
    },
    {
      id: 'STU-2024-445',
      degree: 'Chemical Engineering',
      batch: '2023',
      lastSession: 'AI Video Consultation',
      sessionDate: 'Sept 19, 2025',
      mentalHealth: 'Excellent'
    },
    {
      id: 'STU-2024-521',
      degree: 'Biotechnology',
      batch: '2024',
      lastSession: 'VR Environment Session',
      sessionDate: 'Sept 16, 2025',
      mentalHealth: 'Poor'
    },
    {
      id: 'STU-2024-634',
      degree: 'Mathematics',
      batch: '2022',
      lastSession: 'Volunteer Counseling',
      sessionDate: 'Sept 21, 2025',
      mentalHealth: 'Good'
    },
    {
      id: 'STU-2024-789',
      degree: 'Physics',
      batch: '2023',
      lastSession: 'AI Character Call',
      sessionDate: 'Sept 15, 2025',
      mentalHealth: 'Fair'
    }
  ];

  // Filter students based on search and status
  const filteredStudents = studentsData.filter(student => {
    const matchesSearch = student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.batch.includes(searchTerm);
    const matchesFilter = filterStatus === 'all' || student.mentalHealth.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  // Get mental health status styling
  const getHealthStatus = (status) => {
    const statusStyles = {
      'Excellent': 'bg-green-100 text-green-800',
      'Good': 'bg-blue-100 text-blue-800',
      'Fair': 'bg-yellow-100 text-yellow-800',
      'Poor': 'bg-red-100 text-red-800'
    };
    return statusStyles[status] || 'bg-gray-100 text-gray-800';
  };

  // Get statistics
  const stats = {
    total: studentsData.length,
    excellent: studentsData.filter(s => s.mentalHealth === 'Excellent').length,
    good: studentsData.filter(s => s.mentalHealth === 'Good').length,
    fair: studentsData.filter(s => s.mentalHealth === 'Fair').length,
    poor: studentsData.filter(s => s.mentalHealth === 'Poor').length
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Student Management</h1>
          <p className="text-gray-600">Monitor and track all students' mental health progress</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-gray-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
              </div>
              <Users className="h-8 w-8 text-gray-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Excellent</p>
                <p className="text-2xl font-bold text-green-600">{stats.excellent}</p>
              </div>
              <Heart className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Good</p>
                <p className="text-2xl font-bold text-blue-600">{stats.good}</p>
              </div>
              <Heart className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Fair</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.fair}</p>
              </div>
              <Heart className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Poor</p>
                <p className="text-2xl font-bold text-red-600">{stats.poor}</p>
              </div>
              <Heart className="h-8 w-8 text-red-500" />
            </div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by Student ID, Degree, or Batch..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <select
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Students List</h2>
            <p className="text-sm text-gray-600 mt-1">Showing {filteredStudents.length} of {studentsData.length} students</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Degree
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Batch
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Session
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Session Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mental Health
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <GraduationCap className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">{student.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-600">{student.degree}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        {student.batch}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-600">{student.lastSession}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        {student.sessionDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getHealthStatus(student.mentalHealth)}`}>
                        {student.mentalHealth}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No students found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClgStudent;