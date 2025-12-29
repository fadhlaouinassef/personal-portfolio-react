const skillCategories = [
	{
		name: "Langages",
		color: "blue",
		rotation: "md:rotate-[-8deg] rotate-0",
		skills: ["C", "Python", "Java", "JavaScript", "SQL", "CSS", "PHP"]
	},
	{
		name: "Frameworks",
		color: "red",
		rotation: "md:rotate-[8deg] rotate-0",
		skills: ["React.js", "Node.js", "Express.js", "Laravel", "Tailwind CSS", "Symfony"]
	},
	{
		name: "Outils",
		color: "orange",
		rotation: "md:rotate-[-8deg] rotate-0",
		skills: ["MySQL", "Git", "VS Code", "IntelliJ", "NPM", "Blender", "Socket.io"]
	},
	{
		name: "Mobile & Desktop",
		color: "brown",
		rotation: "md:rotate-[8deg] rotate-0",
		skills: ["Flutter", "FlutterFlow", "JavaFX", "Angular", "Spring Boot"]
	},
];

const experienceList = [
	{
		title: "Développeur Web",
		company: "Smart Skills",
		period: "Juin - Juillet 2025",
		description: "Développement d'applications web avec Laravel, création de fonctionnalités CRUD, intégration MySQL et collaboration active avec l'équipe technique.",
		type: "Immersion en entreprise"
	},
	{
		title: "Développeur Web Full Stack",
		company: "Projet de Fin d'Études (PFE)",
		period: "Février - Mai 2024",
		description: "Conception et développement frontend avec React.js, backend avec Node.js et Express.js, intégration complète MySQL pour la gestion des données et design moderne et responsive avec Tailwind CSS.",
		type: "Projet académique"
	},
	{
		title: "Développeur Web Full Stack",
		company: "Web Up - El Kef",
		period: "Août 2023",
		description: "Développement d'interfaces frontend attractives avec React.js, création d'un backend robuste avec Node.js et Express.js, intégration efficace de MySQL et design élégant avec Tailwind CSS pour l'optimisation de l'expérience utilisateur.",
		type: "Stage"
	},
];

const projectsList = [
	{
		title: "Gestion Poubelles Intelligentes",
		technologies: "JavaFX & Symfony",
		year: "2025",
		description: "Développement d'un logiciel desktop en JavaFX et d'une plateforme web avec Symfony, permettant la gestion centralisée de la collecte de poubelles, le suivi en temps réel et la visualisation des données pour optimiser les opérations."
	},
	{
		title: "App Mobile de Collecte",
		technologies: "FlutterFlow",
		year: "2025",
		description: "Conception et prototypage d'une application mobile avec FlutterFlow, interfaces adaptées aux besoins utilisateurs, gestion des données en temps réel et optimisation de la navigation pour faciliter la collecte de poubelles."
	},
	{
		title: "Portfolio Dynamique",
		technologies: "Laravel, HTML, CSS, JavaScript",
		year: "2023",
		description: "Développement d'un portfolio complet avec fonctionnalités CRUD, interfaces attrayantes et conviviales, en utilisant Laravel pour gérer les interactions et la persistance des données."
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

export { skillCategories, experienceList, projectsList, educationList };
