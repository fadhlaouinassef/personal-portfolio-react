const FooterSection = () => {
	return (
		<section className="footer-section">
			<img
				src="/images/footer-dip.png"
				alt=""
				className="w-full object-cover -translate-y-1"
			/>

			<div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
				<div className="overflow-hidden z-10">
					<h1 className="general-title text-center text-milk py-5">
						TRAVAILLONS ENSEMBLE
					</h1>
				</div>

				<img
					src="/images/Nassef.png"
					className="absolute top-20 left-1/2 transform -translate-x-1/2 object-contain opacity-15 max-h-[400px] grayscale-[30%] brightness-75"
					alt="nassef-profile"
				/>

				<div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
					<a href="https://github.com/fadhlaouinassef" target="_blank" rel="noopener noreferrer" className="social-btn">
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
						</svg>
					</a>
					<a href="mailto:nassef.fadhlaoui@esprit.tn" className="social-btn">
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
						</svg>
					</a>
					<a href="tel:+21655733277" className="social-btn">
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
						</svg>
					</a>
				</div>

				<div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
					<div className="flex items-start md:gap-16 gap-5">
						<div>
							<p className="font-bold mb-3">Compétences</p>
							<p>React.js</p>
							<p>Node.js</p>
							<p>Laravel</p>
							<p>MySQL</p>
						</div>
						<div>
							<p className="font-bold mb-3">Services</p>
							<p>Développement Web</p>
							<p>Applications Mobile</p>
							<p>Consultation</p>
						</div>
						<div>
							<p className="font-bold mb-3">Contact</p>
							<p>Kef Ouest, El Kef</p>
							<p>Tunisie</p>
							<p>+216 55 733 277</p>
						</div>
					</div>

					<div className="md:max-w-lg">
						<p>
							Prêt à collaborer sur votre prochain projet ? 
							Contactez-moi pour discuter de vos besoins en développement.
						</p>
						<div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
							<a 
								href="mailto:nassef.fadhlaoui@esprit.tn"
								className="w-full text-[#999999] hover:text-white transition-colors"
							>
								Envoyer un email
							</a>
							<img src="/images/arrow.svg" alt="arrow" />
						</div>
					</div>
				</div>

				<div className="copyright-box">
					<p>Copyright © 2025 Nassef Fadhlaoui - Tous droits réservés</p>
					<div className="flex items-center gap-7">
						<p>Développé avec passion</p>
						<p>Portfolio Personnel</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FooterSection;
