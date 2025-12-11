import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, lazy, Suspense } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";

const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Message = lazy(() => import("./sections/Message"));
const Experience = lazy(() => import("./sections/Experience"));
const Education = lazy(() => import("./sections/Education"));

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useGSAP(() => {
		if (!isLoading) {
			ScrollSmoother.create({
				smooth: 1.5, // Reduced from 3 for better performance
				effects: true,
			});
		}
	}, [isLoading]);

	const handleLoadComplete = () => {
		setIsLoading(false);
	};

	return (
		<>
			{isLoading && <Loader onComplete={handleLoadComplete} />}
			<CustomCursor />
			<main>
				<Navbar />
				<div id="smooth-wrapper">
					<div id="smooth-content">
						<Hero />
						<Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
							<Message />
							<Skills />
							<Experience />
							<div>
								<Projects />
								<Education />
							</div>
						</Suspense>
						<Footer />
					</div>
				</div>
			</main>
		</>
	);
};

export default App;
