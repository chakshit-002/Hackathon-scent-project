import React, { useState, useLayoutEffect, useRef } from "react";
import { saveUser } from "../utils/auth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";


const Register = () => {
  const location = useLocation();
  const hasScrolledToTop = useRef(false);

  useLayoutEffect(() => {
    if (location.pathname === "/register" && !hasScrolledToTop.current) {
      window.scrollTo({ top: 0, behavior: "instant" });
      hasScrolledToTop.current = true;
    }
  }, [location.pathname]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    saveUser({ email, password });
    toast.success("Registration successful!");
    navigate("/login");
  };

  return (
    // <div

    //   className="flex justify-center items-center min-h-screen bg-center text-white px-4"
    // >
    //   <form
    //     onSubmit={handleRegister}
    //     className="bg-[#141a21] relative h-[390px]  text-white p-8 rounded-xl w-full max-w-md lg:max-w-xl lg:p-12 shadow-xl"
    //   >

    //     <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

    //     {/* Email Input */}
    //     <div className="relative mb-6">
    //       <input
    //         type="email"
    //         id="email"
    //         className="peer w-full px-3 pt-5 pb-2 border border-gray-400 rounded bg-transparent text-sm placeholder-transparent focus:outline-none focus:border-green-400"
    //         placeholder="Email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //       <label
    //         htmlFor="email"
    //         className="absolute left-3 top-2 text-xs text-gray-300 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-green-300"
    //       >
    //         Email
    //       </label>
    //     </div>

    //     {/* Password Input */}
    //     <div className="relative mb-6">
    //       <input
    //         type={showPassword ? "text" : "password"}
    //         id="password"
    //         className="peer w-full px-3 pt-5 pb-2 border border-gray-400 rounded bg-transparent text-sm placeholder-transparent focus:outline-none focus:border-green-400"
    //         placeholder="Password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //       <label
    //         htmlFor="password"
    //         className="absolute left-3 top-2 text-xs text-gray-300 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-green-300"
    //       >
    //         Password
    //       </label>

    //       {/* Toggle Show/Hide Password */}
    //       <button
    //         type="button"
    //         onClick={() => setShowPassword((prev) => !prev)}
    //         className="absolute right-3 top-3 text-sm text-gray-400 hover:text-gray-200 focus:outline-none"
    //       >
    //         {showPassword ? "Hide" : "Show"}
    //       </button>
    //     </div>

    //     <button
    //       type="submit"
    //       className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300 font-semibold"
    //     >
    //       Register
    //     </button>

    //     <div className="text-center text-sm mt-4">
    //       Already registered?{" "}
    //       <Link
    //         to="/login"
    //         className="text-blue-500 underline hover:text-blue-300"
    //       >
    //         Login
    //       </Link>
    //     </div>
    //   </form>
    // </div>
    <div

      className="flex font-[cinzel] justify-center items-center min-h-screen bg-center text-[#181817] px-4 bg-gradient-to-t from-[#f8f7ec] to-[#cdf0ff]"
    >
      <form
        onSubmit={handleRegister}
        className=" relative h-[390px]  text-[#181817] p-8 rounded-xl w-full max-w-md lg:max-w-xl lg:p-12 shadow-xl"
      >

        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        {/* Email Input */}
        <div className="relative mb-6 text-[#181817]">
          <input
            type="email"
            id="email"
            className="peer w-full px-3 pt-5 pb-2 border border-gray-400 rounded bg-transparent text-sm placeholder-transparent focus:outline-none focus:border-[#181817]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-2 text-xs text-gray-300 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#181817]"
          >
            Email
          </label>
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="peer w-full px-3 pt-5 pb-2 border border-gray-400 rounded bg-transparent text-sm placeholder-transparent focus:outline-none focus:border-[#181817]"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label
            htmlFor="password"
            className="absolute left-3 top-2 text-xs text-[#181817] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#181817]"
          >
            Password
          </label>

          {/* Toggle Password */}
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-3 text-sm text-gray-400 hover:text-gray-200 focus:outline-none"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#e56138] text-white p-2 rounded hover:bg-green-600 transition duration-300 font-semibold"
        >
          Register
        </button>

        {/* Inside form */}
        <div className="text-center text-sm mt-4">
          Already registered ?{" "}
          <Link
            to="/login"
            className="text-blue-600 underline hover:text-blue-300"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;