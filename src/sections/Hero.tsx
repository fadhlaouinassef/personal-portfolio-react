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
  { name: "Django", icon: "django" },
  { name: "Three.js", icon: "threejs" },
  { name: "TensorFlow", icon: "tensorflow" },
  { name: "Git", icon: "git" },
  { name: "Python", icon: "python" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "C/C++", icon: "cpp" },
  { name: "PHP", icon: "php" },
  { name: "MySQL", icon: "mysql" }
];

const skillIcons: Record<string, React.ReactNode> = {
  django: (
    <svg className="w-5 h-5 text-[#092e20]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.67 2c-5.14 0-9.33 4.19-9.33 9.33s4.19 9.33 9.33 9.33c.84 0 1.66-.11 2.45-.33l-.53-1.92c-.62.16-1.26.25-1.92.25-4.05 0-7.33-3.28-7.33-7.33S7.62 4 11.67 4c2.81 0 5.25 1.58 6.47 3.89l1.83-.87C18.25 4.18 15.19 2 11.67 2zm6.27 7.02v2.79c0 .7-.14 1.25-.43 1.66-.29.4-.73.61-1.32.61-.59 0-1.02-.2-1.31-.61-.29-.41-.43-.96-.43-1.66V9.02h-1.92v2.79c0 1.24.34 2.21 1.01 2.92.67.71 1.55 1.06 2.65 1.06 1.1 0 1.98-.35 2.65-1.06.67-.71 1.01-1.68 1.01-2.92V9.02h-1.91zM9.47 9.02v4.86c0 1.24-.34 2.21-1.01 2.92-.67.71-1.55 1.06-2.65 1.06s-1.98-.35-2.65-1.06c-.67-.71-1.01-1.68-1.01-2.92V9.02h1.91v4.86c0 .7.14 1.25.43 1.66.29.4.73.61 1.32.61.59 0 1.02-.2 1.31-.61.29-.41.43-.96.43-1.66V9.02h-1.92z"/>
    </svg>
  ),
  threejs: (
    <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 19H5.5L12 6.5z"/>
    </svg>
  ),
  tensorflow: (
    <svg className="w-5 h-5 text-[#FF6F00]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5l6.5 3.6v7.2L12 18.9l-6.5-3.6V8.1L12 4.5z"/>
    </svg>
  ),
  git: (
    <svg className="w-5 h-5 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.55 11.85L12.15.45c-.6-.6-1.5-.6-2.1 0L8.85 1.65l3.15 3.15c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l3.15 3.15c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.5l-3.15-3.15c-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3L8.4 11.85c-.2-.2-.3-.5-.3-.8 0-.3.1-.6.3-.8l3.15-3.15-3.15-3.15-6.9 6.9c-.6.6-.6 1.5 0 2.1l11.4 11.4c.6.6 1.5.6 2.1 0l11.4-11.4c.7-.6.7-1.5.1-2.1z"/>
    </svg>
  ),
  python: (
    <svg className="w-5 h-5 text-[#3776AB]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1.5 3h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3c-.83 0-1.5-.67-1.5-1.5S9.67 5 10.5 5zm4.5 12h-6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
    </svg>
  ),
  javascript: (
    <svg className="w-5 h-5 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
      <rect width="24" height="24" rx="4"/>
      <text x="5" y="17" fontFamily="sans-serif" fontWeight="900" fontSize="13" fill="black">JS</text>
    </svg>
  ),
  typescript: (
    <svg className="w-5 h-5 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
      <rect width="24" height="24" rx="4"/>
      <text x="5" y="17" fontFamily="sans-serif" fontWeight="900" fontSize="13" fill="white">TS</text>
    </svg>
  ),
  cpp: (
    <svg className="w-5 h-5 text-[#00599C]" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="#00599C"/>
      <text x="3.5" y="15" fontFamily="sans-serif" fontWeight="bold" fontSize="9" fill="white">C++</text>
    </svg>
  ),
  php: (
    <svg className="w-5 h-5 text-[#777BB4]" viewBox="0 0 24 24" fill="currentColor">
      <ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4"/>
      <text x="6" y="15" fontFamily="sans-serif" fontWeight="bold" fontSize="9" fill="white">php</text>
    </svg>
  ),
  mysql: (
    <svg className="w-5 h-5 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="#00758F"/>
      <text x="3.5" y="15" fontFamily="sans-serif" fontWeight="bold" fontSize="8" fill="white">SQL</text>
    </svg>
  )
};

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

	const duplicatedDomains = [...domains, ...domains, ...domains];
	const duplicatedSkills = [...skills, ...skills, ...skills];

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
					<div className="w-full overflow-hidden flex select-none py-4 border-y border-[#e8d1bb]/40 bg-[#fff7ef]/70 backdrop-blur-sm">
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
					<div className="w-full overflow-hidden flex select-none py-3 border-b border-[#e8d1bb]/40 bg-[#fff7ef]/70 backdrop-blur-sm">
						<div className="marquee-right-scroll flex items-center gap-6 pr-6">
							{duplicatedSkills.map((skill, idx) => (
								<div key={`sk-1-${idx}`} className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-[0_6px_18px_rgba(31,27,26,0.08)] border border-[#eadac6]/40 flex-none">
									{skillIcons[skill.icon]}
									<span className="font-paragraph font-semibold text-[#1f1b1a] text-sm md:text-base">{skill.name}</span>
								</div>
							))}
						</div>
						<div className="marquee-right-scroll flex items-center gap-6 pr-6" aria-hidden="true">
							{duplicatedSkills.map((skill, idx) => (
								<div key={`sk-2-${idx}`} className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-[0_6px_18px_rgba(31,27,26,0.08)] border border-[#eadac6]/40 flex-none">
									{skillIcons[skill.icon]}
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
