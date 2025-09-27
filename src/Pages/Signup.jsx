import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Users,
  Stethoscope,
  GraduationCap,
  Building,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroimg from "../assets/heroImg.png";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const navigate = useNavigate();

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
      link: "/student/dashboard",
    },
    {
      value: "college",
      label: "College",
      icon: Building,
      color: "text-pink-600",
      link: "/college/dashboard",
    },
    {
      value: "counsellor",
      label: "Counsellor",
      icon: Users,
      color: "text-green-600",
      link: "/counsellor/dashboard",
    },
    {
      value: "psychiatrist",
      label: "Psychiatrist",
      icon: Stethoscope,
      color: "text-purple-600",
      link: "/psychiatrist/dashboard",
    },
  ];

  const validateForm = () => {
    const newErrors = {};

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

      const selectedRole = roles.find((r) => r.value === formData.role);
      if (selectedRole) {
        navigate(selectedRole.link); // role-based dashboard
      }

      setFormData({
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
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-first responsive container */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 lg:p-8 xl:p-12 gap-6 lg:gap-8 xl:gap-16">
        
        {/* Form Container */}
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl bg-white shadow-xl rounded-2xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 order-2 lg:order-1 lg:mr-8 lg:flex-shrink-0">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-600 text-sm sm:text-base">Join our platform today</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 text-sm sm:text-base border-2 rounded-xl focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-xs sm:text-sm text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2 sm:py-2.5 text-sm sm:text-base border-2 rounded-xl focus:ring-2 focus:ring-blue-500 ${
                    errors.password ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="Enter password"
                />
                <span
                  className="absolute right-3 top-2.5 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                  )}
                </span>
              </div>
              {errors.password && (
                <p className="text-xs sm:text-sm text-red-600 mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Confirm Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2 sm:py-2.5 text-sm sm:text-base border-2 rounded-xl focus:ring-2 focus:ring-blue-500 ${
                    errors.confirmPassword ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="Confirm password"
                />
                <span
                  className="absolute right-3 top-2.5 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                  )}
                </span>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs sm:text-sm text-red-600 mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Role *
              </label>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <div
                      key={role.value}
                      onClick={() => handleRoleSelect(role.value)}
                      className={`flex items-center p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition ${
                        formData.role === role.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 mr-3 ${role.color} flex-shrink-0`} />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">
                          {role.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {errors.role && (
                <p className="text-xs sm:text-sm text-red-600 mt-1">{errors.role}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:opacity-90 transition text-sm sm:text-base"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>
          
          {/* Login Link */}
          <div className="text-center pt-2">
            <span className="text-sm sm:text-base text-gray-600">Already have an account?</span>
            <button
              onClick={() => navigate("/login")}
              className="font-bold ml-2 text-blue-600 hover:underline focus:outline-none text-sm sm:text-base"
            >
              Login
            </button>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="w-full max-w-sm lg:max-w-6xl xl:max-w-7xl 2xl:max-w-none lg:flex-1 xl:flex-[2] order-1 lg:order-2 mb-6 lg:mb-0">
          <img 
            src={heroimg} 
            alt="hero" 
            className="w-full h-auto max-h-64 sm:max-h-80 lg:min-h-[700px] lg:max-h-[900px] xl:max-h-[1000px] 2xl:max-h-screen object-contain lg:object-cover xl:object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;