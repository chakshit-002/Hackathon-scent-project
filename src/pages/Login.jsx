import React, { useState, useLayoutEffect, useRef } from "react";
import { getUser, login } from "../utils/auth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";



const Login = () => {
    const location = useLocation();
    const hasScrolledToTop = useRef(false);
    const [showPassword, setShowPassword] = useState(false);

    useLayoutEffect(() => {
        if (location.pathname === "/login" && !hasScrolledToTop.current) {
            window.scrollTo({ top: 0, behavior: "instant" });
            hasScrolledToTop.current = true;
        }
    }, [location.pathname]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const savedUser = getUser();

        if (!savedUser || !savedUser.email || !savedUser.password) {
            toast.error("User not registered!");
            return;
        }

        if (savedUser.email !== email || savedUser.password !== password) {
            toast.error("Invalid email or password!");
            return;
        }

        login();
        toast.success("Login successful!");
        navigate("/products");
    };

    return (
        <div
            
            className="flex font-[cinzel] justify-center items-center min-h-screen bg-center text-[#181817] px-4 bg-gradient-to-t from-[#f8f7ec] to-[#cdf0ff]"
        >
            <form
                onSubmit={handleLogin}
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
                    Login
                </button>

                {/* Inside form */}
                <div className="text-center text-sm mt-4">
                    Not registered yet?{" "}
                    <Link
                        to="/register"
                        className="text-blue-600 underline hover:text-blue-300"
                    >
                        Register
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;