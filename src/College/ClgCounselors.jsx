import React, { useState } from 'react';
import { Search, Filter, UserPlus, Trash2, Star, Users, Award, TrendingUp, X } from 'lucide-react';

const ClgCounselors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPerformance, setFilterPerformance] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCounselor, setNewCounselor] = useState({
    name: '',
    batch: '',
    degree: '',
    totalCounseling: 0,
    performance: 'Good'
  });

  // Sample counselors data
  const [counselorsData, setCounselorsData] = useState([
    {
      id: 'COUN-2024-001',
      name: 'Sarah Johnson',
      batch: '2021',
      degree: 'Psychology',
      totalCounseling: 145,
      performance: 'Excellent'
    },
    {
      id: 'COUN-2024-002',
      name: 'Michael Chen',
      batch: '2020',
      degree: 'Clinical Psychology',
      totalCounseling: 128,
      performance: 'Good'
    },
    {
      id: 'COUN-2024-003',
      name: 'Emily Rodriguez',
      batch: '2022',
      degree: 'Social Work',
      totalCounseling: 167,
      performance: 'Excellent'
    },
    {
      id: 'COUN-2024-004',
      name: 'David Thompson',
      batch: '2021',
      degree: 'Psychology',
      totalCounseling: 89,
      performance: 'Good'
    },
    {
      id: 'COUN-2024-005',
      name: 'Lisa Park',
      batch: '2019',
      degree: 'Counseling Psychology',
      totalCounseling: 203,
      performance: 'Outstanding'
    },
    {
      id: 'COUN-2024-006',
      name: 'James Wilson',
      batch: '2020',
      degree: 'Mental Health Counseling',
      totalCounseling: 112,
      performance: 'Good'
    },
    {
      id: 'COUN-2024-007',
      name: 'Amanda Davis',
      batch: '2022',
      degree: 'Psychology',
      totalCounseling: 76,
      performance: 'Fair'
    },
    {
      id: 'COUN-2024-008',
      name: 'Robert Kim',
      batch: '2021',
      degree: 'Clinical Psychology',
      totalCounseling: 134,
      performance: 'Excellent'
    }
  ]);

  // Filter counselors based on search and performance
  const filteredCounselors = counselorsData.filter(counselor => {
    const matchesSearch = counselor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         counselor.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         counselor.batch.includes(searchTerm) ||
                         counselor.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterPerformance === 'all' || counselor.performance.toLowerCase() === filterPerformance.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  // Get performance status styling
  const getPerformanceStatus = (performance) => {
    const statusStyles = {
      'Outstanding': 'bg-purple-100 text-purple-800',
      'Excellent': 'bg-green-100 text-green-800',
      'Good': 'bg-blue-100 text-blue-800',
      'Fair': 'bg-yellow-100 text-yellow-800',
      'Poor': 'bg-red-100 text-red-800'
    };
    return statusStyles[performance] || 'bg-gray-100 text-gray-800';
  };

  // Get performance stars
  const getPerformanceStars = (performance) => {
    const stars = {
      'Outstanding': 5,
      'Excellent': 4,
      'Good': 3,
      'Fair': 2,
      'Poor': 1
    };
    return stars[performance] || 3;
  };

  // Get statistics
  const stats = {
    total: counselorsData.length,
    outstanding: counselorsData.filter(c => c.performance === 'Outstanding').length,
    excellent: counselorsData.filter(c => c.performance === 'Excellent').length,
    good: counselorsData.filter(c => c.performance === 'Good').length,
    totalSessions: counselorsData.reduce((sum, c) => sum + c.totalCounseling, 0)
  };

  // Handle add counselor
  const handleAddCounselor = () => {
    if (newCounselor.name && newCounselor.batch && newCounselor.degree) {
      const newId = `COUN-2024-${String(counselorsData.length + 1).padStart(3, '0')}`;
      setCounselorsData([...counselorsData, {
        id: newId,
        ...newCounselor,
        totalCounseling: parseInt(newCounselor.totalCounseling) || 0
      }]);
      setNewCounselor({ name: '', batch: '', degree: '', totalCounseling: 0, performance: 'Good' });
      setShowAddModal(false);
    }
  };

  // Handle delete counselor
  const handleDeleteCounselor = (id) => {
    if (window.confirm('Are you sure you want to delete this counselor?')) {
      setCounselorsData(counselorsData.filter(counselor => counselor.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">College Counselors</h1>
          <p className="text-gray-600">Meet our team of dedicated counselors who are here to support students</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Counselors</p>
                <p className="text-3xl font-bold text-gray-800">{stats.total}</p>
              </div>
              <Users className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Top Performers</p>
                <p className="text-3xl font-bold text-gray-800">{stats.outstanding + stats.excellent}</p>
              </div>
              <Award className="h-12 w-12 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalSessions}</p>
              </div>
              <TrendingUp className="h-12 w-12 text-purple-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Sessions</p>
                <p className="text-3xl font-bold text-gray-800">{Math.round(stats.totalSessions / stats.total)}</p>
              </div>
              <Star className="h-12 w-12 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Search, Filter, and Add Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by Name, ID, Degree, or Batch..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <select
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filterPerformance}
                  onChange={(e) => setFilterPerformance(e.target.value)}
                >
                  <option value="all">All Performance</option>
                  <option value="outstanding">Outstanding</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Add Counselor
            </button>
          </div>
        </div>

        {/* Counselors Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Counselors List</h2>
            <p className="text-sm text-gray-600 mt-1">Showing {filteredCounselors.length} of {counselorsData.length} counselors</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Counselor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Batch
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Degree
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Sessions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCounselors.map((counselor) => (
                  <tr key={counselor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{counselor.name}</div>
                        <div className="text-sm text-gray-500">{counselor.id}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        {counselor.batch}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-600">{counselor.degree}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">{counselor.totalCounseling}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPerformanceStatus(counselor.performance)}`}>
                        {counselor.performance}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < getPerformanceStars(counselor.performance) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleDeleteCounselor(counselor.id)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                        title="Delete Counselor"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredCounselors.length === 0 && (
            <div className="text-center py-12">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No counselors found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>

        {/* Add Counselor Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Add New Counselor</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={newCounselor.name}
                    onChange={(e) => setNewCounselor({...newCounselor, name: e.target.value})}
                    placeholder="Enter counselor name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Batch</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={newCounselor.batch}
                    onChange={(e) => setNewCounselor({...newCounselor, batch: e.target.value})}
                    placeholder="e.g., 2021"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={newCounselor.degree}
                    onChange={(e) => setNewCounselor({...newCounselor, degree: e.target.value})}
                    placeholder="e.g., Psychology"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Total Counseling Sessions</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={newCounselor.totalCounseling}
                    onChange={(e) => setNewCounselor({...newCounselor, totalCounseling: e.target.value})}
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Performance</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={newCounselor.performance}
                    onChange={(e) => setNewCounselor({...newCounselor, performance: e.target.value})}
                  >
                    <option value="Outstanding">Outstanding</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>
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
                  onClick={handleAddCounselor}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Counselor
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClgCounselors;