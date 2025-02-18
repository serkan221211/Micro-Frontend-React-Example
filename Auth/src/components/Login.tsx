const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-16 rounded shadow-2xl w-96">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Login</h2>
        <form>
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
              placeholder=" Enter Email Address"
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
              placeholder=" Enter Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold p-3 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
