# Youssef Sabbab — Portfolio

Portfolio bilingue FR/EN réalisé avec Vite, React, TypeScript, Tailwind CSS v4 et i18next. Les apparitions et interactions reposent sur CSS, `IntersectionObserver` et des composants React légers.

## Lancer en local

```bash
npm install
npm run dev
```

Le site sera disponible à l’adresse affichée par Vite (par défaut `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Contenu

- Les textes FR/EN, projets, stages et liens sont regroupés dans `src/data/portfolio.ts`.
- Les réalisations de stage et les statistiques sont basées sur le CV fourni.
- Les dépôts GitHub et publications LinkedIn associés aux projets et stages sont renseignés dans `src/data/portfolio.ts`.
- Les dates affichées sur les certifications sont celles lisibles sur les images fournies.

## Déploiement

### Vercel

Importer le dépôt dans Vercel. Le framework Vite est détecté automatiquement. Utiliser `npm run build` comme commande de build et `dist` comme dossier de sortie.

### Netlify

Importer le dépôt dans Netlify avec `npm run build` comme commande de build et `dist` comme dossier de publication. Aucun routage SPA supplémentaire n’est requis pour ce site à page unique.

## Structure

- `src/data/` — contenu bilingue, informations de profil et liens
- `src/sections/` — sections de page
- `src/components/` — composants réutilisables, diagramme d’architecture et animations légères
- `public/assets/` — photo, CV et certificats optimisés

## Projets académiques

- **EazyBank Microservices** — Java 21, Spring Boot, Spring Cloud, Kafka, Docker Compose, Kubernetes.

- **SNCF Railway Analytics** — Power BI, DAX, Data Warehouse et modèle en étoile.

- **Système E-Commerce Full-Stack** — React, Spring Boot, PostgreSQL, FastAPI, LangChain et RAG.

- **Y-High · Gestion scolaire** — React, Laravel Breeze API, MySQL, Chart.js et Bootstrap.
