import { useState, useEffect } from "react";
import gsap from "gsap";

interface NavbarProps {
	onCVClick?: () => void;
}

const Navbar = ({ onCVClick }: NavbarProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (isMenuOpen) {
			gsap.fromTo(
				".mobile-menu-item",
				{ opacity: 0, x: -20 },
				{ opacity: 1, x: 0, duration: 0.3, stagger: 0.1, ease: "power2.out" }
			);
		}
	}, [isMenuOpen]);

	return (
		<nav
			className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
				scrolled
					? "bg-milk/90 backdrop-blur-md shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto md:px-8 px-4 md:py-6 py-4">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-dark-brown to-primary bg-clip-text text-transparent">
						Nassef Fadhlaoui
					</div>

					{/* Desktop Menu */}
					<div className="hidden lg:flex items-center gap-8">
						<div className="flex items-center gap-6">
							<a
								href="#about"
								className="text-dark-brown hover:text-primary transition-all duration-300 font-medium relative group"
							>
								À propos
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							</a>
							<a
								href="#skills"
								className="text-dark-brown hover:text-primary transition-all duration-300 font-medium relative group"
							>
								Compétences
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							</a>
							<a
								href="#experience"
								className="text-dark-brown hover:text-primary transition-all duration-300 font-medium relative group"
							>
								Expérience
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							</a>
							<a
								href="#projects"
								className="text-dark-brown hover:text-primary transition-all duration-300 font-medium relative group"
							>
								Projets
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							</a>
							<a
								href="#education"
								className="text-dark-brown hover:text-primary transition-all duration-300 font-medium relative group"
							>
								Formation
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							</a>
						</div>

						<div className="flex items-center gap-3">
							<button
								onClick={onCVClick}
								className="px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold"
							>
								Mon CV
							</button>
							<a
								href="mailto:nassef.fadhlaoui@esprit.tn"
								className="px-5 py-2.5 border-2 border-dark-brown text-dark-brown rounded-lg hover:bg-dark-brown hover:text-white transition-all duration-300 font-semibold"
							>
								Contact
							</a>
						</div>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
						aria-label="Toggle menu"
					>
						<div className="flex flex-col gap-1.5">
							<span
								className={`w-6 h-0.5 bg-dark-brown transition-all duration-300 ${
									isMenuOpen ? "rotate-45 translate-y-2" : ""
								}`}
							></span>
							<span
								className={`w-6 h-0.5 bg-dark-brown transition-all duration-300 ${
									isMenuOpen ? "opacity-0" : ""
								}`}
							></span>
							<span
								className={`w-6 h-0.5 bg-dark-brown transition-all duration-300 ${
									isMenuOpen ? "-rotate-45 -translate-y-2" : ""
								}`}
							></span>
						</div>
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="lg:hidden mt-6 pb-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200">
						<div className="flex flex-col space-y-4">
							<a
								href="#about"
								onClick={() => setIsMenuOpen(false)}
								className="mobile-menu-item text-dark-brown hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/5 font-medium"
							>
								À propos
							</a>
							<a
								href="#skills"
								onClick={() => setIsMenuOpen(false)}
								className="mobile-menu-item text-dark-brown hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/5 font-medium"
							>
								Compétences
							</a>
							<a
								href="#experience"
								onClick={() => setIsMenuOpen(false)}
								className="mobile-menu-item text-dark-brown hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/5 font-medium"
							>
								Expérience
							</a>
							<a
								href="#projects"
								onClick={() => setIsMenuOpen(false)}
								className="mobile-menu-item text-dark-brown hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/5 font-medium"
							>
								Projets
							</a>
							<a
								href="#education"
								onClick={() => setIsMenuOpen(false)}
								className="mobile-menu-item text-dark-brown hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/5 font-medium"
							>
								Formation
							</a>
							
							<div className="pt-4 border-t border-gray-200 space-y-3">
								<button
									onClick={() => {
										onCVClick?.();
										setIsMenuOpen(false);
									}}
									className="mobile-menu-item w-full px-5 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold"
								>
									Mon CV
								</button>
								<a
									href="mailto:nassef.fadhlaoui@esprit.tn"
									className="mobile-menu-item block text-center px-5 py-3 border-2 border-dark-brown text-dark-brown rounded-lg hover:bg-dark-brown hover:text-white transition-all duration-300 font-semibold"
								>
									Contact
								</a>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
