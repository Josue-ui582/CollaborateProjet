// 1- L'équation linéaire est calculée comme suit : ax + by + c = 0 . Écrivez une fonction qui calcule la valeur d'une équation linéaire, solveLinEquation 
function solveLinEquation (a, b, c, x) {
    // Calcul de la valeur de l'équation pour une valeur aléatoire de x
    return (-a * x - c)/b
}
// Différentes valeurs des arguments de la fonction
let coefficientA = 2;
let coefficientB = 3;
let coefficientc = -6;
let xValeur = Math.floor(Math.random()*4 + 10)
let yValeur = solveLinEquation(coefficientA, coefficientB, coefficientc, xValeur)
console.log(`Pour x = ${xValeur} y = ${yValeur}`)

// 2- L'équation quadratique est calculée comme suit : ax2 + bx + c = 0 . Écrivez une fonction qui calcule la ou les valeurs d'une équation quadratique, solveQuadEquation
function solveQuadEquation (i, j, k) {
    // Calcul du discriminant
    let discriminant = j * j - 4 * i * k

    // Vérification du discriminant
    if (discriminant > 0) {
        // Alors l'équation admet deux solutions
        let root1 = (-j + Math.sqrt(discriminant)) / (2 * j)
        let root2 = (-j - Math.sqrt(discriminant)) / (2 * j)
        return [root1, root2];
    } else if (discriminant === 0) {
        let root = (-j / 2 * i)
        return  [root];
    } else {
        // L'équation n'admet pas de solution
        return [];
    }
}

// Valeur de différents argument
let i = 1;
let j = -4;
let k = 3;
let solution = solveLinEquation(i, j, k)
console.log('Solution.s de l\'équation quadratique : ', solution)

// 3- Déclarez un nom de fonction printArray . Il prend le tableau comme paramètre et imprime chaque valeur du tableau
function printArray (array) {
    for (i = 0; i < array.length; i++ ) {
        console.log(array[i])
    }
    return array 
}
console.log(printArray([1, 2, 3, 4, 5]))

// 4- Écrivez un nom de fonction showDateTime qui affiche l'heure dans ce format : 08/01/2020 04:08 à l'aide de l'objet Date
function showDateTime () {
    let currentDate  = new Date()
    let day = currentDate.getDay().toString().padStart(2, '0')
    let month = currentDate.getMonth().toString().padStart(2, '0')
    let year = currentDate.getFullYear()
    let hours = currentDate.getHours().toString().padStart(2, '0')
    let minutes = currentDate.getMinutes().toString().padStart(2, '0')
    console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}
console.log(showDateTime())

// 5- Déclarez un nom de fonction swapValues ​​. Cette fonction échange la valeur de x en y
function swapValues  (x, y) {
    return (`x => ${y}, y => ${x}`) 
} 
console.log(swapValues(5, 6))