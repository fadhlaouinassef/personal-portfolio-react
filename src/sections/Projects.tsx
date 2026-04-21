import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { projectsList } from "../constants";

const Projects = () => {
	useGSAP(() => {
		gsap.fromTo(
			".project-card",
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				duration: 0.9,
				ease: "power3.out",
				stagger: 0.12,
				scrollTrigger: {
					trigger: ".projects-grid",
					start: "top 75%",
				},
			},
		);
	});

	return (
		<section id="projects" className="projects-section bg-[#f6f1e8] py-24 md:py-32">
			<div className="container mx-auto px-5 md:px-10">
				<div className="max-w-3xl mx-auto text-center mb-14">
					<p className="text-sm uppercase tracking-[0.18em] text-[#7f3b2d]">Projets</p>
					<h2 className="mt-3 text-4xl md:text-6xl font-bold uppercase leading-[1.05] text-[#2e2a33]">
						Réalisations récentes
					</h2>
					<p className="mt-5 text-base md:text-lg font-paragraph text-[#5f5564]">
						Une sélection de projets full stack, data et microservices, orientés qualité,
						performance et valeur utilisateur.
					</p>
				</div>

				<div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{projectsList.map((project, index) => (
						<div
							key={project.title}
							className={`project-card rounded-2xl border border-[#e7d9c8] bg-white/80 backdrop-blur-sm shadow-[0_12px_35px_rgba(34,33,35,0.08)] p-6 md:p-7 ${index % 3 === 0 ? "md:col-span-2" : ""}`}
						>
							<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
								<h3 className="text-xl md:text-2xl font-bold text-[#2e2a33]">{project.title}</h3>
								<span className="text-xs md:text-sm text-[#5f5564] bg-[#efe6d8] px-3 py-1.5 rounded-full">
									{project.year}
								</span>
							</div>
							<p className="text-sm md:text-base text-[#7f3b2d] font-semibold mb-4">
								{project.technologies}
							</p>
							<p className="text-sm md:text-base text-[#4f4656] font-paragraph leading-relaxed">
								{project.description}
							</p>
							<div className="mt-5 h-1 w-full rounded-full bg-gradient-to-r from-[#7f3b2d] via-[#d4a05c] to-[#9c5c2f] opacity-70" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;