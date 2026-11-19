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
    problem: "La préparation d’une planification PI implique de consolider des données issues du backlog, de répartir le travail en sprints et de produire des supports de suivi, ce qui mobilise beaucoup de temps opérationnel du Scrum Master.",
    objective: "Fournir un assistant qui aide à préparer la planification PI, exploiter les données du backlog, organiser les sprints et produire les éléments de reporting.",
    addedValue: "L’agent automatise la consolidation du backlog et la préparation des supports PI, pour aider le Scrum Master à consacrer moins de temps aux tâches de reporting et davantage à la coordination de l’équipe.",
    technologyRoles: [
      { name: "Python", role: "Orchestration de l’agent, traitement des données du backlog et génération des propositions de planification et des rapports." },
      { name: "Jira", role: "Source des éléments de backlog et support de suivi des tâches utilisées pendant la planification PI." },
      { name: "FastMCP", role: "Expose les capacités et outils de l’agent via le protocole MCP, afin de connecter l’assistant aux sources et actions de planification." },
    ],
    type: "Stage"
  },
  {
    title: "Stage d'immersion en entreprise",
    company: "Smart Skills",
    period: "Juin - Juillet 2025",
    description: "Réalisation d'une plateforme Laravel de gestion des réclamations avec suivi des statuts.",
    problem: "Les demandes de réclamation nécessitent un point de centralisation et un suivi clair de leur état de traitement.",
    objective: "Réaliser une plateforme permettant de créer, consulter, modifier et suivre les réclamations des utilisateurs.",
    addedValue: "La plateforme centralise les réclamations et rend leur état de traitement visible, facilitant le suivi et l’organisation des réponses.",
    technologyRoles: [{ name: "Laravel", role: "Structure l’application web, les routes et la logique serveur des opérations CRUD et du suivi des statuts." }],
    type: "Stage"
  },
  {
    title: "Projet de fin d'études",
    company: "ISI Kef",
    period: "Février - Mai 2024",
    description: "Développement de SociéGère, une plateforme web de gestion administrative des entreprises avec React.js, Node.js, MySQL et Tailwind CSS.",
    problem: "La gestion administrative d’une entreprise peut disperser les informations et rendre leur consultation moins directe.",
    objective: "Concevoir une plateforme web qui regroupe les données administratives et facilite leur gestion depuis une interface dédiée.",
    addedValue: "SociéGère regroupe les informations administratives dans un espace web dédié et simplifie leur consultation et leur gestion.",
    technologyRoles: [
      { name: "React.js", role: "Construit les écrans interactifs de gestion administrative." },
      { name: "Node.js", role: "Traite les opérations côté serveur et les échanges avec l’interface." },
      { name: "MySQL", role: "Stocke de façon structurée les informations gérées par la plateforme." },
      { name: "Tailwind CSS", role: "Met en forme l’interface et ses composants." },
    ],
    type: "Projet académique"
  },
  {
    title: "Projet de fin d'année",
    company: "Web Up",
    period: "Août 2023",
    description: "Développement de Khademni, une plateforme de recherche et de consultation d'offres d'emploi.",
    problem: "La recherche d’emploi demande de pouvoir trouver et consulter facilement les offres disponibles.",
    objective: "Créer une plateforme dédiée à la recherche et à la consultation d’offres d’emploi.",
    addedValue: "Khademni facilite l’accès aux offres en réunissant leur recherche et leur consultation dans une plateforme unique.",
    technologyRoles: [
      { name: "React.js", role: "Affiche les interfaces de recherche et de consultation des offres." },
      { name: "Node.js", role: "Gère les requêtes et la logique serveur de la plateforme." },
      { name: "MySQL", role: "Enregistre les offres d’emploi et les données associées." },
      { name: "Tailwind CSS", role: "Met en forme les pages et composants de l’interface." },
    ],
    type: "Projet"
  },
];

