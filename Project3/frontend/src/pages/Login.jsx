import React, { useEffect, useState } from "react";
import { FaUserLock } from "react-icons/fa";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  User,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

//   useEffect(() => {
//     console.log("Email:", email);
//     console.log("Errors:", errors);
//   }, [email, errors]);

  const { register, reset, handleSubmit } = useForm();

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     try {
  //       // Mock successful login
  //       const mockUser = {
  //         id: "1",
  //         email,
  //         name: "John Doe",
  //       };

  //       console.log("✅ Login success:", mockUser);
  //       // dispatch(loginSuccess(mockUser));
  //       // navigate("/");
  //     } catch (err) {
  //       console.error("❌ Login failed:", err);
  //       // dispatch(loginFailure("Invalid credentials. Please try again."));

  //     }

  const LoginHandler = (User) => {
    User.id = nanoid();
    console.log(User);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border  border-white/20 p-8">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <FaUserLock className="h-8 w-8 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back
            </h2>
            <p className="text-gray-600">Please sign in to your account</p>
          </div>

          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(LoginHandler)}
          >
            <div className="space-y-4">
              {/* Email Field */}
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">

                
                {/* User i  dont want  */}
                {/* <div className="inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 -mt-7 -my-20  text-gray-400" />
                </div>

                <div className="pb-1">
                    <input
                  {...register("user")}
                  id="User"
                  name="user"
                  type="User"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                  placeholder="user"
                />

                </div> */}



                <div className="inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 -mt-7 -my-20  text-gray-400" />
                </div>
                <input
                  {...register("email")}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                  placeholder="Enter your email"
                />
                {/* </div>
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div> */}

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
                      // type={showPassword ? 'text' : 'password'}
                      // autoComplete="current-password"
                      // value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full pl-10 pr-12 py-3 border ${
                        errors.password ? "border-red-300" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setPassword(Password)}
                    >
                      {Password ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  {/* <Link
                                        to="/forgot-password"
                                        className="text-blue-600 hover:text-blue-500 transition-colors duration-200"
                                    >
                                        Forgot your password?
                                    </Link> */}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                // disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {/* {loading ? (
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                ) : (
                                    <>
                                        Sign In
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )} */}  Sign In
              </button>


              {/* Sign Up Link */}

              <div className="text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
