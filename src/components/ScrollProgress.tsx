import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollProgress = () => {
	const barRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!barRef.current) return;
		const setProgress = gsap.quickSetter(barRef.current, "scaleX");
		const update = (trigger: ScrollTrigger) => setProgress(trigger.progress);
		const trigger = ScrollTrigger.create({ start: 0, end: "max", onUpdate: update, onRefresh: update });
		update(trigger);
		return () => trigger.kill();
	}, []);
	return (
		<div aria-hidden="true" className="fixed top-0 left-0 w-full h-1 bg-gray-200/30 z-[9999] pointer-events-none">
			<div ref={barRef} className="h-full w-full origin-left bg-gradient-to-r from-yellow-brown via-light-brown to-mid-brown" style={{ transform: "scaleX(0)" }} />
		</div>
	);
};

export default ScrollProgress;
