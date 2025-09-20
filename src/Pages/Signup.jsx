import React, { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Users,
  Stethoscope,
  GraduationCap,
  Building,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroimg from "../assets/heroimg.png";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const navigate = useNavigate(); // <-- initialize here

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    {
      value: "student",
      label: "Student",

      icon: GraduationCap,
      color: "text-blue-600",
    },
    {
      value: "college",
      label: "College",
      icon: Building,
      color: "text-pink-600",
    },
    {
      value: "counsellor",
      label: "Counsellor",

      icon: Users,
      color: "text-green-600",
    },
    {
      value: "psychiatrist",
      label: "Psychiatrist",

      icon: Stethoscope,
      color: "text-purple-600",
    },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.role) {
      newErrors.role = "Please select a role";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleRoleSelect = (roleValue) => {
    setFormData((prev) => ({ ...prev, role: roleValue }));
    if (errors.role) setErrors((prev) => ({ ...prev, role: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      alert("Registration successful!");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      });
    } catch (err) {
      console.error(err);
      alert("Registration failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-6">
        {/* Header */}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Username *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-3 py-2 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 ${
                  errors.username ? "border-red-300" : "border-gray-200"
                }`}
                placeholder="Enter username"
              />
            </div>
            {errors.username && (
              <p className="text-sm text-red-600">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-3 py-2 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? "border-red-300" : "border-gray-200"
                }`}
                placeholder="your.email@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-10 py-2 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 ${
                  errors.password ? "border-red-300" : "border-gray-200"
                }`}
                placeholder="Enter password"
              />
              <span
                className="absolute right-3 top-2.5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Confirm Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-10 py-2 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 ${
                  errors.confirmPassword ? "border-red-300" : "border-gray-200"
                }`}
                placeholder="Confirm password"
              />
              <span
                className="absolute right-3 top-2.5 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-600">{errors.confirmPassword}</p>
            )}
          </div>
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Role *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <div
                    key={role.value}
                    onClick={() => handleRoleSelect(role.value)}
                    className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition ${
                      formData.role === role.value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <Icon className={`h-6 w-6 mr-3 ${role.color}`} />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {role.label}
                      </p>
                      <p className="text-sm text-gray-500">
                        {role.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {errors.role && (
              <p className="text-sm text-red-600 mt-1">{errors.role}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:opacity-90 transition"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="p-4 text-center">
          <span className="">Already have an account?</span>
          <button
            onClick={() => navigate("/login")}
            className="font-bold ml-2 hover:underline focus:outline-none"
          >
            Login
          </button>
        </div>
      </div>
      <div className="p-4">
        <img src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default SignupPage;
