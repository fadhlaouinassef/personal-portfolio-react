import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const Message = () => {
	useGSAP(() => {
		const firstMsgSplit = SplitText.create(".first-message", {
			type: "words",
		});
		const secMsgSplit = SplitText.create(".second-message", {
			type: "words",
		});
		const paragraphSplit = SplitText.create(".message-content p", {
			type: "words, lines",
			linesClass: "paragraph-line",
		});
		gsap.to(firstMsgSplit.words, {
			color: "#faeade",
			ease: "power1.in",
			stagger: 1,
			scrollTrigger: {
				trigger: ".message-content",
				start: "top center",
				end: "30% center",
				scrub: true,
			},
		});
		gsap.to(secMsgSplit.words, {
			color: "#faeade",
			ease: "power1.in",
			stagger: 1,
			scrollTrigger: {
				trigger: ".second-message",
				start: "top center",
				end: "bottom center",
				scrub: true,
			},
		});
		const revealTl = gsap.timeline({
			delay: 2,
			scrollTrigger: {
				trigger: ".msg-text-scroll",
				start: "top 60%",
			},
		});
		revealTl.to(".msg-text-scroll", {
			duration: 1,
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			ease: "circ.inOut",
		});
		const paragraphTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".message-content p",
				start: "top center",
			},
		});
		paragraphTl.from(paragraphSplit.words, {
			yPercent: 300,
			rotate: 3,
			ease: "power1.inOut",
			duration: 1,
			stagger: 0.01,
		});
	});
	return (
		<section id="about" className="message-content">
			<div className="container mx-auto flex-center py-28 relative">
				<div className="size-full">
					<div className="msg-wrapper">
						<h1 className="first-message">Passionné par l'innovation et la</h1>
						<div className="msg-text-scroll">
							<div
								style={{ clipPath: "polygon(0, 0,0 0, 0 100%, 0% 100%)" }}
								className="bg-light-brown md:pb-5 pb-3 px-5"
							>
								<h2 className="text-red-brown">Technologie</h2>
							</div>
						</div>
						<h1 className="second-message">
							je crée des solutions modernes et performantes.
						</h1>
					</div>
					<div className="flex-center md:mt-20 mt-10">
						<div className="max-w-2xl px-10 flex-center overflow-hidden">
							<p>
								Étudiant en informatique passionné par la création d'applications modernes et performantes, 
								avec une solide base en génie logiciel et développement web. Je souhaite continuer à développer 
								mes compétences dans des environnements innovants et collaboratifs, en utilisant les dernières 
								technologies pour créer des solutions impactantes.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Message;
