//1
var age = prompt("Entrez votre âge")
var ageRestant = 18 - age
if(age >= 18) {
    console.log('Vous êtes très vieux pour conduire')
} else {
    console.log('Il vous reste ' + ageRestant + ' ans pour conduire')
}
//2
var yourAge = prompt('Entre ton âge')
var myAge = 22
var diffAge = yourAge - myAge
if (yourAge > myAge) {
    console.log('Tu as ' + diffAge + ' plus que moi')
} else if (yourAge == myAge) {
    console.log('Nous avons les mêmes âge')
} else {
    console.log('Je suis plus âgé que toi')
}
//3 première méthode
var a = 15
var b = 25
if (a > b) {
    console.log(a + ' est supérieur à ' + b)
} else {
    console.log(b + ' est supérieur à ' + a)
}
//deuxième méthode
var c = 30
var d = 28
c > d
    ? console.log(c + ' est supérieur à ' + d)
    : console.log(d + ' est supérieur à ' + c)
//4
var e = prompt('Entre un nombre')
var q = e
if(e%2 == 0) {
    console.log(q + ' est un nombre pair')
} else {
    console.log(q + ' est un nombre impaire')
}