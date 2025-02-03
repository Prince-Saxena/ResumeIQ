import React from "react";
import { HeroSection } from "../index.js";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { use } from "react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	useEffect(() => {
		gsap.fromTo(
			".sec",
			{
				opacity: 0,
				y: -30,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				scrollTrigger: {
					trigger: ".sec",
					start: "top 70%",
					end: "top 40%",
					scrub: 1,
					// markers: true,
				},
			}
		);
		gsap.fromTo(
			".cards div",
			{
				y: "30%",
				opacity: 0,
			},
			{
				y: "0%",
				opacity: 1,
				stagger: 0.2,
				ease: "none",
				scrollTrigger: {
					trigger: ".cards",
					start: "top 60%",
					end: "top 45%",
					scrub: 1,
					// markers: true,
				},
			}
		);
		gsap.fromTo(
			".h2",
			{ y:"60%",marginLeft:"0",opacity:0 },
			{
				opacity: 1,
				marginLeft:"5%",
				y: "0%",
				ease: "none",
				scrollTrigger: { trigger: ".cards", start: "top 60%", end: "top 45%", scrub: 1 },
			}
		);
	}, []);
	return (
		<div className=" mx-auto bg-transparent pt-3 page">
			{/* Hero Section */}
			<HeroSection />

			{/* Features Section */}
			<section className="py-12 bg-white text-gray-800 sec">
				<h2 className="text-5xl font-bold ml-3 text-indigo-700 mb-10 fade-in-up h2">
					Why Choose Us
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 cards">
					{["Easy to Use", "Downloadable Formats", "Instant Download"].map(
						(feature, index) => (
							<div
								key={index}
								className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl "
							>
								<h3 className="text-xl font-semibold text-indigo-600 mb-3">
									{feature}
								</h3>
								<p className="text-gray-600">
									{index === 0
										? "A seamless experience to create a professional resume within minutes."
										: index === 1
										? "Export your resume in multiple formats like PDF and DOCX effortlessly."
										: "Get your resume instantly—no waiting, just download and use!"}
								</p>
							</div>
						)
					)}
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="text-center py-16  text-gray-800">
				<h2 className="text-3xl font-bold mb-6 text-violet-700">
					Start Building Your Resume Today
				</h2>
				<p className="text-lg text-gray-600 mb-6">
					Join thousands of users who have successfully built their resumes!
				</p>
				<Link
					to="/signin"
					className="bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold shadow-md hover:bg-indigo-700 hover:scale-105 transition-all duration-300 ease-in-out"
				>
					Get Started
				</Link>
			</section>

			{/* Footer Section */}
			<footer className="py-8	 text-gray-800 text-center">
				<p className="text-gray-700 font-medium">⚡ Powered by Prince Saxena</p>
				<p className="text-indigo-600 text-lg font-semibold">
					ResumeIQ | Elevate Your Career
				</p>
			</footer>
		</div>
	);
};

export default Home;
