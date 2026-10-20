# Lab 6 | Gestion des pays du G20

Application web réalisée avec **Node.js**, **Express**, **EJS** et **MySQL**. Elle permet de consulter les pays du G20, d'en ajouter ou d'en supprimer, et d'afficher plusieurs résultats filtrés.

## Fonctionnalités

- Afficher la liste des pays et leurs données : capitale, population, PIB, densité, statut de visite et commentaires.
- Ajouter un pays depuis un formulaire.
- Supprimer un pays à partir de son nom.
- Explorer six requêtes SQL prédéfinies.

## Prérequis

- Node.js et npm
- Un serveur MySQL en fonctionnement
- Une base de données `PaysG20` contenant une table `caracpays`

La table doit contenir les colonnes utilisées par l'application : `ID`, `Pays`, `Capitale`, `NbHab`, `PIB`, `DensitePop`, `dejaVisite` et `Commentaires`. Le dépôt ne fournit pas de script de création ou de remplissage de cette table.

Les paramètres de connexion MySQL sont définis dans `app.js` et les modules de `routes/`. Adapte-les à ton serveur local avant de lancer le projet.

## Installation et démarrage

Depuis le dossier du projet :

```bash
npm install
npm start
```

Ouvre ensuite [http://localhost:3000](http://localhost:3000) dans ton navigateur. Le serveur utilise le port `3000`.

## Pages

| Adresse | Contenu |
| --- | --- |
| `/` | Page d'accueil |
| `/pays` | Liste des pays |
| `/insert` | Formulaire d'ajout et liste des pays |
| `/delete` | Formulaire de suppression et liste des pays |
| `/request1` à `/request6` | Résultats des six requêtes SQL |

Les requêtes correspondantes sont également regroupées dans `Requet.sql`.

## Organisation du projet

```text
app.js                 Configuration et démarrage du serveur Express
routes/                Routes de l'application et requêtes MySQL
views/pages/           Pages EJS
views/partials/        En-tête, pied de page et métadonnées partagés
public/css/            Feuille de style
public/js/             JavaScript côté navigateur
Requet.sql             Requêtes SQL du laboratoire
```
