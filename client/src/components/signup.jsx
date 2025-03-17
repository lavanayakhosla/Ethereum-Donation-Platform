const SignUp = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">SignUp</h2>
          <form className="space-y-4">
          <h2 className="text-lg font-bold">Name</h2>
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full p-2 border rounded-md"
            />
            <h2 className="text-lg font-bold">Email</h2>
            <input
              type="email"
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
            <h2 className="text-lg font-bold">Confirm Password</h2>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm your password"
              className="w-full p-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Already have an account? <a href="./Login" className="text-green-600">Login</a>
          </p>
        </div>
      </div>
    );
  };
  
  export default SignUp;