const projectsList = [
  {
    title: "Agent IA Agile de Planification PI",
    technologies: "Python, Jira, FastMCP",
    year: "Juillet - Août 2026",
    description: "Agent intelligent pour automatiser la planification agile et le reporting : import du backlog PI depuis Excel ou Google Sheets, optimisation des sprints, création de tableaux de bord et export des rapports en PDF/HTML.",
    objective: "Aider le Scrum Master à préparer la planification PI et à suivre les décisions grâce à un flux qui va de l’import du backlog jusqu’aux rapports partageables.",
    before: "Le Scrum Master devait consolider manuellement les données du backlog, préparer la planification des sprints et produire les supports de suivi.",
    after: "Un flux automatisé centralise les données, aide à répartir le travail dans les sprints et génère tableaux de bord et rapports, afin de réduire le temps consacré à la préparation.",
    technologyRoles: [
      { name: "Python", role: "Orchestration de l’agent, traitement des données du backlog et génération des propositions de planification et des rapports." },
      { name: "Jira", role: "Source des éléments de backlog et support de suivi des tâches utilisées pendant la planification PI." },
      { name: "FastMCP", role: "Expose les capacités et outils de l’agent via le protocole MCP, afin de connecter l’assistant aux sources et actions de planification." },
    ]
  },
  {
    title: "DeepSkyn",
    technologies: "Next.js, TypeScript, Tailwind CSS, n8n, PostgreSQL",
    year: "Janvier - Mai 2026",
    description: "Plateforme web d'analyse de la peau et de recommandation de produits skincare, avec modèles d'analyse en TypeScript et gestion des données avec PostgreSQL.",
    objective: "Proposer dans une même plateforme un parcours d’analyse de peau et des recommandations de produits de soin.",
    before: "L’analyse de la peau et la recherche de soins adaptés nécessitaient de parcourir séparément les informations et les produits.",
    after: "Une plateforme rassemble l’analyse et les recommandations de soins dans un même parcours web.",
    technologyRoles: [
      { name: "Next.js", role: "Structure de l’application web et rendu des pages de la plateforme." },
      { name: "TypeScript", role: "Implémentation des traitements d’analyse et typage des données manipulées par l’application." },
      { name: "Tailwind CSS", role: "Mise en forme responsive de l’interface et des parcours de recommandation." },
      { name: "n8n", role: "Automatisation des échanges entre les étapes du parcours et les services utilisés par la plateforme." },
      { name: "PostgreSQL", role: "Persistance des données structurées de la plateforme." },
    ]
  },
  {
    title: "Modèles ML Skincare",
    technologies: "Python",
    year: "Janvier - Avril 2026",
    description: "Développement de modèles de machine learning pour la prédiction du type de peau, la segmentation des clients et la recommandation de produits.",
    objective: "Explorer des modèles capables de soutenir trois usages : prédire le type de peau, segmenter les profils clients et recommander des produits.",
    before: "Les décisions de soin reposaient sur des informations qu’il fallait interpréter sans aide de modèles prédictifs.",
    after: "Des modèles explorent les données pour prédire le type de peau, segmenter les profils et orienter les recommandations de produits.",
    technologyRoles: [{ name: "Python", role: "Préparation des données, entraînement et évaluation des modèles de prédiction, segmentation et recommandation." }]
  },
  {
    title: "Microservices Parapharmacie",
    technologies: "React.js, Spring Boot, Tailwind CSS",
    year: "Janvier - Avril 2026",
    description: "Application de gestion de parapharmacie organisée en architecture microservices.",
    objective: "Mettre en place une application de gestion organisée en services distincts, avec une interface utilisateur dédiée.",
    before: "Les besoins de gestion de la parapharmacie étaient regroupés dans une application sans séparation claire entre interface et services métier.",
    after: "L’application sépare l’expérience utilisateur des services métier dans une architecture microservices, plus lisible à faire évoluer.",
    technologyRoles: [
      { name: "React.js", role: "Construction de l’interface de gestion et des vues de l’application." },
      { name: "Spring Boot", role: "Développement des services métier côté serveur dans l’architecture microservices." },
      { name: "Tailwind CSS", role: "Création d’une interface cohérente et adaptée aux différentes tailles d’écran." },
    ]
  },
  {
    title: "Gestion des Réclamations",
    technologies: "Laravel",
    year: "Juillet - Août 2025",
    description: "Plateforme web de gestion des réclamations utilisateurs avec opérations CRUD et suivi des statuts.",
    objective: "Fournir un outil web pour gérer les réclamations de bout en bout et suivre leur statut.",
    before: "Les réclamations et leur état de traitement étaient difficiles à centraliser et à suivre.",
    after: "Une plateforme centralise les réclamations, leurs opérations de gestion et le suivi de leurs statuts.",
    technologyRoles: [{ name: "Laravel", role: "Gestion des routes, logique serveur et opérations CRUD liées aux réclamations et à leurs statuts." }]
  },
  {
    title: "Gestion des Poubelles Intelligentes",
    technologies: "FlutterFlow, JavaFX, Symfony",
    year: "2025",
    description: "Application mobile FlutterFlow, logiciel desktop JavaFX et plateforme web Symfony pour la gestion des poubelles intelligentes.",
    objective: "Couvrir les usages de gestion sur mobile, ordinateur et web au moyen de trois interfaces complémentaires.",
    before: "Le suivi des poubelles intelligentes ne disposait pas d’un parcours unifié entre les usages mobiles, desktop et web.",
    after: "Trois interfaces complémentaires couvrent les usages mobiles, desktop et web autour de la gestion des poubelles.",
    technologyRoles: [
      { name: "FlutterFlow", role: "Création de l’application mobile de suivi et d’interaction avec le service." },
      { name: "JavaFX", role: "Réalisation de l’interface de bureau pour les opérations de gestion." },
      { name: "Symfony", role: "Développement de la plateforme web et de sa logique serveur." },
    ]
  },
  {
    title: "SociéGère",
    technologies: "React.js, Node.js, MySQL, Tailwind CSS",
    year: "Février - Mai 2024",
    description: "Plateforme web de gestion administrative des entreprises, avec pilotage des données et interface utilisateur optimisée.",
    objective: "Rassembler les fonctions de gestion administrative et les données d’entreprise dans une plateforme web.",
    before: "Les informations administratives de l’entreprise étaient dispersées et demandaient une gestion manuelle.",
    after: "Une plateforme web regroupe les données et facilite leur consultation et leur gestion depuis une interface dédiée.",
    technologyRoles: [
      { name: "React.js", role: "Construction des écrans interactifs de gestion administrative." },
      { name: "Node.js", role: "Implémentation des traitements et des échanges côté serveur." },
      { name: "MySQL", role: "Stockage structuré des données de l’entreprise." },
      { name: "Tailwind CSS", role: "Mise en forme de l’interface et adaptation aux écrans." },
    ]
  },
  {
    title: "Khademni",
    technologies: "React.js, Node.js, MySQL, Tailwind CSS",
    year: "Août 2023",
    description: "Plateforme de recherche et de consultation d'offres d'emploi.",
    objective: "Permettre aux utilisateurs de rechercher des offres d’emploi et d’en consulter les informations.",
    before: "La recherche et la consultation d’offres d’emploi n’étaient pas réunies dans un parcours dédié.",
    after: "Une plateforme permet de parcourir les offres et d’accéder aux informations utiles à la recherche d’emploi.",
    technologyRoles: [
      { name: "React.js", role: "Création des vues de recherche et de consultation des offres." },
      { name: "Node.js", role: "Traitement des requêtes et logique serveur de la plateforme." },
      { name: "MySQL", role: "Enregistrement des offres et des données associées." },
      { name: "Tailwind CSS", role: "Mise en forme responsive des pages et composants." },
    ]
  },
];

