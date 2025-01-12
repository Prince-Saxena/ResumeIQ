import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
	const { user } = useUser();
	const headingRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		// Smooth scaling for the heading
		gsap.fromTo(
			headingRef.current,
			{ scale: 0.8, opacity: 0 },
			{
				scale: 1,
				opacity: 1,
				duration: 1.5,
				ease: "power3.out",
				scrollTrigger: {
					trigger: headingRef.current,
					start: "top 50%", // Animation starts when the element is near the viewport center
					end: "top 20%",
					scrub: true, // Tied to the scroll position
					markers: false, // Disable markers for a cleaner UI
				},
			}
		);

		// Fade-in and slight movement for content
		gsap.fromTo(
			contentRef.current,
			{ y: 30, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1.2,
				delay: 0.5,
				ease: "power2.out",
			}
		);
	}, []);

	return (
		<section className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
			{/* Gradient Effect */}
			<div className="fixed top-[-200px] left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-blue-900 to-transparent opacity-70 blur-3xl shadow-[0px_0px_200px_100px_rgba(128,90,213,0.5)]"></div>

			{/* Main Content */}
			<div ref={contentRef} className="text-center z-10 px-4">
				<h1
					ref={headingRef}
					className="text-4xl hero-text sm:text-6xl font-bold text-purple-600"
				>
					Build Your Professional Resume!
				</h1>
				<p className="text-lg sm:text-xl text-gray-500 mt-4">
					Create a standout resume in minutes and unlock your career potential.
				</p>

				{/* Buttons */}
				<div className="mt-8 flex space-x-4 justify-center">
					<Link
						to="about"
						className="px-6 py-2 bg-white border border-gray-300 text-gray-600 rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300"
					>
						Learn More
					</Link>
					<Link
						to={user ? "dashboard" : "signin"}
						className="px-6 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition-transform transform hover:scale-105 duration-300"
					>
						Get Started
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
