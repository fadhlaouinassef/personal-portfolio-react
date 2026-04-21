import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { certificationsList } from "../constants";

const Certifications = () => {
	useGSAP(() => {
		gsap.from(".certification-card", {
			opacity: 0,
			y: 32,
			duration: 0.8,
			ease: "power3.out",
			stagger: 0.12,
			scrollTrigger: {
				trigger: ".certifications-section",
				start: "top 75%",
			},
		});
	});

	return (
		<section id="certifications" className="certifications-section py-24 md:py-28">
			<div className="max-w-6xl mx-auto px-5 md:px-10">
				<div className="text-center max-w-3xl mx-auto">
					<p className="text-sm uppercase tracking-[0.2em] text-[#7f3b2d]">Certifications</p>
					<h2 className="mt-3 text-4xl md:text-6xl font-bold uppercase leading-[1.05] text-[#2e2a33]">
						Validation de competences
					</h2>
				</div>

				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
					{certificationsList.map((cert) => (
						<div
							key={cert.title}
							className="certification-card rounded-2xl border border-[#e7d9c8] bg-white/80 backdrop-blur-sm p-6 md:p-7 shadow-[0_12px_30px_rgba(34,33,35,0.08)]"
						>
							<p className="text-xs uppercase tracking-[0.16em] text-[#9c5c2f]">{cert.year}</p>
							<h3 className="mt-2 text-2xl font-bold text-[#2e2a33]">{cert.title}</h3>
							<p className="mt-3 font-paragraph text-[#5a4f42]">Organisme: {cert.issuer}</p>
							<div className="mt-5 h-1 w-full rounded-full bg-gradient-to-r from-[#7f3b2d] via-[#d4a05c] to-[#9c5c2f]" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certifications;
