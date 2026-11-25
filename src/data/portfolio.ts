export type Locale = 'fr' | 'en'

export type ProjectFilter = 'fullstack' | 'ai' | 'data' | 'devops'
export type ProjectVisual = 'bank' | 'rail' | 'shop' | 'school'

export type Project = {
  number: string
  title: string
  kind: string
  year: string
  impact: string
  description: string
  context: string
  architecture: string
  challenges: string[]
  results: string[]
  stack: string[]
  role: string
  github: string | null
  linkedin: string | null
  demo: string | null
  filters: ProjectFilter[]
  visual: ProjectVisual
  featured?: boolean
}

export type Certificate = {
  title: string
  organization: string
  date: string
  image: string
  verificationUrl: string | null
  category: string
}

export const profile = {
  name: 'Youssef Sabbab',
  location: 'Fès, Maroc',
  email: 'sabbabyoussef@gmail.com',
  phone: '+212 6 43 31 44 72',
  photo: '/assets/youssef-sabbab.webp',
  cv: '/assets/youssef-sabbab-cv.pdf',
  github: 'https://github.com/youssef-sab04',
  linkedin: 'https://linkedin.com/in/youssef-sabbab-953b79323',
}

export const portfolio = {
  fr: {
    nav: [
      { label: 'À propos', href: '#about' },
      { label: 'Expérience', href: '#experience' },
      { label: 'Projets', href: '#projects' },
      { label: 'Compétences', href: '#skills' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Étudiant ingénieur · ENSA Fès',
      headline: 'Des idées solides.\nDu code qui avance.',
      descriptor: 'AI / LLM ENGINEER  ·  FULL-STACK DEVELOPER',
      intro: 'Je conçois des produits web utiles et des expériences intelligentes, du premier schéma jusqu’au déploiement.',
      availability: 'À la recherche d’un stage PFE · 2027',
      projectsCta: 'Explorer les projets',
      contactCta: 'Me contacter',
      cvCta: 'Télécharger mon CV',
      portraitAlt: 'Portrait de Youssef Sabbab',
      portraitNote: 'Actuellement à Fès, Maroc',
    },
    about: {
      eyebrow: 'Un peu de contexte',
      title: 'Construire, comprendre,\nfaire la différence.',
      paragraphs: [
        'Étudiant en 3e année du cycle ingénieur en Génie Informatique à l’ENSA Fès, je me spécialise en développement full-stack et en ingénierie IA autour des LLM et du RAG.',
        'J’aime relier les pièces : concevoir une architecture backend, donner vie à une interface claire, puis fiabiliser le tout avec des tests et un déploiement maîtrisé.',
      ],
      note: 'Curieux par nature, ingénieur par formation.',
      labels: ['Full-stack', 'LLM & RAG', 'Architecture', 'CI / CD'],
      educationTitle: 'Formation',
      ongoing: 'En cours',
      education: [
        { date: '2024 — présent', title: 'Diplôme d’ingénieur en Génie Informatique', organization: 'ENSA Fès', description: '3e année du cycle ingénieur, orientée développement full-stack et IA.', tags: ['Génie Informatique', 'Full-stack', 'IA · LLM / RAG'], ongoing: true },
        { date: '2022 — 2024', title: 'Classes préparatoires intégrées', organization: 'ENSA Fès', description: 'Classes préparatoires intégrées au cycle ingénieur.', tags: ['Classes préparatoires', 'ENSA Fès'] },
        { date: '2021 — 2022', title: 'Baccalauréat · Sciences Physiques', organization: 'Lycée Jasmin · Sefrou', description: 'Baccalauréat Sciences Physiques.', tags: ['Sciences Physiques', 'Lycée Jasmin'] },
      ],
    },
    experience: {
      eyebrow: 'Expérience',
      title: 'Apprendre en construisant.',
      achievementsTitle: 'Réalisations',
      technologiesTitle: 'Technologies',
      entries: [
        {
          date: '2026', position: 'Stage d’application', project: 'Application de gestion pour magasin d’optique', company: 'Cad-Optique', location: 'Fès, Maroc',
          summary: 'Conception et développement d’une application full-stack de gestion, déployée en production.',
          achievements: [
            'Conçu et développé une application en production couvrant 10+ modules métier : clients, ordonnances, stock, ventes et devis.',
            'Intégré un pipeline OCR (OCR cloud et parsing personnalisé) réduisant la saisie manuelle des ordonnances.',
            'Mis en place un pipeline CI/CD GitHub Actions (build-and-test, docker-build-push) pour automatiser tests et déploiement.',
            'Atteint 80 % de couverture de tests avec Mockito, @DataJpaTest et RestAssured.',
          ],
          technologies: ['React', 'Redux', 'Tailwind CSS', 'Spring Boot', 'Spring Security · JWT', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Cloudinary', 'WhatsApp API', 'JUnit', 'Mockito', 'RestAssured'],
          linkedin: 'https://www.linkedin.com/posts/youssef-sabbab-953b79323_pfa-internship-fullstack-ugcPost-7515509193173483520-DKO5/',
          github: 'https://github.com/youssef-sab04/Cad-Optique',
        },
        {
          date: '2025', position: 'Stage d’initiation', project: 'Application de gestion du courrier', company: 'CHU Hassan II', location: 'Fès, Maroc',
          summary: 'Conception et développement d’une application de digitalisation du courrier.',
          achievements: [
            'Conçu et développé une application pour digitaliser la gestion du courrier.',
            'Structuré le workflow autour de trois rôles : Agent, Responsable et Administrateur.',
            'Remplacé le processus papier manuel par un workflow applicatif.',
          ],
          technologies: ['React', 'Bootstrap', 'PHP', 'MySQL', 'Chart.js', 'Postman'],
          linkedin: 'https://www.linkedin.com/posts/youssef-sabbab-953b79323_soutenance-stage-daezveloppementweb-ugcPost-7384978607711989760-TQI7/',
          github: 'https://github.com/youssef-sab04/Gestion-des-courriers',
        },
      ],
      eventsTitle: 'Événements & networking',
      eventsIntro: 'Participation au GITEX Africa à Marrakech.',
      eventPlace: 'Marrakech, Maroc',
      viewPost: 'Voir la publication',
      events: [
        { title: 'GITEX Africa 2026', url: 'https://www.linkedin.com/posts/youssef-sabbab-953b79323_gitexafrica-gitexafrica2026-technology-ugcPost-7448043768592809985-UBsW/' },
        { title: 'GITEX Africa 2025', url: 'https://www.linkedin.com/posts/youssef-sabbab-953b79323_gitexafrica-innovation-smartsolutions-ugcPost-7319339467167707136-AnSQ/' },
      ],
    },
    skills: {
      eyebrow: 'Boîte à outils',
      title: 'Là où je construis.',
      intro: 'Des technologies mobilisées sur des projets concrets, de l’application métier aux systèmes IA.',
      groups: [
        { title: 'IA / LLM & RAG', icon: 'sparkles', items: ['LLM', 'RAG', 'AI Agents', 'LangChain', 'FastAPI', 'Python'] },
        { title: 'Backend · Spring Boot', icon: 'layers', items: ['Java', 'Spring Boot', 'Spring Security · JWT', 'REST API', 'Kafka', 'RabbitMQ'] },
        { title: 'Frontend · React', icon: 'panels', items: ['React', 'Redux', 'JavaScript', 'Tailwind CSS', 'Bootstrap'] },
        { title: 'DevOps', icon: 'network', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Prometheus', 'Grafana'] },
        { title: 'Bases de données', icon: 'database', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
        { title: 'BI / Data Warehousing', icon: 'chart', items: ['Power BI', 'DAX', 'Modélisation en étoile', 'Data Warehouse'] },
      ],
      languagesTitle: 'Langues',
      languages: ['Arabe · langue maternelle', 'Français · intermédiaire', 'Anglais · intermédiaire'],
    },
    projects: {
      eyebrow: 'Sélection de projets',
      title: 'Du concret,\npensé pour durer.',
      intro: 'Projets académiques et applications full-stack, du système distribué à l’analyse décisionnelle.',
      featuredLabel: 'Projet phare',
      open: 'Ouvrir l’étude de cas',
      detail: 'Détail',
      code: 'Code',
      post: 'Publication',
      demo: 'Démo',
      close: 'Fermer',
      contextLabel: 'Contexte',
      architectureLabel: 'Architecture',
      challengesLabel: 'Défis',
      resultsLabel: 'Résultats',
      stackLabel: 'Stack technique',
      roleLabel: 'Contribution',
      footnote: 'Chaque carte ouvre une étude de cas : contexte, architecture, défis et résultats.',
      filters: [
        { id: 'all', label: 'Tous' },
        { id: 'fullstack', label: 'Full-stack' },
        { id: 'ai', label: 'IA / RAG' },
        { id: 'data', label: 'Data / BI' },
        { id: 'devops', label: 'DevOps' },
      ],
      items: [
        {
          number: '01', title: 'EazyBank Microservices', kind: 'MICROSERVICES · PROJET D’APPRENTISSAGE', year: '2026',
          impact: '5 services distribués, un flux Kafka asynchrone et une observabilité de bout en bout.',
          description: 'Une plateforme bancaire en microservices conçue comme environnement d’apprentissage et de démonstration, et non comme un système bancaire de production.',
          context: 'Projet d’apprentissage et de démonstration inspiré du cours EazyBytes, pensé pour comprendre une architecture microservices complète : configuration, découverte, passerelle, résilience et observabilité. Ce n’est pas un système bancaire de production.',
          architecture: 'Le client passe par un gateway qui route vers accounts, loans et cards. Config server et Eureka centralisent configuration et découverte ; Kafka et le service message portent les échanges asynchrones. Keycloak gère OAuth2/JWT, Redis le cache, et OpenTelemetry alimente Grafana LGTM pour les traces, logs et métriques. Le tout se déploie via Docker Compose ou Kubernetes.',
          challenges: [
            'Faire coexister config server, Eureka et gateway sans créer de dépendances circulaires au démarrage.',
            'Rendre les appels inter-services tolérants aux pannes avec Resilience4j.',
            'Unifier traces, logs et métriques dans une seule chaîne d’observabilité.',
            'Reproduire l’environnement complet en local avec Docker Compose puis Kubernetes.',
          ],
          results: [
            '5 services et une gateway opérationnels dans un environnement conteneurisé.',
            'Communication asynchrone Kafka avec service message dédié.',
            'Déploiement Kubernetes documenté et scripts de build automatisés.',
            'Observabilité de bout en bout via OpenTelemetry et Grafana LGTM.',
          ],
          stack: ['Java 21', 'Spring Boot', 'Spring Cloud · Config', 'Spring Cloud · Gateway', 'Eureka', 'Spring Data JPA', 'Apache Kafka', 'Resilience4j', 'Redis', 'Keycloak', 'OAuth2 / JWT', 'OpenTelemetry', 'Grafana LGTM', 'Docker Compose', 'Jib', 'Kubernetes'],
          role: 'Architecture, intégration des services et outillage DevOps.',
          github: 'https://github.com/youssef-sab04/Bank-Project', linkedin: null, demo: null, filters: ['fullstack', 'devops'], visual: 'bank', featured: true,
        },
        {
          number: '02', title: 'SNCF Railway Analytics', kind: 'DATA WAREHOUSE · BI', year: '2026',
          impact: '6 dashboards Power BI et un modèle en étoile pour piloter revenus, demande et canaux.',
          description: 'Un entrepôt décisionnel de bout en bout qui transforme des données ferroviaires brutes en indicateurs lisibles.',
          context: 'Projet d’analyse de données autour du réseau SNCF : partir de données ferroviaires hétérogènes pour construire un entrepôt décisionnel et des tableaux de bord destinés au pilotage.',
          architecture: 'Les données sont nettoyées puis chargées dans un entrepôt en étoile (table de faits ventes, dimensions gare, temps et canal). Power BI interroge ce modèle via DAX pour produire six dashboards et une analyse temporelle avancée.',
          challenges: [
            'Nettoyer et aligner des sources hétérogènes sans perdre la granularité métier.',
            'Concevoir un schéma en étoile lisible et performant pour les requêtes analytiques.',
            'Traduire des besoins métier en mesures DAX cohérentes et comparables dans le temps.',
          ],
          results: [
            'Six dashboards Power BI livrés et documentés.',
            'Un modèle en étoile réutilisable pour de nouvelles analyses.',
            'Suivi temporel des revenus, de la demande, des gares et des canaux.',
          ],
          stack: ['Power BI', 'DAX', 'Data Warehouse', 'Star Schema'],
          role: 'Modélisation décisionnelle, mesures DAX et visualisation.',
          github: null, linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7454283857798991872/?rcm=ACoAAFHdbQ8B2gWflmpUTtiKkQSnEcDZsFdEXAA', demo: null, filters: ['data'], visual: 'rail',
        },
        {
          number: '03', title: 'Système E-Commerce Full-Stack', kind: 'FULL-STACK · IA', year: '2026',
          impact: 'Un parcours d’achat complet, du panier à Stripe, avec un assistant RAG qui répond aux clients.',
          description: 'Une marketplace complète où clients, vendeurs et administrateurs évoluent dans des espaces dédiés, augmentée par un assistant conversationnel.',
          context: 'Projet full-stack visant à réunir une expérience e-commerce complète et un service IA indépendant : catalogue, panier, commandes, paiement et support client.',
          architecture: 'Le frontend React consomme une API Spring Boot adossée à PostgreSQL. Un service FastAPI séparé orchestre LangChain et le RAG pour répondre aux questions produits. Stripe gère le paiement et Docker isole chaque service.',
          challenges: [
            'Séparer l’API métier du service IA sans dupliquer la logique produit.',
            'Garder des réponses RAG pertinentes en s’appuyant sur un contexte produit fiable.',
            'Sécuriser des parcours et permissions distincts pour clients, vendeurs et admins.',
          ],
          results: [
            'Parcours panier → commande → paiement opérationnel avec Stripe.',
            'Assistant IA dédié au support et à la recommandation produit.',
            'Services conteneurisés, déployables indépendamment.',
          ],
          stack: ['React', 'Spring Boot', 'PostgreSQL', 'FastAPI', 'LangChain', 'RAG', 'Docker'],
          role: 'Architecture full-stack et intégration du service IA.',
          github: 'https://github.com/youssef-sab04/Ecom-Project', linkedin: 'https://www.linkedin.com/posts/youssef-sabbab-953b79323_softwareengineering-fullstackdevelopment-ugcPost-7505226231857102848-w99g/', demo: null, filters: ['fullstack', 'ai'], visual: 'shop',
        },
        {
          number: '04', title: 'Y-High · Gestion scolaire', kind: 'APPLICATION WEB', year: '2025',
          impact: '4 rôles connectés dans une seule plateforme de gestion scolaire.',
          description: 'Une plateforme multi-rôles qui centralise élèves, enseignants, classes et modules.',
          context: 'Projet de gestion scolaire conçu pour remplacer des processus dispersés par une application unique, avec des espaces dédiés aux administrateurs, enseignants, étudiants et parents.',
          architecture: 'Le frontend React/Bootstrap consomme une API Laravel Breeze adossée à MySQL. Chart.js restitue les indicateurs de suivi, tandis qu’un système de rôles contrôle l’accès aux différents espaces.',
          challenges: [
            'Modéliser classes, modules et utilisateurs sans duplication de données.',
            'Gérer des permissions distinctes pour quatre profils.',
            'Rendre les indicateurs compréhensibles pour l’administration.',
          ],
          results: [
            'CRUD étudiants et enseignants opérationnel.',
            'Gestion centralisée des classes et des modules.',
            'Accès différenciés Admin, Enseignant, Étudiant et Parent.',
          ],
          stack: ['React', 'Laravel Breeze API', 'MySQL', 'Chart.js', 'Bootstrap'],
          role: 'Conception et développement full-stack.',
          github: 'https://github.com/youssef-sab04/Management-School', linkedin: 'https://www.linkedin.com/posts/youssef-sabbab-953b79323_webdevelopment-react-laravel-ugcPost-7387498526953406464-taQt/', demo: null, filters: ['fullstack'], visual: 'school',
        },
      ] satisfies Project[],
    },
    certificates: {
      eyebrow: 'Apprentissage continu',
      title: 'Certifications.',
      intro: 'Des connaissances approfondies en IA appliquée et en architecture distribuée.',
      view: 'Agrandir le certificat',
      verify: 'Vérifier le certificat',
      items: [
        { title: 'AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents', organization: 'Udemy', date: '1 août 2026', image: '/assets/certificate-ai-engineer.webp', verificationUrl: 'https://ude.my/UC-99e22bb0-8436-4fb0-b43a-b3b67623ada8', category: 'IA · 33,5 h' },
        { title: 'Master Microservices with Spring Boot, Docker, Kubernetes', organization: 'Udemy · Eazy Bytes, Madan Reddy', date: '20 novembre 2026', image: '/assets/certificate-microservices.webp', verificationUrl: 'https://ude.my/UC-365d811d-3bba-4ad9-b1bd-bada7a5ee85e', category: 'Architecture · 38 h' },
      ] satisfies Certificate[],
    },
    contact: {
      eyebrow: 'Et maintenant ?',
      title: 'Un projet en tête ?\nParlons-en.',
      intro: 'Disponible pour échanger autour d’un stage PFE 2027, d’une opportunité ou d’une idée à construire.',
      email: 'E-mail',
      phone: 'Téléphone',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Localisation',
      place: 'Fès, Maroc',
      cta: 'M’écrire un e-mail',
    },
    footer: { made: 'Conçu avec intention, à Fès.', backTop: 'Retour en haut', rights: 'Tous droits réservés.', cv: 'Télécharger mon CV' },
  },
  en: {
    nav: [
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Engineering student · ENSA Fès',
      headline: 'Solid ideas.\nCode that moves.',
      descriptor: 'AI / LLM ENGINEER  ·  FULL-STACK DEVELOPER',
      intro: 'I build useful web products and intelligent experiences, from the first architecture sketch to production.',
      availability: 'Looking for a graduation internship · 2027',
      projectsCta: 'Explore projects',
      contactCta: 'Get in touch',
      cvCta: 'Download my CV',
      portraitAlt: 'Portrait of Youssef Sabbab',
      portraitNote: 'Currently in Fès, Morocco',
    },
    about: {
      eyebrow: 'A little context',
      title: 'Build, understand,\nmake an impact.',
      paragraphs: [
        'I am a third-year Computer Engineering student at ENSA Fès, specializing in full-stack development and AI engineering with LLMs and RAG.',
        'I enjoy connecting the dots: designing a backend architecture, bringing a clear interface to life, then making it reliable with tests and a thoughtful deployment.',
      ],
      note: 'Curious by nature, engineer by training.',
      labels: ['Full-stack', 'LLM & RAG', 'Architecture', 'CI / CD'],
      educationTitle: 'Education',
      ongoing: 'In progress',
      education: [
        { date: '2024 — present', title: 'Engineering Degree in Computer Engineering', organization: 'ENSA Fès', description: 'Third year of the engineering cycle, focused on full-stack development and AI.', tags: ['Computer Engineering', 'Full-stack', 'AI · LLM / RAG'], ongoing: true },
        { date: '2022 — 2024', title: 'Integrated Preparatory Classes', organization: 'ENSA Fès', description: 'Preparatory classes integrated into the engineering cycle.', tags: ['Preparatory classes', 'ENSA Fès'] },
        { date: '2021 — 2022', title: 'Baccalaureate · Physical Sciences', organization: 'Lycée Jasmin · Sefrou', description: 'Baccalaureate in Physical Sciences.', tags: ['Physical Sciences', 'Lycée Jasmin'] },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Learn by building.',
      achievementsTitle: 'Highlights',
      technologiesTitle: 'Technologies',
      entries: [
        {
          date: '2026', position: 'Application internship', project: 'Optical store management application', company: 'Cad-Optique', location: 'Fès, Morocco',
          summary: 'Designed and developed a full-stack management application deployed to production.',
          achievements: [
            'Designed and developed a production application covering 10+ business modules: customers, prescriptions, inventory, sales and quotes.',
            'Integrated an OCR pipeline (cloud OCR and custom parsing) to reduce manual prescription entry.',
            'Set up a GitHub Actions CI/CD pipeline (build-and-test, docker-build-push) to automate testing and deployment.',
            'Reached 80% test coverage using Mockito, @DataJpaTest and RestAssured.',
          ],
          technologies: ['React', 'Redux', 'Tailwind CSS', 'Spring Boot', 'Spring Security · JWT', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Cloudinary', 'WhatsApp API', 'JUnit', 'Mockito', 'RestAssured'],
          linkedin: 'https://www.linkedin.com/posts/youssef-sabbab-953b79323_pfa-internship-fullstack-ugcPost-7515509193173483520-DKO5/',
          github: 'https://github.com/youssef-sab04/Cad-Optique',
        },
        {
          date: '2025', position: 'Introductory internship', project: 'Mail management application', company: 'CHU Hassan II', location: 'Fès, Morocco',
          summary: 'Designed and developed an application to digitize mail management.',
          achievements: [
            'Designed and developed an application to digitize mail management.',
            'Structured the workflow around three roles: Agent, Manager and Administrator.',
            'Replaced the manual paper-based process with an application workflow.',
          ],
          technologies: ['React', 'Bootstrap', 'PHP', 'MySQL', 'Chart.js', 'Postman'],
          linkedin: 'https://www.linkedin.com/posts/youssef-sabbab-953b79323_soutenance-stage-daezveloppementweb-ugcPost-7384978607711989760-TQI7/',
          github: 'https://github.com/youssef-sab04/Gestion-des-courriers',
        },
      ],
      eventsTitle: 'Events & networking',
      eventsIntro: 'Participation in GITEX Africa in Marrakech.',
      eventPlace: 'Marrakech, Morocco',
      viewPost: 'View post',
      events: [
        { title: 'GITEX Africa 2026', url: 'https://www.linkedin.com/posts/youssef-sabbab-953b79323_gitexafrica-gitexafrica2026-technology-ugcPost-7448043768592809985-UBsW/' },
        { title: 'GITEX Africa 2025', url: 'https://www.linkedin.com/posts/youssef-sabbab-953b79323_gitexafrica-innovation-smartsolutions-ugcPost-7319339467167707136-AnSQ/' },
      ],
    },
    skills: {
      eyebrow: 'Toolbox',
      title: 'Where I build.',
      intro: 'Technologies used on hands-on projects, from business applications to AI systems.',
      groups: [
        { title: 'AI / LLM & RAG', icon: 'sparkles', items: ['LLM', 'RAG', 'AI Agents', 'LangChain', 'FastAPI', 'Python'] },
        { title: 'Backend · Spring Boot', icon: 'layers', items: ['Java', 'Spring Boot', 'Spring Security · JWT', 'REST API', 'Kafka', 'RabbitMQ'] },
        { title: 'Frontend · React', icon: 'panels', items: ['React', 'Redux', 'JavaScript', 'Tailwind CSS', 'Bootstrap'] },
        { title: 'DevOps', icon: 'network', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Prometheus', 'Grafana'] },
        { title: 'Databases', icon: 'database', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
        { title: 'BI / Data Warehousing', icon: 'chart', items: ['Power BI', 'DAX', 'Star Schema', 'Data Warehouse'] },
      ],
      languagesTitle: 'Languages',
      languages: ['Arabic · native', 'French · intermediate', 'English · intermediate'],
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Built for real life,\ndesigned to last.',
      intro: 'Academic projects and full-stack applications, from distributed systems to data analytics.',
      featuredLabel: 'Featured project',
      open: 'Open case study',
      detail: 'Details',
      code: 'Code',
      post: 'Post',
      demo: 'Demo',
      close: 'Close',
      contextLabel: 'Context',
      architectureLabel: 'Architecture',
      challengesLabel: 'Challenges',
      resultsLabel: 'Results',
      stackLabel: 'Tech stack',
      roleLabel: 'Contribution',
      footnote: 'Each card opens a case study: context, architecture, challenges and results.',
      filters: [
        { id: 'all', label: 'All' },
        { id: 'fullstack', label: 'Full-stack' },
        { id: 'ai', label: 'AI / RAG' },
        { id: 'data', label: 'Data / BI' },
        { id: 'devops', label: 'DevOps' },
      ],
      items: [
        {
          number: '01', title: 'EazyBank Microservices', kind: 'MICROSERVICES · LEARNING PROJECT', year: '2026',
          impact: 'Five distributed services, asynchronous Kafka messaging and end-to-end observability.',
          description: 'A microservices banking platform built as a learning and demonstration environment, not a production banking system.',
          context: 'A learning and demonstration project inspired by the EazyBytes course, designed to understand a complete microservices architecture: configuration, discovery, gateway, resilience and observability. It is not a production banking system.',
          architecture: 'Clients go through a gateway that routes to accounts, loans and cards. Config server and Eureka centralize configuration and discovery; Kafka and the message service carry asynchronous events. Keycloak handles OAuth2/JWT, Redis provides caching, and OpenTelemetry feeds Grafana LGTM for traces, logs and metrics. Everything runs through Docker Compose or Kubernetes.',
          challenges: [
            'Make config server, Eureka and the gateway coexist without circular startup dependencies.',
            'Keep inter-service calls fault-tolerant with Resilience4j.',
            'Unify traces, logs and metrics into a single observability pipeline.',
            'Reproduce the full environment locally with Docker Compose, then Kubernetes.',
          ],
          results: [
            'Five services and a gateway running in a containerized environment.',
            'Asynchronous Kafka communication with a dedicated message service.',
            'Documented Kubernetes deployment and automated build scripts.',
            'End-to-end observability through OpenTelemetry and Grafana LGTM.',
          ],
          stack: ['Java 21', 'Spring Boot', 'Spring Cloud · Config', 'Spring Cloud · Gateway', 'Eureka', 'Spring Data JPA', 'Apache Kafka', 'Resilience4j', 'Redis', 'Keycloak', 'OAuth2 / JWT', 'OpenTelemetry', 'Grafana LGTM', 'Docker Compose', 'Jib', 'Kubernetes'],
          role: 'Architecture, service integration and DevOps tooling.',
          github: 'https://github.com/youssef-sab04/Bank-Project', linkedin: null, demo: null, filters: ['fullstack', 'devops'], visual: 'bank', featured: true,
        },
        {
          number: '02', title: 'SNCF Railway Analytics', kind: 'DATA WAREHOUSE · BI', year: '2026',
          impact: 'Six Power BI dashboards and a star schema to steer revenue, demand and channels.',
          description: 'An end-to-end decision-support warehouse that turns raw railway data into clear indicators.',
          context: 'A data analytics project built around the SNCF network: starting from heterogeneous railway data to design a decision-support warehouse and dashboards for operational steering.',
          architecture: 'Data is cleaned and loaded into a star schema (sales fact table; station, time and channel dimensions). Power BI queries the model through DAX to deliver six dashboards and advanced time-based analysis.',
          challenges: [
            'Clean and align heterogeneous sources without losing business granularity.',
            'Design a readable and performant star schema for analytical queries.',
            'Turn business needs into consistent DAX measures comparable over time.',
          ],
          results: [
            'Six Power BI dashboards delivered and documented.',
            'A reusable star schema for further analysis.',
            'Time-based tracking of revenue, demand, stations and channels.',
          ],
          stack: ['Power BI', 'DAX', 'Data Warehouse', 'Star Schema'],
          role: 'Dimensional modeling, DAX measures and visualization.',
          github: null, linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7454283857798991872/?rcm=ACoAAFHdbQ8B2gWflmpUTtiKkQSnEcDZsFdEXAA', demo: null, filters: ['data'], visual: 'rail',
        },
        {
          number: '03', title: 'Full-Stack E-Commerce System', kind: 'FULL-STACK · AI', year: '2026',
          impact: 'A complete purchase journey, from cart to Stripe, with a RAG assistant answering customers.',
          description: 'A complete marketplace where customers, sellers and administrators work in dedicated spaces, enhanced by a conversational assistant.',
          context: 'A full-stack project bringing together a complete e-commerce experience and an independent AI service: catalog, cart, orders, payment and customer support.',
          architecture: 'The React frontend consumes a Spring Boot API backed by PostgreSQL. A separate FastAPI service orchestrates LangChain and RAG to answer product questions. Stripe handles payments and Docker isolates each service.',
          challenges: [
            'Separate the business API from the AI service without duplicating product logic.',
            'Keep RAG answers relevant by relying on reliable product context.',
            'Secure distinct journeys and permissions for customers, sellers and admins.',
          ],
          results: [
            'Cart → order → payment journey operational with Stripe.',
            'AI assistant dedicated to support and product recommendations.',
            'Containerized services that can be deployed independently.',
          ],
          stack: ['React', 'Spring Boot', 'PostgreSQL', 'FastAPI', 'LangChain', 'RAG', 'Docker'],
          role: 'Full-stack architecture and AI service integration.',
          github: 'https://github.com/youssef-sab04/Ecom-Project', linkedin: 'https://www.linkedin.com/posts/youssef-sabbab-953b79323_softwareengineering-fullstackdevelopment-ugcPost-7505226231857102848-w99g/', demo: null, filters: ['fullstack', 'ai'], visual: 'shop',
        },
        {
          number: '04', title: 'Y-High · School Management', kind: 'WEB APP', year: '2025',
          impact: 'Four connected roles in a single school management platform.',
          description: 'A multi-role platform that centralizes students, teachers, classes and modules.',
          context: 'A school management project designed to replace scattered processes with a single application, with dedicated spaces for administrators, teachers, students and parents.',
          architecture: 'The React/Bootstrap frontend consumes a Laravel Breeze API backed by MySQL. Chart.js renders tracking indicators, while a role system controls access to each space.',
          challenges: [
            'Model classes, modules and users without duplicating data.',
            'Manage distinct permissions for four profiles.',
            'Make indicators understandable for the administration.',
          ],
          results: [
            'Operational student and teacher CRUD.',
            'Centralized class and module management.',
            'Distinct Admin, Teacher, Student and Parent access.',
          ],
          stack: ['React', 'Laravel Breeze API', 'MySQL', 'Chart.js', 'Bootstrap'],
          role: 'Full-stack design and development.',
          github: 'https://github.com/youssef-sab04/Management-School', linkedin: 'https://www.linkedin.com/posts/youssef-sabbab-953b79323_webdevelopment-react-laravel-ugcPost-7387498526953406464-taQt/', demo: null, filters: ['fullstack'], visual: 'school',
        },
      ] satisfies Project[],
    },
    certificates: {
      eyebrow: 'Always learning',
      title: 'Certifications.',
      intro: 'Further learning in applied AI and distributed architecture.',
      view: 'Enlarge certificate',
      verify: 'Verify certificate',
      items: [
        { title: 'AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents', organization: 'Udemy', date: 'August 1, 2026', image: '/assets/certificate-ai-engineer.webp', verificationUrl: 'https://ude.my/UC-99e22bb0-8436-4fb0-b43a-b3b67623ada8', category: 'AI · 33.5 h' },
        { title: 'Master Microservices with Spring Boot, Docker, Kubernetes', organization: 'Udemy · Eazy Bytes, Madan Reddy', date: 'November 20, 2026', image: '/assets/certificate-microservices.webp', verificationUrl: 'https://ude.my/UC-365d811d-3bba-4ad9-b1bd-bada7a5ee85e', category: 'Architecture · 38 h' },
      ] satisfies Certificate[],
    },
    contact: {
      eyebrow: 'What comes next?',
      title: 'Have a project in mind?\nLet’s talk.',
      intro: 'Open to discuss a 2027 graduation internship, an opportunity or an idea worth building.',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Location',
      place: 'Fès, Morocco',
      cta: 'Send me an email',
    },
    footer: { made: 'Made with intention, in Fès.', backTop: 'Back to top', rights: 'All rights reserved.', cv: 'Download my resume' },
  },
} as const
