import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Calendar,
  Pill,
  Settings,
  User,
} from "lucide-react";
import Logo from "../assets/logo.png";

const PsyLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { 
      name: "Dashboard", 
      path: "/psychiatrist/dashboard", 
      icon: <Home className="h-5 w-5" /> 
    },
    {
      name: "Appointment",
      path: "/psychiatrist/appointment",
      icon: <Calendar className="h-5 w-5" />,
    },
    { 
      name: "Calender", 
      path: "/psychiatrist/calender", 
      icon: <Pill className="h-5 w-5" /> 
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-4 flex items-center justify-center space-x-2 border-b border-gray-600">
          <img src={Logo} alt="Sattava Logo" className="h-14" />
        </div>

        <nav className="flex-1 p-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 px-2 py-2 rounded-md ${
                location.pathname === item.path
                  ? "bg-black text-white"
                  : "hover:text-gray-300"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="flex items-center justify-end p-4 bg-blue-600 shadow">
          <div className="flex items-center space-x-4 text-white">
            <Home
              className="h-5 w-5 cursor-pointer"
              onClick={() => navigate("/")}
            />
            <Settings className="h-5 w-5 cursor-pointer" />
            <User className="h-5 w-5 cursor-pointer" />
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PsyLayout;