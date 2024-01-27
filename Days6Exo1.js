//1
for(let i = 0; i <= 10; i++){
    console.log(i)
}
let j = 0
while(j <= 10){
    console.log(j)
    j++
}
let k = 0
do {
    console.log(k)
    k++
} while(k <= 10)
//2
for(let a = 10; a >= 0; a--){
    console.log(a)
}
let b = 10
while(b >= 0){
    console.log(b)
    b--
}
let c = 10
do {
    console.log(c)
    c--
} while(c >= 0)
//4
for (let l = 0; l <= 7; l++){
    
}
//5
for (let n = 0; n <= 10; n++){
    console.log(`${n} * ${n} = ${n*n}`)
}
//6
for (let v = 0; v <= 10; v++){
    console.log(`${v}  ${v**2}  ${v**3}`)
}
//7
for(let d = 0; d <= 100; d = d + 2){
    console.log(d)
}
//8
for(let d = 1; d <= 100; d = d + 2){
    console.log(d)
}
//9
for(let d = 2; d <= 100; d ++){
    console.log(d)
}
//10
let sum = 0
for(let d = 1; d <= 100; d++){
    sum  = sum + d
}
console.log(sum)
//13
let tableau = []
for (let t = 0; t < 5; t++){
    let nombre = Math.floor(Math.random()*50 + 50);
    tableau.push(nombre)
}
console.log(tableau)
//14
const randomNumber = Math.floor(Math.random()*50 + 50);
const randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(randomNumber);
}
console.log(randomArray);

// 15 Développez un petit script qui génère un identifiant aléatoire à six caractères

// Définir les caractères aléatoires possibles
const characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// stocker l'identifiant générer
let randomId = '';

// Générer un identifiant de six caractères
for(i = 0; i < 6; i++){
    // obtenir un index aléatoire
    const randomIndex = Math.floor(Math.random() * characters.length)

    // Ajout du caractère correspondant à l'index au résultat
    randomId  += characters.charAt(randomIndex)
}

// Afficher l'identifiant générer
console.log(randomId)