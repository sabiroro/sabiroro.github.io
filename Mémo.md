# Mémo web

## Mémo HTML

La base du fichier index.htlm :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>/*Nom du site*/</title>
  </head>
  <body></body>
</html>
```

Les balises principales :

- `<header>` – contient le contenu d’introduction ou de navigation.
- `<main>` – représente le contenu principal d’une page web.
- `<div>` – définit une section dans un document HTML.
- `<footer>` – contient le contenu affiché au bas de votre site web.

Pour le texte :

- `<h1>` et `<p>` – contiennent les titres et les paragraphes. Utilisez la balise `<br>` pour créer un saut de ligne si le texte est trop long.
- `<nav>` et `<a>` – spécifient la barre de navigation et son élément d’ancrage. Utilisez l’attribut href pour spécifier l’URL liée à l’ancre.
  - On peut aussi ajouter `target="blanck"` pour ouvrir dans un nouvel onglet
  - `href="/*URL*/"` pour aller à l'_URL_ donnée
  - `target="blanck"` pour ouvrir dans un nouvel onglet
- `<img>` – contient l’élément image. Il contient l’attribut img src, qui spécifie le lien ou le nom du fichier image.
  - `alt="Image non chargée/trouvée`

---

## Mémo CSS

Ajoutez dans le `<head>` : `<link rel="stylesheet" href="style.css">`

---

## Mémo JS/TS

Ajouter dans le `<head>` : `<script src="code.js" defer></script>`

```javascript
<input type="text" id="inputEcriture" name="inputEcriture">
```

Dans cet exemple, l’attribut type=”text” permet de définir le type de données que l’utilisateur peut saisir :

    text : pour saisir un texte ;

    password : pour saisir un texte tout en cachant ce qui est saisi ;

    email : pour saisir un texte et vérifier que son format correspond bien à celui d’un e-mail ;

    number : pour saisir un nombre ;

    checkbox : pour afficher une case à cocher ;

    radio : pour afficher un bouton radio, c’est-à-dire un bouton qui permet à l'utilisateur de sélectionner un seul élément dans une liste ;

    date : pour saisir une date à l’aide d’un calendrier qui s’affiche au clic sur le champ.

N’hésitez pas à explorer la documentation pour découvrir d’autres types de données.
