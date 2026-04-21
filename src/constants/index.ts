const skillCategories = [
	{
		name: "Langages",
		color: "brown",
		rotation: "md:rotate-[-8deg] rotate-0",
		skills: ["C", "Python", "Java", "JavaScript", "TypeScript", "SQL", "PHP", "CSS"]
	},
	{
		name: "Frameworks",
		color: "red",
		rotation: "md:rotate-[8deg] rotate-0",
		skills: ["React.js", "Next.js", "Node.js", "Express.js", "Laravel", "Symfony", "Spring Boot", "Tailwind CSS"]
	},
	{
		name: "Outils",
		color: "orange",
		rotation: "md:rotate-[-8deg] rotate-0",
		skills: ["Git", "GitHub", "VS Code", "IntelliJ", "NPM", "MySQL", "PostgreSQL", "Docker"]
	},
	{
		name: "Mobile & Desktop",
		color: "brown",
		rotation: "md:rotate-[8deg] rotate-0",
		skills: ["FlutterFlow", "JavaFX", "Microservices", "REST API", "Architecture logicielle"]
	},
];

const experienceList = [
	{
		title: "Développeur Web",
		company: "Smart Skills",
		period: "Juin - Juillet 2025",
		description: "Développement de fonctionnalités web avec Laravel, implémentation de modules CRUD, intégration des données MySQL et collaboration quotidienne avec l'équipe technique.",
		type: "Immersion en entreprise"
	},
	{
		title: "Développeur Web Full Stack",
		company: "Projet de Fin d'Études (PFE)",
		period: "Février - Mai 2024",
		description: "Conception d'une solution full stack avec React.js, Node.js et Express.js, structuration de la base MySQL et mise en place d'une interface moderne et responsive avec Tailwind CSS.",
		type: "Projet académique"
	},
	{
		title: "Développeur Web Full Stack",
		company: "Web Up - El Kef",
		period: "Août 2023",
		description: "Développement d'interfaces React.js, réalisation d'API backend Node.js/Express.js, intégration MySQL et amélioration de l'expérience utilisateur sur les écrans web.",
		type: "Stage"
	},
];

const projectsList = [
	{
		title: "DeepSkyn",
		technologies: "Next.js, TypeScript, PostgreSQL",
		year: "2026 - Présent",
		description: "Plateforme web d'analyse de la peau avec recommandation de produits skincare, architecture TypeScript moderne et gestion de données PostgreSQL."
	},
	{
		title: "Modèles ML Skincare",
		technologies: "Python, Machine Learning",
		year: "2026 - Présent",
		description: "Développement de modèles de prédiction du type de peau, segmentation clients et recommandation produit pour enrichir la plateforme d'analyse dermatologique."
	},
	{
		title: "Microservices Parapharmacie",
		technologies: "React.js, Spring Boot, Microservices",
		year: "Janvier - Avril 2026",
		description: "Application de gestion de parapharmacie structurée en microservices avec séparation des domaines métier et interface de pilotage côté React.js."
	},
	{
		title: "Gestion des Réclamations",
		technologies: "Laravel",
		year: "Juillet - Août 2025",
		description: "Plateforme web de suivi des réclamations utilisateurs avec opérations CRUD, statuts de traitement et interface d'administration dédiée."
	},
	{
		title: "Gestion des Poubelles Intelligentes",
		technologies: "FlutterFlow, JavaFX, Symfony",
		year: "2025",
		description: "Ecosystème multi-plateforme combinant application mobile, logiciel desktop et portail web pour suivre et optimiser les opérations de collecte."
	},
	{
		title: "SociéGère",
		technologies: "React.js, Node.js, MySQL, Tailwind CSS",
		year: "Février - Mai 2024",
		description: "Plateforme de gestion administrative d'entreprise avec modules métier connectés, tableaux de pilotage et expérience utilisateur optimisée."
	},
	{
		title: "Khademni",
		technologies: "React.js, Node.js, MySQL, Tailwind CSS",
		year: "Août 2023",
		description: "Plateforme orientée emploi pour la consultation d'offres, la recherche ciblée et la mise en relation entre profils et opportunités."
	},
];

const educationList = [
	{
		degree: "Cycle d'ingénieur",
		school: "École Supérieure Privée d'Ingénierie et de Technologies",
		period: "2024 - présent",
		location: "Tunisie"
	},
	{
		degree: "Licence en Génie Logiciel",
		school: "Institut Supérieur d'Informatique Kef",
		period: "2021 - 2024",
		location: "Tunisie"
	},
];

const certificationsList = [
	{
		title: "Hashgraph Certification",
		issuer: "Hedera",
		year: "2025"
	},
	{
		title: "Applications of AI for Anomaly Detection",
		issuer: "NVIDIA",
		year: "2025"
	}
];

const languagesList = ["Arabe", "Français", "Anglais"];

const qualitiesList = [
	"Communication",
	"Gestion de projet",
	"Respect des délais",
	"Résistance au stress",
	"Patience"
];

export {
	skillCategories,
	experienceList,
	projectsList,
	educationList,
	certificationsList,
	languagesList,
	qualitiesList,
};
