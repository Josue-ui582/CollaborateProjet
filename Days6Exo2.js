// Développe un petit script qui génère n'importe quel nombre de caractères aléatoires
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

//Écrivez un script qui génère un nombre hexadécimal aléatoire
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

// Écrivez un script qui génère un numéro de couleur RVB aléatoire

 // À l’aide du tableau de pays ci-dessus, créez le nouveau tableau suivant
 // Le tableau principal
 const countries = [
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

countries.sort()


