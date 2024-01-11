import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';

const API_URL = "http://localhost:5000/api/users/login"; // Update with your actual login endpoint

function LawyerLogin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, loginData);

      if (response.status === 200) {
        const data = response.data;

        // Save the token securely (e.g., in local storage)
        localStorage.setItem('yourTokenKey', data.token);

        // Redirect to the dashboard or any other page after successful login
        navigate('/Lawyerdashboard');
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      console.error('Error response:', error.response);

      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      {/* Your login form JSX */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 rounded-b-lg h-[100px]"></div>
      <img className="px-3 mt-4" src="/images/divider.svg" alt="" />
      <div className="grid grid-flow-col gap-9 items-center">
        <div className="flex flex-col">
          <div className="rounded-md w-70% px-[140px] mt-20 ">
            <div className="border-b border-stroke pb-2 px-6.5 border-strokedark">
              <h3 className="text-blue-900 font-extrabold text-[36px] mb-8">
                Lawyer Login
              </h3>
            </div>
            <form onSubmit={handleLogin}>
              <div className="p-6.5">
                <div className="mb-8">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    required
                    placeholder="Enter your email address"
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition active:border-primary disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input focus:border-blue-500"
                  />
                </div>

                <div className="mb-8">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    required
                    placeholder="Enter password"
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-blue-500 active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:focus:border-blue-500"
                  />
                </div>

                <button
                  className="flex w-full justify-center text-white rounded-md bg-blue-900 p-3 mt-6 font-medium"
                  type="submit"
                >
                  Login
                </button>

                {error && <div className="text-red-500 mt-4">{error}</div>}

                <p>
                  Don't have an account? <Link to="/LawyerRegister">Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LawyerLogin;
