import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  Video,
  Phone,
  MapPin,
  Filter,
  Search,
  BarChart3,
  Calendar as CalendarIcon,
  Star,
  Zap
} from 'lucide-react';

const PsyCalendar = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample weekly cases data
  const [weeklyCases, setWeeklyCases] = useState([
    {
      id: 1,
      patientName: "Rahul Sharma",
      date: new Date(2024, 0, 15, 10, 0),
      duration: 45,
      type: "video",
      priority: "high",
      issue: "Anxiety Disorder",
      status: "scheduled",
      notes: "First session, needs careful handling",
      previousSessions: 0
    },
    {
      id: 2,
      patientName: "Priya Patel",
      date: new Date(2024, 0, 15, 14, 30),
      duration: 30,
      type: "phone",
      priority: "medium",
      issue: "Stress Management",
      status: "scheduled",
      notes: "Follow-up session",
      previousSessions: 2
    },
    {
      id: 3,
      patientName: "Amit Kumar",
      date: new Date(2024, 0, 16, 11, 0),
      duration: 60,
      type: "in-person",
      priority: "high",
      issue: "Severe Sleep Disorder",
      status: "scheduled",
      notes: "Critical case, medication review needed",
      previousSessions: 1
    },
    {
      id: 4,
      patientName: "Neha Singh",
      date: new Date(2024, 0, 17, 9, 0),
      duration: 45,
      type: "video",
      priority: "medium",
      issue: "Academic Pressure",
      status: "scheduled",
      notes: "Final year student, exam stress",
      previousSessions: 3
    },
    {
      id: 5,
      patientName: "Vikram Joshi",
      date: new Date(2024, 0, 18, 15, 0),
      duration: 45,
      type: "video",
      priority: "low",
      issue: "Relationship Counseling",
      status: "scheduled",
      notes: "Regular counseling",
      previousSessions: 5
    },
    {
      id: 6,
      patientName: "Sanjay Verma",
      date: new Date(2024, 0, 19, 13, 0),
      duration: 60,
      type: "in-person",
      priority: "high",
      issue: "Depression Therapy",
      status: "scheduled",
      notes: "Medication adjustment required",
      previousSessions: 4
    }
  ]);

  // Get week dates
  const getWeekDates = (date) => {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());
    
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(start);
      newDate.setDate(start.getDate() + i);
      weekDates.push(newDate);
    }
    return weekDates;
  };

  // Navigate to previous week
  const prevWeek = () => {
    const newDate = new Date(currentWeek);
    newDate.setDate(currentWeek.getDate() - 7);
    setCurrentWeek(newDate);
  };

  // Navigate to next week
  const nextWeek = () => {
    const newDate = new Date(currentWeek);
    newDate.setDate(currentWeek.getDate() + 7);
    setCurrentWeek(newDate);
  };

  const weekDates = getWeekDates(currentWeek);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get cases for specific date
  const getCasesForDate = (date) => {
    return weeklyCases.filter(caseItem => 
      caseItem.date.getDate() === date.getDate() &&
      caseItem.date.getMonth() === date.getMonth() &&
      caseItem.date.getFullYear() === date.getFullYear()
    );
  };

  // Statistics
  const totalCases = weeklyCases.length;
  const highPriorityCases = weeklyCases.filter(caseItem => caseItem.priority === 'high').length;
  const newPatients = weeklyCases.filter(caseItem => caseItem.previousSessions === 0).length;
  const totalHours = weeklyCases.reduce((sum, caseItem) => sum + caseItem.duration, 0) / 60;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Weekly Case Overview</h1>
          <p className="text-gray-600">Manage your weekly schedule and patient cases</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Cases</p>
              <p className="text-2xl font-bold text-blue-600">{totalCases}</p>
            </div>
            <CalendarIcon className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">High Priority</p>
              <p className="text-2xl font-bold text-red-600">{highPriorityCases}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-400" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">New Patients</p>
              <p className="text-2xl font-bold text-green-600">{newPatients}</p>
            </div>
            <User className="h-8 w-8 text-green-400" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Hours</p>
              <p className="text-2xl font-bold text-purple-600">{totalHours.toFixed(1)}h</p>
            </div>
            <Clock className="h-8 w-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Week Navigation */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-semibold">
              Week of {weekDates[0].toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - {weekDates[6].toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </h2>
            <div className="flex space-x-2">
              <button 
                onClick={prevWeek}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button 
                onClick={nextWeek}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <button 
              onClick={() => setCurrentWeek(new Date())}
              className="text-blue-600 text-sm font-medium"
            >
              This Week
            </button>
          </div>
        </div>

        {/* Weekly Calendar */}
        <div className="grid grid-cols-7 gap-2">
          {weekDates.map((date, index) => {
            const dayCases = getCasesForDate(date);
            const isToday = date.toDateString() === new Date().toDateString();
            
            return (
              <div
                key={index}
                className={`min-h-32 p-3 border rounded-lg ${
                  isToday ? 'bg-blue-50 border-blue-500' : 'bg-white'
                } ${date.toDateString() === selectedDate.toDateString() ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedDate(date)}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-semibold ${
                    isToday ? 'text-blue-600' : 'text-gray-700'
                  }`}>
                    {dayNames[index]}
                  </span>
                  <span className={`text-sm ${
                    isToday ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  } rounded-full w-6 h-6 flex items-center justify-center`}>
                    {date.getDate()}
                  </span>
                </div>
                
                <div className="space-y-1">
                  {dayCases.slice(0, 3).map(caseItem => (
                    <div
                      key={caseItem.id}
                      className={`text-xs p-1 rounded truncate ${
                        caseItem.priority === 'high' ? 'bg-red-100 text-red-800 border-l-2 border-red-500' :
                        caseItem.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 border-l-2 border-yellow-500' :
                        'bg-green-100 text-green-800 border-l-2 border-green-500'
                      }`}
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">
                          {caseItem.date.getHours()}:{caseItem.date.getMinutes().toString().padStart(2, '0')}
                        </span>
                        {caseItem.priority === 'high' && <Zap className="h-3 w-3" />}
                      </div>
                      <div>{caseItem.patientName.split(' ')[0]}</div>
                    </div>
                  ))}
                  
                  {dayCases.length > 3 && (
                    <div className="text-xs text-blue-600 text-center">
                      +{dayCases.length - 3} more cases
                    </div>
                  )}
                  
                  {dayCases.length === 0 && (
                    <div className="text-xs text-gray-400 text-center py-2">
                      No cases
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Day Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                Cases for {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h3>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                {getCasesForDate(selectedDate).length} cases
              </span>
            </div>
            
            <div className="p-4">
              {getCasesForDate(selectedDate).length > 0 ? (
                <div className="space-y-4">
                  {getCasesForDate(selectedDate).map(caseItem => (
                    <div key={caseItem.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${
                            caseItem.type === 'video' ? 'bg-blue-100 text-blue-600' :
                            caseItem.type === 'phone' ? 'bg-green-100 text-green-600' :
                            'bg-purple-100 text-purple-600'
                          }`}>
                            {caseItem.type === 'video' ? <Video className="h-4 w-4" /> :
                             caseItem.type === 'phone' ? <Phone className="h-4 w-4" /> :
                             <MapPin className="h-4 w-4" />}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{caseItem.patientName}</h4>
                            <p className="text-gray-600">{caseItem.issue}</p>
                            <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                              <span className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{caseItem.date.toLocaleTimeString('en-US', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })} • {caseItem.duration}min</span>
                              </span>
                              <span>Previous sessions: {caseItem.previousSessions}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end space-y-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            caseItem.priority === 'high' ? 'bg-red-100 text-red-800' :
                            caseItem.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {caseItem.priority} priority
                          </span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {caseItem.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-md mb-3">
                        <p className="text-sm text-gray-700">
                          <strong>Notes:</strong> {caseItem.notes}
                        </p>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center space-x-1">
                          <Video className="h-4 w-4" />
                          <span>Start Session</span>
                        </button>
                        <button className="border border-gray-300 px-3 py-2 rounded-md text-sm">
                          View Patient History
                        </button>
                        <button className="border border-gray-300 px-3 py-2 rounded-md text-sm">
                          Add Notes
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                  <p>No cases scheduled for this day</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Priority Cases & Quick Actions */}
        <div className="space-y-6">
          {/* High Priority Cases */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b bg-red-50">
              <h3 className="font-semibold text-red-800 flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>High Priority Cases This Week</span>
              </h3>
            </div>
            <div className="p-4">
              {weeklyCases.filter(caseItem => caseItem.priority === 'high').length > 0 ? (
                <div className="space-y-3">
                  {weeklyCases.filter(caseItem => caseItem.priority === 'high').map(caseItem => (
                    <div key={caseItem.id} className="border-l-4 border-red-500 bg-red-50 p-3 rounded-r-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-red-800">{caseItem.patientName}</h4>
                          <p className="text-sm text-red-600">{caseItem.issue}</p>
                        </div>
                        <Zap className="h-4 w-4 text-red-500" />
                      </div>
                      <p className="text-xs text-red-700 mt-1">{caseItem.date.toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No high priority cases this week</p>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Quick Actions</h3>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
              <button className="bg-blue-50 text-blue-600 p-3 rounded-md flex flex-col items-center space-y-1">
                <User className="h-5 w-5" />
                <span className="text-sm">New Patient</span>
              </button>
              <button className="bg-green-50 text-green-600 p-3 rounded-md flex flex-col items-center space-y-1">
                <CalendarIcon className="h-5 w-5" />
                <span className="text-sm">Set Availability</span>
              </button>
              <button className="bg-purple-50 text-purple-600 p-3 rounded-md flex flex-col items-center space-y-1">
                <BarChart3 className="h-5 w-5" />
                <span className="text-sm">Weekly Report</span>
              </button>
              <button className="bg-orange-50 text-orange-600 p-3 rounded-md flex flex-col items-center space-y-1">
                <Clock className="h-5 w-5" />
                <span className="text-sm">Time Blocks</span>
              </button>
            </div>
          </div>

          {/* This Week Summary */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Week Summary</h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Busiest Day</span>
                <span className="font-semibold">Wednesday (3 cases)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Session Time</span>
                <span className="font-semibold">{totalHours.toFixed(1)} hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Follow-ups Needed</span>
                <span className="font-semibold">2 patients</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Medication Reviews</span>
                <span className="font-semibold">3 cases</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsyCalendar;