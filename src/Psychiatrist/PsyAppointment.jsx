import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  Calendar,
  User,
  Clock,
  MapPin,
  Video,
  Phone,
  MessageCircle,
  Search,
  AlertCircle
} from "lucide-react";

const PsyAppointment = () => {
  // Sample data for appointment requests
  const [appointmentRequests, setAppointmentRequests] = useState([
    { 
      id: 1, 
      studentName: "Rahul Sharma", 
      date: "2023-11-15", 
      time: "10:00 AM", 
      status: "pending", 
      issue: "Anxiety Management",
      urgency: "High",
      type: "Video Call",
      duration: "45 mins",
      previousSessions: 3
    },
    { 
      id: 2, 
      studentName: "Priya Patel", 
      date: "2023-11-15", 
      time: "11:30 AM", 
      status: "pending", 
      issue: "Stress Management",
      urgency: "Medium",
      type: "Phone Call",
      duration: "30 mins",
      previousSessions: 1
    },
    { 
      id: 3, 
      studentName: "Amit Kumar", 
      date: "2023-11-16", 
      time: "2:00 PM", 
      status: "pending", 
      issue: "Sleep Disorders",
      urgency: "High",
      type: "Video Call",
      duration: "60 mins",
      previousSessions: 0
    },
    { 
      id: 4, 
      studentName: "Neha Singh", 
      date: "2023-11-16", 
      time: "3:30 PM", 
      status: "pending", 
      issue: "Academic Pressure",
      urgency: "Medium",
      type: "In-Person",
      duration: "45 mins",
      previousSessions: 2
    },
    { 
      id: 5, 
      studentName: "Vikram Joshi", 
      date: "2023-11-17", 
      time: "9:00 AM", 
      status: "pending", 
      issue: "Relationship Issues",
      urgency: "Low",
      type: "Video Call",
      duration: "45 mins",
      previousSessions: 5
    },
  ]);

  // Approved appointments for today
  const [approvedAppointments, setApprovedAppointments] = useState([
    {
      id: 101,
      studentName: "Sanjay Verma",
      time: "9:00 AM - 9:45 AM",
      type: "Video Call",
      issue: "Career Counseling"
    },
    {
      id: 102,
      studentName: "Meera Nair",
      time: "1:00 PM - 1:45 PM", 
      type: "In-Person",
      issue: "Anxiety Therapy"
    }
  ]);

  // Function to handle appointment approval
  const handleApprove = (id) => {
    const approvedRequest = appointmentRequests.find(req => req.id === id);
    setAppointmentRequests(prev => prev.filter(req => req.id !== id));
    
    // Add to approved appointments
    if (approvedRequest) {
      setApprovedAppointments(prev => [...prev, {
        id: Date.now(),
        studentName: approvedRequest.studentName,
        time: `${approvedRequest.time} - ${approvedRequest.time}`,
        type: approvedRequest.type,
        issue: approvedRequest.issue
      }]);
    }
  };

  // Function to handle appointment rejection
  const handleReject = (id) => {
    setAppointmentRequests(prev => prev.filter(req => req.id !== id));
  };

  // Filter states
  const [urgencyFilter, setUrgencyFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  // Filtered requests
  const filteredRequests = appointmentRequests.filter(request => {
    return (urgencyFilter === "All" || request.urgency === urgencyFilter) &&
           (typeFilter === "All" || request.type === typeFilter);
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Appointment Management</h1>
          <p className="text-gray-600">Manage and schedule patient appointments</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Calendar View</span>
          </button>
        </div>
      </div>

      {/* Active Requests Counter */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <AlertCircle className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-800">
                {appointmentRequests.length} Pending Appointment Requests
              </h3>
              <p className="text-orange-600">Action required for these appointments</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <select 
              value={urgencyFilter}
              onChange={(e) => setUrgencyFilter(e.target.value)}
              className="border rounded-md px-3 py-1 text-sm"
            >
              <option value="All">All Urgency</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="border rounded-md px-3 py-1 text-sm"
            >
              <option value="All">All Types</option>
              <option value="Video Call">Video Call</option>
              <option value="Phone Call">Phone Call</option>
              <option value="In-Person">In-Person</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Appointment Requests Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Appointment Requests */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                New Appointment Requests ({filteredRequests.length})
              </h2>
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search patients..." 
                  className="pl-10 pr-4 py-1 border rounded-md text-sm"
                />
              </div>
            </div>
            <div className="p-4">
              {filteredRequests.length > 0 ? (
                <div className="space-y-4">
                  {filteredRequests.map((request) => (
                    <div key={request.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            {/* Name ki jagah ID */}
                            <h3 className="font-semibold text-lg">ID: {request.id}</h3>
                            <p className="text-gray-600">{request.issue}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                request.urgency === "High" ? "bg-red-100 text-red-800" :
                                request.urgency === "Medium" ? "bg-yellow-100 text-yellow-800" :
                                "bg-green-100 text-green-800"
                              }`}>
                                {request.urgency} Priority
                              </span>
                              <span className="flex items-center space-x-1 text-gray-500">
                                {request.type === "Video Call" ? <Video className="h-3 w-3" /> :
                                 request.type === "Phone Call" ? <Phone className="h-3 w-3" /> :
                                 <MapPin className="h-3 w-3" />}
                                <span>{request.type}</span>
                              </span>
                              <span className="flex items-center space-x-1 text-gray-500">
                                <Clock className="h-3 w-3" />
                                <span>{request.duration}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{request.date}</p>
                          <p className="text-lg font-semibold text-blue-600">{request.time}</p>
                          <p className="text-sm text-gray-500">
                            Previous sessions: {request.previousSessions}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-4 border-t">
                        <div className="flex space-x-2">
                          <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm flex items-center space-x-1">
                            <MessageCircle className="h-3 w-3" />
                            <span>Message</span>
                          </button>
                          <button className="bg-gray-50 text-gray-600 px-3 py-1 rounded-md text-sm">
                            View Profile
                          </button>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => handleApprove(request.id)}
                            className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-1"
                          >
                            <CheckCircle className="h-4 w-4" />
                            <span>Approve</span>
                          </button>
                          <button 
                            onClick={() => handleReject(request.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center space-x-1"
                          >
                            <XCircle className="h-4 w-4" />
                            <span>Reject</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500">No pending appointment requests</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          {/* Today's Approved Appointments */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">Today's Schedule</h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {approvedAppointments.map((appointment) => (
                  <div key={appointment.id} className="border-l-4 border-green-500 bg-green-50 p-3 rounded-r-md">
                    <div className="flex justify-between items-start">
                      <div>
                        {/* Name ki jagah ID */}
                        <h3 className="font-semibold">ID: {appointment.id}</h3>
                        <p className="text-sm text-gray-600">{appointment.issue}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Confirmed
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-medium">{appointment.time}</span>
                      <span className="text-xs text-gray-500">{appointment.type}</span>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <button className="flex-1 bg-green-500 text-white py-1 rounded text-sm">
                        Start Session
                      </button>
                      <button className="px-2 py-1 border rounded text-sm">
                        Reschedule
                      </button>
                    </div>
                  </div>
                ))}
                <div className="text-center">
                  <button className="text-blue-600 text-sm font-medium">
                    + Add New Time Slot
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">Quick Actions</h2>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
              <button className="bg-blue-50 text-blue-600 p-3 rounded-md flex flex-col items-center space-y-1">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">Set Availability</span>
              </button>
              <button className="bg-green-50 text-green-600 p-3 rounded-md flex flex-col items-center space-y-1">
                <Video className="h-5 w-5" />
                <span className="text-sm">Video Setup</span>
              </button>
              <button className="bg-purple-50 text-purple-600 p-3 rounded-md flex flex-col items-center space-y-1">
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">Send Reminders</span>
              </button>
              <button className="bg-orange-50 text-orange-600 p-3 rounded-md flex flex-col items-center space-y-1">
                <Clock className="h-5 w-5" />
                <span className="text-sm">Time Slots</span>
              </button>
            </div>
          </div>

          {/* Appointment Statistics */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">This Week</h2>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Approved Appointments</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Completed Sessions</span>
                <span className="font-semibold">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cancellations</span>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">New Patients</span>
                <span className="font-semibold">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsyAppointment;
