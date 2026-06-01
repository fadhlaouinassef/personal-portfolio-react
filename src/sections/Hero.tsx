import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const domains = [
  "DATA SCIENCE & NLP",
  "COMPUTER VISION",
  "AI ENGINEER",
  "DÉVELOPPEMENT FULL STACK",
  "GÉNIE LOGICIEL",
  "ARCHITECTURE APPS"
];

const skills = [
	{ name: ".NET", logo: ".net" },
	{ name: "C/C++", logo: "c++" },
	{ name: "Express", logo: "express" },
	{ name: "Git", logo: "git" },
	{ name: "Java", logo: "java" },
	{ name: "JavaScript", logo: "js" },
	{ name: "Laravel", logo: "laravel" },
	{ name: "MongoDB", logo: "mongodb" },
	{ name: "MySQL", logo: "mysql" },
	{ name: "n8n", logo: "n8n" },
	{ name: "Node.js", logo: "node" },
	{ name: "PostgreSQL", logo: "postgresql" },
	{ name: "Python", logo: "python" },
	{ name: "React", logo: "react" },
	{ name: "Spring Boot", logo: "springboot" },
	{ name: "Symfony", logo: "symfony" },
	{ name: "TensorFlow", logo: "tensorflow" },
	{ name: "Three.js", logo: "threejs" },
	{ name: "TypeScript", logo: "ts" }
];

