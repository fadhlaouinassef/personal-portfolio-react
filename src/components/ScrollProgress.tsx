import { useEffect, useState } from "react";

const ScrollProgress = () => {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const updateScrollProgress = () => {
			const scrollPx = document.documentElement.scrollTop;
			const winHeightPx =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const scrolled = (scrollPx / winHeightPx) * 100;
			setScrollProgress(scrolled);
		};

		window.addEventListener("scroll", updateScrollProgress);
		return () => window.removeEventListener("scroll", updateScrollProgress);
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full h-1 bg-gray-200/30 z-[9999] backdrop-blur-sm">
			<div
				className="h-full bg-gradient-to-r from-yellow-brown via-light-brown to-mid-brown transition-all duration-150 ease-out shadow-lg"
				style={{ width: `${scrollProgress}%` }}
			/>
		</div>
	);
};

export default ScrollProgress;
