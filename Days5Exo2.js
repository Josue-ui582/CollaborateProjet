// 1- Créez un fichier country.js distinct et stockez le tableau des pays dans ce fichier, créez un fichier web_techs.js séparé et stockez le tableau webTechs dans ce fichier. Accédez aux deux fichiers dans le fichier main.js
// 2- Supprimez d’abord toutes les ponctuations, remplacez la chaîne par un tableau et comptez le nombre de mots dans le tableau
// Je remplace toutes les ponctuations
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// Efface toutes les exprexions qui ne sont pas présent dans regExp
const regExp = /[^a-zA-Z0-9]/g;
// Affichage de la nouvelle chaîne de caractère
console.log(text.replace(regExp, ' '))
// Formation d'un nouveau tableau
let word = text.replace(regExp, ' ')
console.log(word)
console.log(word.split(' '))
// 3- Dans le panier suivant, ajoutez, supprimez, modifiez des articles
// Le panier principal
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// Ajout de "viande" au début du panier
console.log(shoppingCart.unshift('viande'))
console.log(shoppingCart)
// Ajout du "sucre" à la fin du panier
console.log(shoppingCart.push('sucre'))
console.log(shoppingCart)
// Suppression du miel
console.log(shoppingCart.splice(1, 1))
console.log(shoppingCart)
// Remplacement du mot thé en thé vert
shoppingCart[2] = 'Thé vert'
console.log(shoppingCart)
// 4- Dans le tableau des pays, vérifiez si « Éthiopie » existe dans le tableau s'il existe, imprimez « ÉTHIOPIE ». S'il n'existe pas, ajoutez-le à la liste des pays.
// 6- Concaténez les deux variables suivantes et stockez-les dans une variable fullStack
// Déclaration des variables
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
// Déclaration de la variable fullstack qui concate les deux variable
const fullStack = frontEnd.concat(backEnd)
// Affichage de la forme concaté
console.log(fullStack) 