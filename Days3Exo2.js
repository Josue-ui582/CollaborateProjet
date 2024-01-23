let base = prompt('Entrez la base en mètre')
let hight = prompt('Entrez la hauteur mètre')
let area = (base*hight)*0.5
alert("L\'aire de votre triangle est : " + area)
//2
let hauteure = prompt('Entrez la valeur du premier côté')
let bas = prompt('Entrez la valeur du deuxième côté')
let hypothénus = prompt('Entrez la valeur du troisième côté')
let perimeter = hauteure + bas + hypothénus;
alert("Le périmètre de votre triangle est : " + perimeter)
//3
let length = prompt("Entrez la longueur")
let large = prompt("Entrez la largeur")
let perim = length + large;
let aire = length*large
alert("Le périmètre de votre rectangle est :" + perim)
alert("L\'aire de votre rectangle est :" + aire)
//4
let rayon = prompt("Entrez le rayon de votre cercle")
let pi = 3.14
let air = pi*rayon**2;
alert("L\'aire de votre cercle est : " + air)
//5
//6
let x1 = 2
let x2 = 6
let y1 = 2
let y2 = 10
let pente = (y2 - y1)/(x2 - x1)
console.log(pente)
//7
//8
var x = 0
var x = -3
let y = (x**2 + 6*x + 9)
console.log(y)
//9
var hours = prompt('Entrez votre heure de travail')
var prixhoraire = prompt('Entrez votre tarif horaire')
var salaire = hours*prixhoraire
alert('Votre salaire est : ' + salaire)
//10
var nom = prompt('Entrez votre nom')
if (nom.length > 7) {
    alert("Votre prénom est long")
} else {
    alert("Votre prénom n'est pas long")
}
//11
var firstNamee = prompt("Insérez votre nom de famille")
var secondName = prompt("Insérez votre prénom")
if(secondName.length > firstNamee.length) {
    alert('Ton prénom est plus long que ton nom')
} else {
    alert('Ton nom est plus grand que ton prénom')
}
//12
var myAge = prompt("Mon âge")
var yourAge = ("Entre ton âge")
if (myAge && yourAge) {
    var ageDiff = parseInt(myAge) - parseInt(yourAge); 
    if (ageDiff > 0) {
        console.log("J'ai" + ageDiff + "ans plus que moi");
    } else if (ageDiff < 0) {
        console.log("Tu as" + Math.abs(ageDiff) + "ans que toi");
    } else {
        console.log("Nous avons les mêmes âges!");
    }
}
//13
var now = new Date()
var brithYear = prompt("Entrez votre année de naissance")
var calcul = now.getFullYear - brithYear
if (calcul >= 18) {
    alert("Tu as" + calcul + "ans tu peuxconduire")
} else if (calcul < 18){
    var diffAge = 18 - calcul
    alert("Il te reste" + diffAge + "ans pour conduire")
}
//14
var age = prompt("Insère ton âge actuel")
var ageInSecond = age*31536000
alert("Tu as vécu pendant"+ ageInSecond +"secondes")
//15
var nowe = new Date()
const years = nowe.getFullYear()
const month = nowe.getMonth()
const days = nowe.getDay()
const hourse = nowe.getHours()
const minutes = nowe.getMinutes()
console.log(`${years}-${month}-${days} ${hourse}:${minutes}`)
console.log(`${days}-${month}-${years} ${hourse}:${minutes}`)
console.log(`${days}/${month}/${years} ${hourse}:${minutes}`)
