# Site de téléchargement APK pour GitHub Releases

Petit site statique pour afficher un bouton de téléchargement d'un fichier APK stocké dans une release GitHub.

## Comment utiliser

1. Ouvre `index.html` dans ton navigateur ou déploie le dossier sur une plateforme gratuite.
2. Dans `script.js`, remplace `TON_UTILISATEUR_GITHUB/TON_DEPOT` par ton dépôt GitHub.
3. Si tu veux utiliser une release précise, remplace `tag` par le tag exact (`v1.0.0`).
4. Enregistre, recharge la page et clique sur `Télécharger l'APK`.

## Hébergement gratuit conseillé

- GitHub Pages : hébergement gratuit pour les sites statiques.
- Netlify : déploiement très simple à partir de GitHub.
- Vercel : déploiement facile avec support d'applications statiques.

## Exemple de dépôt GitHub

- `facebook/react`
- `expo/expo`

> Note : GitHub API impose un quota de requêtes publiques. Si tu utilises beaucoup la page, pense à ajouter un token GitHub dans le script ou à héberger le site avec un proxy.
