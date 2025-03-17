import React from "react"
const Login = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
          <form className="space-y-4">
          <h2 className="text-lg font-bold">Usename/Email</h2>
            <input
              type="text"
              name="email"
              required
              placeholder="John@example.com"
              className="w-full p-2 border rounded-md"
            />
            <h2 className="text-lg font-bold">Password</h2>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full p-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Don't have an account? <a href="./SignUp" className="text-blue-600">Sign up</a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Login;
  