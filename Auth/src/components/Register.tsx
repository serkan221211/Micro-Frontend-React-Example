const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-16 rounded shadow-2xl w-96">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Register</h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="firstName"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="lastName"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold p-3 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
