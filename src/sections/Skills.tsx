import SkillsSlider from "../components/SkillsSlider";
import SkillsTitle from "../components/SkillsTitle";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		const section = sectionRef.current;
		const track = trackRef.current;
		if (!section || !track) return;
		const navbar = document.querySelector("nav");
		let navbarHeight = 0;
		const measureNavbar = () => {
			const height = Math.ceil(navbar?.getBoundingClientRect().height ?? 0);
			if (height === navbarHeight) return false;
			navbarHeight = height;
			section.style.setProperty("--skills-nav-height", `${height}px`);
			return true;
		};
		measureNavbar();
		const navbarObserver = new ResizeObserver(() => {
			if (measureNavbar()) ScrollTrigger.refresh();
		});
		if (navbar) navbarObserver.observe(navbar);
		const media = gsap.matchMedia();
		media.add("(min-width: 1025px) and (prefers-reduced-motion: no-preference)", () => {
			const distance = () => Math.max(0, track.scrollWidth - section.clientWidth);
			gsap.to(track, {
				x: () => -distance(), ease: "none",
				scrollTrigger: {
					trigger: section, start: () => `top ${navbarHeight}px`, end: () => `+=${distance()}`,
					// Keep the pinned viewport independent of ScrollSmoother's transformed content.
					pin: true, pinReparent: true, pinType: "fixed",
					scrub: 0.6, invalidateOnRefresh: true,
				},
			});
		});
		const refresh = requestAnimationFrame(() => ScrollTrigger.refresh());
		return () => {
			cancelAnimationFrame(refresh);
			navbarObserver.disconnect();
			media.revert();
			section.style.removeProperty("--skills-nav-height");
		};
	}, { scope: sectionRef });

	return (
		<section ref={sectionRef} id="skills" className="skills-section skills-showcase">
			<div ref={trackRef} className="skills-track">
				<div className="skills-heading">
					<SkillsTitle />
				</div>
				<SkillsSlider />
			</div>
		</section>
	);
};

export default Skills;
