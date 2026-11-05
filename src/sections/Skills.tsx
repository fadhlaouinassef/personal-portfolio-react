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
		const media = gsap.matchMedia();
		media.add("(min-width: 1025px) and (prefers-reduced-motion: no-preference)", () => {
			const distance = () => Math.max(0, track.scrollWidth - section.clientWidth);
			gsap.to(track, {
				x: () => -distance(), ease: "none",
				scrollTrigger: {
					trigger: section, start: "top top", end: () => `+=${distance()}`,
					pin: true, scrub: 0.6, invalidateOnRefresh: true,
				},
			});
		});
		const refresh = requestAnimationFrame(() => ScrollTrigger.refresh());
		return () => { cancelAnimationFrame(refresh); media.revert(); };
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
