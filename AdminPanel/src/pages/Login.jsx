import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Email = "sattva@admin";
    const Password = "sattva2025";
    if(email === Email && password === Password){
       navigate('/home')
    }else{
        alert("Invalid Email or Password");
    }
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">SATTVA</h1>
          <p className="text-indigo-200">Admin Panel</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-indigo-100 mb-2">
                Email Address
              </label>
              <div className="relative">
                
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-4 py-2 bg-white/5 border border-indigo-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white placeholder-indigo-300"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-indigo-100 mb-2">
                Password
              </label>
              <div className="relative">
                
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-4 py-2 bg-white/5 border border-indigo-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white placeholder-indigo-300"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            

            <button
              type="submit"
              className="cursor-pointer w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;