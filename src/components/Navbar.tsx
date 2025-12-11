const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 z-50 md:p-9 p-3 w-full">
			<div className="flex justify-between items-center">
				<div className="text-2xl font-bold text-primary">
					Nassef Fadhlaoui
				</div>
				<div className="hidden md:flex space-x-6">
					<a href="#about" className="text-gray-700 hover:text-primary transition-colors">À propos</a>
					<a href="#skills" className="text-gray-700 hover:text-primary transition-colors">Compétences</a>
					<a href="#experience" className="text-gray-700 hover:text-primary transition-colors">Expérience</a>
					<a href="#projects" className="text-gray-700 hover:text-primary transition-colors">Projets</a>
					<a href="#education" className="text-gray-700 hover:text-primary transition-colors">Formation</a>
				</div>
				<div className="text-sm text-gray-600">
					<a href="mailto:nassef.fadhlaoui@esprit.tn" className="hover:text-primary transition-colors">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
