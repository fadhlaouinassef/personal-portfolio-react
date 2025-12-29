/** biome-ignore-all lint/style/noNonNullAssertion: ANIMATION */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { skillCategories } from "../constants";

const SkillsSlider = () => {
	const sliderRef = useRef<HTMLDivElement | null>(null);

	const isTablet = useMediaQuery({
		query: "(max-width: 1024px)",
	});

	useGSAP(() => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
		const scrollAmount = sliderRef?.current?.scrollWidth! - window.innerWidth;

		if (!isTablet) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".skills-section",
					start: "2% top",
					end: `+=${scrollAmount + 1500}px`,
					scrub: true,
					pin: true,
				},
			});

			tl.to(".skills-section", {
				x: `-${scrollAmount + 1500}px`,
				ease: "power1.inOut",
			});
		}

		const titleTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".skills-section",
				start: "top top",
				end: "bottom 80%",
				scrub: true,
			},
		});

		titleTl
			.to(".first-text-split", {
				xPercent: -30,
				ease: "power1.inOut",
			})
			.to(
				".skills-text-scroll",
				{
					xPercent: -22,
					ease: "power1.inOut",
				},
				"<",
			)
			.to(
				".second-text-split",
				{
					xPercent: -10,
					ease: "power1.inOut",
				},
				"<",
			);
	});

	return (
		<div ref={sliderRef} className="slider-wrapper">
			<div className="flavors">
				{skillCategories.map((category) => (
					<div
						key={category.name}
						className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${category.rotation}`}
					>
						<img
							src={`/images/${category.color}-bg.svg`}
							alt={category.color}
							className="absolute inset-0 w-full h-full object-cover"
						/>

						<div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center z-10">
							<h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">
								{category.name}
							</h1>
							<div className="space-y-2">
								{category.skills.map((skill) => (
									<div
										key={skill}
										className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm md:text-base"
									>
										{skill}
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillsSlider;