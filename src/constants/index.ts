const skillCategories = [
  { name: "Langages", color: "brown", rotation: "md:rotate-[-8deg] rotate-0", skills: ["C", "Python", "Java", "JavaScript", "TypeScript", "SQL", "PHP", "CSS"] },
  { name: "Frameworks", color: "red", rotation: "md:rotate-[8deg] rotate-0", skills: ["React.js", "Next.js", "Node.js", "Express.js", "Laravel", "Symfony", "Spring Boot", "Tailwind CSS"] },
  { name: "Outils", color: "orange", rotation: "md:rotate-[-8deg] rotate-0", skills: ["Git", "GitHub", "VS Code", "IntelliJ", "NPM", "MySQL", "PostgreSQL", "Docker", "Jira"] },
  { name: "Mobile & Desktop", color: "brown", rotation: "md:rotate-[8deg] rotate-0", skills: ["FlutterFlow", "JavaFX", "Microservices", "REST API", "Architecture logicielle"] },
];

const experienceList = [
  {
    title: "Stage d'ingénieur",
    company: "Ampere Software Technology - Groupe Renault",
    period: "Juillet - Août 2026",
    description: "Conception d'un agent IA de planification PI : import des données du backlog, optimisation des sprints, tableaux de bord et export de rapports PDF/HTML.",
    type: "Stage"
  },
  {
    title: "Stage d'immersion en entreprise",
    company: "Smart Skills",
    period: "Juin - Juillet 2025",
    description: "Réalisation d'une plateforme Laravel de gestion des réclamations avec suivi des statuts.",
    type: "Stage"
  },
  {
    title: "Projet de fin d'études",
    company: "ISI Kef",
    period: "Février - Mai 2024",
    description: "Développement de SociéGère, une plateforme web de gestion administrative des entreprises avec React.js, Node.js, MySQL et Tailwind CSS.",
    type: "Projet académique"
  },
  {
    title: "Projet de fin d'année",
    company: "Web Up",
    period: "Août 2023",
    description: "Développement de Khademni, une plateforme de recherche et de consultation d'offres d'emploi.",
    type: "Projet"
  },
];

const projectsList = [
  {
    title: "Agent IA Agile de Planification PI",
    technologies: "Python, Jira",
    year: "Juillet - Août 2026",
    description: "Agent intelligent pour automatiser la planification agile et le reporting : import du backlog PI depuis Excel ou Google Sheets, optimisation des sprints, création de tableaux de bord et export des rapports en PDF/HTML."
  },
  {
    title: "DeepSkyn",
    technologies: "Next.js, TypeScript, PostgreSQL",
    year: "Janvier - Mai 2026",
    description: "Plateforme web d'analyse de la peau et de recommandation de produits skincare, avec modèles d'analyse en TypeScript et gestion des données avec PostgreSQL."
  },
  {
    title: "Modèles ML Skincare",
    technologies: "Python",
    year: "Janvier - Avril 2026",
    description: "Développement de modèles de machine learning pour la prédiction du type de peau, la segmentation des clients et la recommandation de produits."
  },
  {
    title: "Microservices Parapharmacie",
    technologies: "React.js, Spring Boot",
    year: "Janvier - Avril 2026",
    description: "Application de gestion de parapharmacie organisée en architecture microservices."
  },
  {
    title: "Gestion des Réclamations",
    technologies: "Laravel",
    year: "Juillet - Août 2025",
    description: "Plateforme web de gestion des réclamations utilisateurs avec opérations CRUD et suivi des statuts."
  },
  {
    title: "Gestion des Poubelles Intelligentes",
    technologies: "FlutterFlow, JavaFX, Symfony",
    year: "2025",
    description: "Application mobile FlutterFlow, logiciel desktop JavaFX et plateforme web Symfony pour la gestion des poubelles intelligentes."
  },
  {
    title: "SociéGère",
    technologies: "React.js, Node.js, MySQL, Tailwind CSS",
    year: "Février - Mai 2024",
    description: "Plateforme web de gestion administrative des entreprises, avec pilotage des données et interface utilisateur optimisée."
  },
  {
    title: "Khademni",
    technologies: "React.js, Node.js, MySQL, Tailwind CSS",
    year: "Août 2023",
    description: "Plateforme de recherche et de consultation d'offres d'emploi."
  },
];

const educationList = [
  { degree: "Cycle d'ingénieur", school: "École Supérieure Privée d'Ingénierie et de Technologies", period: "2024 - présent", location: "Tunisie" },
  { degree: "Licence en Génie Logiciel", school: "Institut Supérieur d'Informatique Kef", period: "2021 - 2024", location: "Tunisie" },
];

const certificationsList = [
  { title: "Hashgraph Certification", issuer: "Hedera", year: "2025" },
  { title: "Applications of AI for Anomaly Detection", issuer: "NVIDIA", year: "2025" },
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