const Hero = () => {
	useGSAP(() => {
		const tl = gsap.timeline({
			delay: 0.2,
		});

		tl.fromTo(".marquee-container-wrapper", {
			opacity: 0,
			y: -40,
		}, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: "power2.out",
		})
		.fromTo(".hero-card", {
			opacity: 0,
			y: 60,
			scale: 0.97,
		}, {
			opacity: 1,
			y: 0,
			scale: 1,
			duration: 1.2,
			ease: "power3.out",
		}, "-=0.4");

		const heroTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".hero-container",
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
		});
		heroTl.to(".hero-card", {
			scale: 0.95,
			yPercent: 12,
			ease: "power1.inOut",
		});
	});

	const duplicatedDomains = [...domains, ...domains];
	const duplicatedSkills = [...skills, ...skills];

	return (
		<section className="bg-main-bg">
			<div className="hero-container">
				<div className="hero-grid absolute inset-0 pointer-events-none"></div>
				<div className="hero-orb absolute -top-16 -left-24 w-72 h-72 rounded-full bg-[#e07d2c]/40"></div>
				<div className="hero-orb absolute top-10 -right-10 w-80 h-80 rounded-full bg-[#9c5c2f]/30"></div>
				{/* Header Card Layout */}
				<div className="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10 mb-12">
					<div className="hero-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 rounded-[2.5rem]">
						{/* Left Column: Infos */}
						<div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1f1b1a] text-[#f6eadb] rounded-full text-[0.7rem] font-semibold uppercase tracking-[0.3em] mb-6">
								<span className="w-2.5 h-2.5 rounded-full bg-[#f6eadb] animate-pulse"></span>
								Disponible pour de nouvelles opportunités
							</div>
							
							<h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-[#1f1b1a] leading-[0.9] mb-4 uppercase tracking-[0.08em]">
								Nassef Fadhlaoui
							</h1>
							
							<p className="text-[#c86b2a] font-paragraph text-lg md:text-xl font-semibold mb-6 uppercase tracking-[0.2em]">
								Développeur Full Stack & Étudiant Ingénieur
							</p>
							
							<p className="font-paragraph text-[#3e3430] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
								Étudiant ingénieur passionné par la création d'applications modernes et performantes, avec une solide expertise en développement web et génie logiciel.
							</p>
							
							<div className="flex flex-wrap gap-4">
								<a
									href="#experience"
									className="px-8 py-3.5 bg-[#1f1b1a] hover:bg-[#c86b2a] text-[#f6eadb] rounded-full font-bold transition-all duration-300 shadow-[0_12px_30px_rgba(31,27,26,0.2)] text-sm md:text-base flex items-center justify-center"
								>
									Découvrir mon parcours
								</a>
								<a
									href="mailto:nassef.fadhlaoui@esprit.tn"
									className="px-8 py-3.5 border-2 border-[#1f1b1a] hover:bg-[#1f1b1a] hover:text-[#f6eadb] text-[#1f1b1a] rounded-full font-bold transition-all duration-300 text-sm md:text-base flex items-center justify-center"
								>
									Me contacter
								</a>
							</div>
						</div>

						{/* Right Column: Image Frame */}
						<div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
							<div className="relative w-full max-w-sm aspect-square bg-[#f6eadb] rounded-[2.5rem] border border-[#e8d1bb] overflow-hidden group shadow-[0_20px_50px_rgba(52,35,25,0.2)] flex justify-center items-end">
								{/* Decorative glowing background elements */}
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full bg-gradient-to-tr from-[#c86b2a]/25 to-[#d4a05c]/25 blur-2xl opacity-70"></div>
								<div className="absolute inset-0 ring-1 ring-[#1f1b1a]/5 rounded-[2.5rem]"></div>
								
								<img
									src="/images/Nassef.png"
									className="relative z-10 w-full h-full object-contain max-h-[90%] scale-[1.08] origin-bottom transition-transform duration-500 group-hover:scale-[1.12]"
									alt="nassef-profile"
									fetchPriority="high"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Double Scrolling Marquee Component - BELOW Header */}
				<div className="marquee-container-wrapper w-full flex flex-col gap-4 mt-4 z-20">
					{/* Top Line: Domains scrolling left */}
					<div className="w-full overflow-hidden flex select-none py-4 border-y border-[#e8d1bb]/40 bg-transparent">
						<div className="marquee-left-scroll flex items-center gap-16 pr-16">
							{duplicatedDomains.map((domain, idx) => (
								<div key={`dom-1-${idx}`} className="flex items-center gap-16 text-[#1f1b1a]/10 font-bold uppercase tracking-[0.2em] text-2xl md:text-4xl lg:text-5xl font-sans">
									<span>{domain}</span>
									<span className="text-[#c86b2a]/25 text-lg md:text-2xl">•</span>
								</div>
							))}
						</div>
						<div className="marquee-left-scroll flex items-center gap-16 pr-16" aria-hidden="true">
							{duplicatedDomains.map((domain, idx) => (
								<div key={`dom-2-${idx}`} className="flex items-center gap-16 text-[#1f1b1a]/10 font-bold uppercase tracking-[0.2em] text-2xl md:text-4xl lg:text-5xl font-sans">
									<span>{domain}</span>
									<span className="text-[#c86b2a]/25 text-lg md:text-2xl">•</span>
								</div>
							))}
						</div>
					</div>

					{/* Bottom Line: Skills scrolling right */}
					<div className="w-full overflow-hidden flex select-none py-3 border-b border-[#e8d1bb]/40 bg-transparent">
						<div className="marquee-right-scroll flex items-center gap-6 pr-6">
							{duplicatedSkills.map((skill, idx) => (
								<div key={`sk-1-${idx}`} className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-[0_6px_18px_rgba(31,27,26,0.08)] border border-[#eadac6]/40 flex-none">
									<img
										src={`/technologies/${skill.logo}.webp`}
										alt={`${skill.name} logo`}
										className="w-5 h-5 object-contain"
										loading="lazy"
									/>
									<span className="font-paragraph font-semibold text-[#1f1b1a] text-sm md:text-base">{skill.name}</span>
								</div>
							))}
						</div>
						<div className="marquee-right-scroll flex items-center gap-6 pr-6" aria-hidden="true">
							{duplicatedSkills.map((skill, idx) => (
								<div key={`sk-2-${idx}`} className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-[0_6px_18px_rgba(31,27,26,0.08)] border border-[#eadac6]/40 flex-none">
									<img
										src={`/technologies/${skill.logo}.webp`}
										alt={`${skill.name} logo`}
										className="w-5 h-5 object-contain"
										loading="lazy"
									/>
									<span className="font-paragraph font-semibold text-[#1f1b1a] text-sm md:text-base">{skill.name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
