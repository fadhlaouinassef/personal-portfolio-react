/** biome-ignore-all lint/style/noNonNullAssertion: ANIMATION */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { educationList } from "../constants";

const Education = () => {
	useGSAP(() => {
		gsap.set(".education-section", {
			marginTop: "-100vh",
		});
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".education-section",
				start: "top bottom",
				end: "200% top",
				scrub: true,
			},
		});
		tl.to(".education-section .first-title", {
			xPercent: 70,
		})
			.to(
				".education-section .sec-title",
				{
					xPercent: 25,
				},
				"<",
			)
			.to(
				".education-section .third-title",
				{
					xPercent: -50,
				},
				"<",
			);
		const pinTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".education-section",
				start: "10% top",
				end: "200% top",
				scrub: 1.5,
				pin: true,
			},
		});
		pinTl.from(".edu-card", {
			yPercent: 150,
			stagger: 0.2,
			ease: "power1.inOut",
		});
	});

	return (
		<section id="education" className="education-section">
			<div className="absolute size-full flex flex-col items-center pt-[5vw]">
				<h1 className="text-black first-title">Mon</h1>
				<h1 className="text-light-brown sec-title">Parcours</h1>
				<h1 className="text-black third-title">Académique</h1>
			</div>
			<div className="pin-box">
				{educationList.map((edu, index) => (
					<div
						key={index}
						className={`edu-card ${index % 2 === 0 ? 'translate-y-[5%]' : 'translate-y-[10%]'} ${
							index % 2 === 0 ? 'rotate-[-5deg]' : 'rotate-[3deg]'
						}`}
					>
						<div className="size-full bg-gradient-to-br from-white to-gray-100 p-8 rounded-lg shadow-lg flex flex-col justify-center">
							<div className="text-center space-y-4">
								<h3 className="text-2xl font-bold text-primary">{edu.degree}</h3>
								<h4 className="text-lg font-semibold text-gray-700">{edu.school}</h4>
								<p className="text-gray-600">{edu.period}</p>
								<p className="text-sm text-gray-500">{edu.location}</p>
								<div className="mt-4 p-3 bg-primary/10 rounded">
									<p className="text-sm text-primary font-medium">
										{index === 0 ? "Formation d'ingénieur en cours" : "Diplôme obtenu avec mention"}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
				{/* Ajout d'une carte pour les langues */}
				<div className="edu-card translate-y-[2%] rotate-[1deg]">
					<div className="size-full bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg flex flex-col justify-center">
						<div className="text-center space-y-4">
							<h3 className="text-2xl font-bold text-blue-700">Langues</h3>
							<div className="space-y-2">
								<p className="text-gray-700"><strong>Arabe:</strong> Langue maternelle</p>
								<p className="text-gray-700"><strong>Français:</strong> Courant</p>
								<p className="text-gray-700"><strong>Anglais:</strong> Intermédiaire</p>
								<p className="text-gray-700"><strong>Allemand:</strong> Notions</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;