import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext.jsx";

import { SignIn } from "../index.js";

const HeroSection = () => {
	const { user } = useUser();

	return (
		<section className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
			{/* Gradient Effect */}
			<div className="fixed top-[-200px] left-1/2 transform -translate-x-1/2 w-[600px] h-[300px]  bg-gradient-to-b from-blue-900 to-transparent opacity-70 blur-3xl shadow-[0px_0px_200px_100px_rgba(128,90,213,0.5)]"></div>

			{/* Main Content */}
			<div className="text-center z-10 px-4">
				<h1 className="text-4xl hero-text sm:text-6xl font-bold text-purple-600">
					Build Your Professional Resume!{" "}
				</h1>
				<p className="text-lg sm:text-xl text-gray-500 mt-4">
					Create a standout resume in minutes and unlock your career potential.
				</p>

				{/* Buttons */}
				<div className="mt-8 flex space-x-4 justify-center">
					<Link
						to="about"
						className="px-6 py-2 bg-white border border-gray-300 text-gray-600 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
					>
						Learn More
					</Link>
					<Link
						to={user ? "dashboard" : "signin"}
						className="px-6 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition-all duration-300"
					>
						Get Started
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
