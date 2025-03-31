// SCAD Connect Starter - Dark Theme React + Tailwind Template

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-black text-yellow-400 font-sans">
      <Router>
        <nav className="flex justify-between items-center p-4 border-b border-yellow-600">
          <h1 className="text-2xl font-bold">🐝 SCAD Connect</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/profile" className="hover:text-white">Profile</Link>
            <Link to="/login" className="hover:text-white">Login</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Welcome to SCAD Connect 🐝</h2>
      <p>Find and connect with fellow creatives across campus.</p>
    </div>
  );
}

function Profile() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
      <div className="bg-yellow-900 p-4 rounded-lg shadow-md text-white">
        <p><strong>Name:</strong> Craig Welch</p>
        <p><strong>Major:</strong> UX Design</p>
        <p><strong>Year:</strong> Senior</p>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input className="w-full p-2 mb-4 bg-yellow-100 text-black rounded" placeholder="Username" />
      <input className="w-full p-2 mb-4 bg-yellow-100 text-black rounded" placeholder="Password" type="password" />
      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded">Login</button>
    </div>
  );
}

export default App;

