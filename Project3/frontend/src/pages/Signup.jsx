import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { FaUserLock } from "react-icons/fa";
import { useForm } from "react-hook-form";

// import { RootState } from "../store";
// import {
//   signupStart,
//   signupSuccess,
//   signupFailure,
//   clearError,
// } from "../store/authSlice";

import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";



  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });

   
  
    // useEffect(() => {
    //   console.log("Email:", email);
    //   console.log("Errors:", errors);
    // }, [email, errors]);

 

  // const handleInputChange = ()=>{
  //   console.log(handleInputChange)


  // }


  const Signup = () => {
     const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [user, setuser] = useState("");
    
    const [errors, setErrors] = useState({
    // name: '',
    // email: '',
    // password: '',
    // confirmPassword: '',
  });


    const { register,
       reset,
        handleSubmit 
      } = useForm();

  const SignUphandler = (User) => {
      User.id = nanoid();
      console.log(User);
      // console.log("user Name:", User.name);
      // console.log("User:", JSON.stringify(User));
    };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
            {/* Header */}
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <User className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Create your account
              </h2>
              <p className="text-gray-600">Join us and start your journey</p>
            </div>

            {/* Error Message */}
            {/* {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2 text-red-700 animate-pulse">
                <AlertCircle size={20} />
                <span className="text-sm">{error}</span>
              </div>
            )} */}

            {/* Form */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(SignUphandler)}>
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                     {...register("user")}
                      id="name"
                      // name="name"
                      type="text"
                      autoComplete="name"
                      value={user}
                      // value={formData.name}
                      // onChange={handleInputChange}
                       onChange={(e) => setuser(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border ${
                        errors.name ? "border-red-300" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {/* {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )} */}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>


                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                    {...register("email")}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      // onChange={handleInputChange}
                       onChange={(e) => setEmail(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border ${
                        errors.email ? "border-red-300" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  {/* {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )} */}
                </div>
                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                     {...register("password")}
                      id="password"
                      name="password"
                      type={Password ? "text" : "password"}
                      autoComplete="new-password"
                      value={Password}
                      // onChange={handleInputChange}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full pl-10 pr-12 py-3 border ${
                        errors.password ? "border-red-300" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                      placeholder="Create a password"
                    />

                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setPassword(!Password)}
                    >
                      {Password ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>

                  {/* Password Strength Indicator */}
                  {/* {formData.password && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">
                          Password strength:
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            getPasswordStrengthText().color
                          }`}
                        >
                          {getPasswordStrengthText().text}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            passwordStrength <= 1
                              ? "bg-red-500"
                              : passwordStrength === 2
                              ? "bg-yellow-500"
                              : passwordStrength === 3
                              ? "bg-blue-500"
                              : "bg-green-500"
                          }`}
                          style={{ width: `${getPasswordStrengthWidth()}%` }}
                        ></div>
                      </div>
                    </div> */}
                  {/* )} */}

                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      // value={formData.confirmPassword}
                      // onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 border ${
                        errors.confirmPassword
                          ? "border-red-300"
                          : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      // onClick={() =>
                      //   setShowConfirmPassword(!showConfirmPassword)
                      // }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  {/* {!errors.confirmPassword &&
                    // formData.confirmPassword &&
                    // formData.password === formData.confirmPassword && (
                      <div className="flex items-center space-x-1 mt-1 text-green-600">
                        <CheckCircle size={16} />
                        <span className="text-sm">Passwords match</span>
                      </div>
                    )} */}
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input
                  id="agree-terms"
                  name="agree-terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="agree-terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-emerald-600 hover:text-emerald-500"
                  >
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-emerald-600 hover:text-emerald-500"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>


              {/* Sign In Link */}
              <div className="text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-emerald-600 hover:text-emerald-500 font-medium transition-colors duration-200"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
