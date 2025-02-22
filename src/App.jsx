import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const App = () => {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-purple-600 text-white">
      <div className="relative w-96 bg-white text-gray-900 p-8 rounded-xl shadow-lg">
        {/* Toggle between Login & Register */}
        <h2 className="text-2xl font-bold text-center mb-6">{open ? "Register" : "Login"}</h2>

        <form className="flex flex-col space-y-4">
          {open && (
            <div className="relative">
              <input
                className="border border-gray-300 w-full rounded-lg py-2 px-4 pl-10 bg-gray-100 focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
                type="text"
              />
              <FaUser className="absolute left-3 top-3 text-gray-500" />
            </div>
          )}

          <div className="relative">
            <input
              className="border border-gray-300 w-full rounded-lg py-2 px-4 pl-10 bg-gray-100 focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              type="email"
            />
            <MdEmail className="absolute left-3 top-3 text-gray-500" />
          </div>

          <div className="relative">
            <input
              className="border border-gray-300 w-full rounded-lg py-2 px-4 pl-10 pr-10 bg-gray-100 focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            />
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {open && (
            <div className="relative">
              <input
                className="border border-gray-300 w-full rounded-lg py-2 px-4 pl-10 pr-10 bg-gray-100 focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
              />
              <FaLock className="absolute left-3 top-3 text-gray-500" />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          )}

          {!open && (
            <div className="flex justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-500" />
                <span>Remember Me</span>
              </label>
              <span className="cursor-pointer text-blue-600 hover:underline">Forgot Password?</span>
            </div>
          )}

          <button className="mt-4 py-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            {open ? "Register" : "Login"}
          </button>

          <p className="text-sm text-center text-gray-700">
            {open ? "Already have an account?" : "Don't have an account?"}
            <span
              className="font-semibold text-blue-600 cursor-pointer ml-1 hover:underline"
              onClick={() => setOpen(!open)}
            >
              {open ? "Login" : "Register"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default App;
