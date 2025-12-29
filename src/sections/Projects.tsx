import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { projectsList } from "../constants";

const Projects = () => {
	useGSAP(() => {
		const revealTl = gsap.timeline({
			delay: 1,
			scrollTrigger: {
				trigger: ".projects-section",
				start: "top 60%",
				end: "top top",
				scrub: 1.5,
			},
		});
		revealTl
			.to(".projects-section .first-project", {
				duration: 1,
				opacity: 1,
				ease: "circ.out",
			})
			.to(".projects-section .second-project", {
				duration: 1,
				opacity: 1,
				ease: "circ.out",
			})
			.to(".projects-section .third-project", {
				duration: 1,
				opacity: 1,
				ease: "circ.out",
			});
	});

	return (
		<section id="projects" className="projects-section">
			<div className="container mx-auto pt-20">
				<div className="col-center">
					<p className="text-center text-lg">
						Découvrez mes réalisations : <br />
						Projets développés avec passion et expertise technique
					</p>
					<div className="mt-20 col-center space-y-12">
						{projectsList.map((project, index) => (
							<div 
								key={project.title} 
								className={`w-full max-w-5xl ${index === 0 ? "first-project" : index === 1 ? "second-project" : "third-project"} opacity-0`}
							>
								<div className="mt-6 px-8 py-6 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg border-2 border-gray-200">
									<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
										<h3 className="text-xl md:text-2xl font-bold text-primary">{project.title}</h3>
										<span className="text-sm md:text-base text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
											{project.year}
										</span>
									</div>
									<p className="text-sm md:text-base text-gray-700 mb-4">
										<strong>Technologies:</strong> {project.technologies}
									</p>
									<p className="text-sm md:text-base text-gray-800 leading-relaxed">
										{project.description}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className="md:mt-10 mt-8">
						<p className="text-center">Et bien d'autres projets en cours...</p>
					</div>
				</div>
			</div>
			<div className="relative overlay-box">
				<div className="h-64 flex items-center justify-center bg-gradient-to-r from-blue-500/20 to-purple-500/20">
					<div className="text-center">
						<h3 className="text-2xl font-bold mb-4">Collaboration et Innovation</h3>
						<p className="max-w-md mx-auto">
							Chaque projet est une opportunité d'apprendre, d'innover et de créer 
							des solutions qui font la différence.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;