const educationList = [
  { degree: "Cycle d'ingénieur", school: "École Supérieure Privée d'Ingénierie et de Technologies", period: "2024 - présent", location: "Tunisie" },
  { degree: "Licence en Génie Logiciel", school: "Institut Supérieur d'Informatique Kef", period: "2021 - 2024", location: "Tunisie" },
];

const certificationsList = [
  {
    title: "Hashgraph Certification",
    issuer: "Hedera",
    year: "Novembre 2025",
    logo: "/images/HederaLogo.png",
    description: "Formation au développement d’applications décentralisées sur le réseau Hedera Hashgraph. Le programme aborde les fondements du Web3, l’architecture du réseau, les comptes et les transactions, ainsi que l’utilisation des SDK Hedera. Les exercices pratiques portent sur le consensus, la création de tokens et de NFT, les smart contracts et l’intégration de portefeuilles dans des dApps.",
    skills: ["Web3", "Hedera SDK", "Consensus", "Tokens & NFT", "Smart contracts", "dApps"],
    sourceUrl: "https://hashgraphdev.com/courses/hashgraph-developer-course",
    sourceLabel: "Programme officiel · The Hashgraph Association",
  },
  {
    title: "Applications of AI for Anomaly Detection",
    issuer: "NVIDIA",
    year: "Novembre 2025",
    logo: "/images/NvidiaLogo.png",
    description: "Formation pratique du NVIDIA Deep Learning Institute consacrée à la détection d’anomalies dans de grands jeux de données, à travers le cas des intrusions réseau. Le programme compare des approches supervisées et non supervisées et met en œuvre trois techniques : XGBoost accéléré, les autoencodeurs et les réseaux antagonistes génératifs (GAN). Il présente notamment les outils RAPIDS et Keras pour construire et comparer ces solutions.",
    skills: ["Détection d’anomalies", "Machine learning", "XGBoost", "Autoencodeurs", "GAN", "RAPIDS", "Keras"],
    sourceUrl: "https://www.nvidia.com/en-us/deep-learning-ai/education.md/",
    sourceLabel: "Programme officiel · NVIDIA Deep Learning Institute",
  },
  {
    title: "Hedera Certified Foundation",
    issuer: "Hedera",
    year: "Novembre 2026",
    logo: "/images/HederaLogo.png",
    description: "Certification Hedera Certified Foundation obtenue en novembre 2026.",
    skills: ["Hedera", "DLT", "Fondamentaux blockchain"],
    sourceUrl: "https://hedera.com/learning",
    sourceLabel: "Formations Hedera",
  },
  {
    title: "Hedera Certified Developer Associate",
    issuer: "Hedera",
    year: "Novembre 2026",
    logo: "/images/HederaLogo.png",
    description: "Certification Hedera Certified Developer Associate obtenue en novembre 2026.",
    skills: ["Hedera", "Développement blockchain", "Hedera SDK"],
    sourceUrl: "https://hedera.com/learning",
    sourceLabel: "Formations Hedera",
  },
  {
    title: "Hedera Business Foundation",
    issuer: "Hedera",
    year: "Novembre 2026",
    logo: "/images/HederaLogo.png",
    description: "Certification Hedera Business Foundation obtenue en novembre 2026.",
    skills: ["Hedera", "DLT", "Usages métier"],
    sourceUrl: "https://hedera.com/learning",
    sourceLabel: "Formations Hedera",
  },
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
