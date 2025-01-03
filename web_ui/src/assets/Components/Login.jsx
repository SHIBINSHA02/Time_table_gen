import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="h-screen flex flex-col lg:flex-row relative">
        {/* Left Section - Login */}
        <div className="flex-1 bg-gradient-to-l from-gradientStart1 to-gradientEnd1 flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl font-bold mb-6 z-10  text-white">Login</h1>
          <input
            type="email"
            placeholder="Email"
            className="w-3/4 p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-3/4 p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          />
          <button
            className="w-3/4 p-3 bg-blue-500 text-white rounded-lg mb-4 z-10"
            onClick={() => (window.location.href = '/home')}
          >
            Login
          </button>
          <a href="#" className="text-blue-500 mb-6 z-10">
            Forgot Password?
          </a>
          <img src="/google-icon.svg" alt="Google" className="h-12 w-12 z-10" />
        </div>

        {/* Right Section - Sign Up */}
        <div className="flex-1 bg-gradient-to-r from-gradientStart2 to-gradientEnd2 flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl font-bold mb-6 z-1  text-white">Sign Up</h1>
          <input
            type="text"
            placeholder="Full Name"
            className="w-3/4 p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-3/4 p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-3/4 p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          />
          <button
            className="w-3/4 p-3 bg-blue-500 text-white rounded-lg mb-4 z-10"
            onClick={() => (window.location.href = '/home')}
          >
            Sign Up
          </button>
          <img src="/google-icon.svg" alt="Google" className="h-12 w-12" />
        </div>

        {/* Centered Image */}
        <img
          src="/Images/signin.png" 
          alt="Center Image"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-80 w-110 "
        />
      </div>
    );
  }
}
