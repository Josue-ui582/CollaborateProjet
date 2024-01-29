// 1 Développe un petit script qui génère n'importe quel nombre de caractères aléatoires
// Définir les caractères aléatoires possibles
const charactere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

// Stocker l'identifiant générer
let randomidd = ''

// Générer un identifiant de plusieurs caractères
for(s = 0; s < 6; s++){
    // Obtenir un identifiant aléatoire
    const randomIndexe = Math.floor(Math.random() * charactere.length)

    // Ajouter le caractère correspondant à l'index au résultat
    randomidd += charactere.charAt(randomIndexe)
}

// Afficher l'identifiant générer
console.log(randomidd)

// 3 Écrivez un script qui génère un nombre hexadécimal aléatoire
// Les caractères hexadecimaux possible
const charactereHex = '0123456789abcdef'

 // Stockage du nombre hexadecimal
let randomHex = '#';

// Nombre hexadecimal à générer sans compter 'Ox'
for (i = 0; i < 6; i++){
    // Obtenir un index aléatoire
    const hexadecimalIndex = Math.floor(Math.random() * charactereHex.length);

    // Ajout de l'index corespondant
    randomHex += charactere.charAt(hexadecimalIndex)
}
console.log(randomHex)

// 4 Écrivez un script qui génère un numéro de couleur RVB aléatoire

 // À l’aide du tableau de pays ci-dessus, créez le nouveau tableau suivant
 // Le tableau principal
 let countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

// Convertie chaque chaîne de caractère en majuscule
for (i = 0; i < countries.length; i++) {
    countries[i] = countries[i].toUpperCase()
}

// Afficher un tableau avec tous ses éléments en majuscule
console.log(countries)

// 5 En utilisant le tableau de pays ci-dessus, créez un tableau pour la longueur des pays
// Trouver la longueur de chaque élément du tableau
for (i = 0; i < countries.length; i++) {
    countries[i] = countries[i].length
}

// Affichage du tableau
console.log(countries)

//Utilisez le tableau country pour créer le tableau de tableaux suivant 
let arr = [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]

const arr1 = ['Albania', 'ALB', 7]
const arr2 = ['Bolivia', 'BOL', 7]
const arr3 = ['Canada', 'CAN', 6]
const arr4 = ['Denmark', 'DEN', 7]
const arr5 = ['Ethiopia', 'ETH', 8]
const arr6 = ['Finland', 'FIN', 7]
const arr7 = ['Germany', 'GER', 7]
const arr8 = ['Hungary', 'HUN', 7]
const arr9 = ['Ireland', 'IRE', 7]
const arr10 = ['Iceland', 'ICE', 7]
const arr11 = ['Japan', 'JAP', 5]
const arr12 = ['Kenya', 'KEN', 5]

const arrn = arr1 = arr2 = arr3 = arr4 = arr5 = arr6 = arr7 = arr8 = arr9 = arr10 = arr11 = arr12
for(i = 0; i < arrn.length; i++) {
    console.log(arrn)
}

