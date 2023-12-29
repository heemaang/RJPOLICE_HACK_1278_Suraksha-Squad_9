// src/components/LandingPage.js

import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100">

      {/* Navigation */}
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Legal Decision-Making System</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Empowering Legal Decision-Making</h2>
          <p className="text-lg mb-8">Connect with experienced lawyers for informed decisions.</p>
          <a href="#signup" className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Get Started</a>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto my-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Connect with Lawyers</h3>
            <p>Easily find and connect with specialized lawyers for your legal needs.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Secure Decision-Making</h3>
            <p>Ensure confidentiality and security in your legal decision-making process.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p>Get assistance and support at any time through our dedicated customer service.</p>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="bg-gray-200 py-[16]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Connect with experienced lawyers and make informed decisions.</p>
          <a href="#signup" className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">Sign Up Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Legal Decision-Making System. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
