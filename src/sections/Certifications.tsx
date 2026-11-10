import { useLanguage } from "../i18n";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ExpandableCard from "../components/ExpandableCard";
import { usePortfolio } from "../i18n/usePortfolio";

const Certifications = () => {
	const { t } = useLanguage();
	const { certificationsList } = usePortfolio();
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
					<h2 className="mt-3 text-4xl md:text-6xl font-bold uppercase leading-[1.05] text-[#2e2a33]">{t("Validation de compétences")}</h2>
				</div>

				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
					{certificationsList.map((cert) => (
						<ExpandableCard
							title={cert.title}
							category="Certification"
							details={
								<>
								<h3 className="detail-heading">{t("À propos de la certification")}</h3>
								<p className="text-sm md:text-base leading-relaxed text-[#4f4656]">{cert.description}</p>
								<h3 className="detail-heading mt-6">{t("Compétences abordées")}</h3>
								<div className="detail-tags">
									{cert.skills.map((skill) => <span key={skill}>{skill}</span>)}
								</div>
								<dl className="detail-facts mt-6">
									<div><dt>{t("Organisme de certification")}</dt><dd>{cert.issuer}</dd></div>
									<div><dt>{t("Année d’obtention")}</dt><dd>{cert.year}</dd></div>
								</dl>
								<a href={cert.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm text-[#7f3b2d] underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4">
									{cert.sourceLabel} <span aria-hidden="true">↗</span>
								</a>
								</>
							}
							key={cert.title}
							className="certification-card rounded-2xl border border-[#e7d9c8] bg-white/80 p-6 md:p-7 shadow-[0_12px_30px_rgba(34,33,35,0.08)]"
						>
							<div className="flex items-center justify-between gap-4">
								<div className="flex h-20 w-32 shrink-0 items-center justify-center rounded-xl border border-[#e7d9c8] bg-white p-3">
									<img
										src={cert.logo}
										alt={`Logo ${cert.issuer}`}
										width={104}
										height={56}
										loading="lazy"
										className="h-full w-full object-contain"
									/>
								</div>
								<p className="text-xs uppercase tracking-[0.16em] text-[#9c5c2f]">{cert.year}</p>
							</div>
							<h3 className="mt-2 text-2xl font-bold text-[#2e2a33]">{cert.title}</h3>
							<p className="mt-3 font-paragraph text-[#5a4f42]">{t("Organisme:")} {cert.issuer}</p>
							<div className="mt-5 h-1 w-full rounded-full bg-gradient-to-r from-[#7f3b2d] via-[#d4a05c] to-[#9c5c2f]" />
						</ExpandableCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certifications;
