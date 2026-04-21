/** biome-ignore-all lint/suspicious/noArrayIndexKey: ANIMATION */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { experienceList } from "../constants";

const Experience = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const [experiences, setExperiences] = useState(experienceList);
	
	useEffect(() => {
		if (isMobile) {
			setExperiences(experienceList.slice(0, 2));
		} else {
			setExperiences(experienceList);
		}
	}, [isMobile]);

	useGSAP(() => {
		const titleSplit = SplitText.create(".experience-title", {
			type: "chars",
		});
		const paragraphSplit = SplitText.create(".experience-section p", {
			type: "words, lines",
			linesClass: "paragraph-line",
		});
		const contentTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".experience-section",
				start: "top center",
			},
		});
		contentTl
			.from(titleSplit.chars, {
				yPercent: 100,
				stagger: 0.02,
				ease: "power2.out",
			})
			.from(paragraphSplit.words, {
				yPercent: 300,
				rotate: 3,
				ease: "power1.inOut",
				duration: 1,
				stagger: 0.01,
			});
		const titleTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".experience-section",
				start: "top 80%",
			},
		});
		titleTl.to(".experience-text-scroll", {
			duration: 1,
			opacity: 1,
			clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
			ease: "power1.inOut",
		});
	});

	return (
		<section id="experience" className="experience-section py-20 md:py-28">
			<img
				src="/images/slider-dip.png"
				alt="background"
				className="w-full object-cover"
				loading="lazy"
			/>
			<img 
				src="/images/Nassef.png" 
				alt="nassef-profile" 
				className="big-img opacity-10 grayscale-[20%] brightness-75"
				loading="lazy"
			/>
			<div className="flex md:flex-row flex-col md:px-10 px-5 mt-14 md:mt-0 gap-8">
				<div className="md:w-1/4 w-full relative inline-block md:translate-y-20">
					<div className="relative flex flex-col justify-center items-start gap-4 md:text-6xl text-4xl font-bold uppercase tracking-tight">
						<div className="overflow-hidden">
							<h1 className="experience-title">Mon parcours</h1>
						</div>
						<div
							style={{
								clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
							}}
							className="experience-text-scroll"
						>
							<div className="bg-yellow-brown pb-2 md:pt-0 pt-2 md:px-4 px-2 inline-block">
								<h2 className="text-milk-yellow">Professionnel</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="md:w-3/4 w-full flex flex-col gap-12">
					<div className="w-full">
						<div className="flex flex-col gap-8">
							{experiences.map((exp, index) => (
								<div key={index} className="group relative flex-1 text-center w-full">
									<div className="space-y-3 p-6 bg-white/75 rounded-2xl backdrop-blur-sm border border-[#eadac6] shadow-[0_10px_26px_rgba(34,33,35,0.09)] hover:bg-white hover:shadow-[0_16px_36px_rgba(34,33,35,0.14)] hover:scale-[1.015] transition-all duration-300">
										<div className="flex md:flex-row flex-col justify-between items-start gap-4">
											<div className="text-left">
												<p className="md:text-xl text-lg font-bold text-[#2e2a33]">{exp.title}</p>
												<p className="font-paragraph text-base font-semibold text-[#7f3b2d]">{exp.company}</p>
											</div>
											<div className="flex flex-col md:items-end items-start gap-2">
												<p className="text-sm text-[#5f5564] bg-[#f2e8d8] px-3 py-1 rounded-full inline-block">{exp.period}</p>
												<span className="inline-block px-3 py-1 bg-[#7f3b2d]/15 text-[#7f3b2d] text-sm rounded-full font-medium">
													{exp.type}
												</span>
											</div>
										</div>
										<p className="text-sm md:text-base font-paragraph text-balance leading-relaxed text-[#4f4656] text-left mt-4">
											{exp.description}
										</p>

										{/* Decorative gradient bar */}
										<div className="mt-6 h-1 w-full bg-gradient-to-r from-yellow-brown via-light-brown to-mid-brown rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;