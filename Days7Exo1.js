// 1- Déclarez une fonction fullName et elle affiche votre nom complet
function fullName () {
  let firstName = 'Hounhoui'
  let space = ' '
  let lastName = 'Josué'
  let sum = lastName + space + firstName
  return sum
}
// Afficharge du nom complet
console.log(fullName())

// 2- Déclarez une fonction fullName et maintenant elle prend firstName, lastName comme paramètre et elle renvoie votre nom complet

// 3- Déclarez une fonction addNumbers et elle prend deux deux paramètres et renvoie la somme
function addNumbers  ( num1, num2) {
  let sum = num1 + num2
  return sum
}
// Afficharge de la somme
console.log(addNumbers(30, 50))

// 4- L'aire d'un rectangle est calculée comme suit : aire = longueur x largeur . Écrivez une fonction qui calcule AreaOfRectangle
function AreaOfRectangle (longueur, largeur) {
  let aire = longueur * largeur
  return aire
}
// Afficharge le l'aire
console.log(AreaOfRectangle(10, 5))

// 5- Le périmètre d'un rectangle est calculé comme suit : périmètre= 2x(longueur + largeur) . Écrivez une fonction qui calcule périmètreOfRectangle
function périmètreOfRectangle (long, larg) {
  let perimètre = (long + larg)*2
  return perimètre
}
// Afficharge du périmètre
console.log(périmètreOfRectangle(20, 30))

// 6- Le volume d'un prisme rectangulaire est calculé comme suit : volume = longueur x largeur x hauteur . Écrivez une fonction qui calcule volumeOfRectPrism
function volumeOfRectPrism (longe, large, hauteur) {
  let volume = longe * large * hauteur
  return volume
}
// Afficharge du volume
console.log(volumeOfRectPrism(20, 10, 5))

// 7- L'aire d'un cercle est calculée comme suit : aire = π xrxr . Écrivez une fonction qui calcule AreaOfCircle
function AreaOfCircle (pi, r) {
  let air = pi * r**2
  return air
}
// Afficharge de l'aire du cercle
console.log(AreaOfCircle(3.14, 3))

// 8- La circonférence d'un cercle est calculée comme suit : circonférence = 2πr . Écrivez une fonction qui calcule circumOfCircle
function circumOfCircle (PI, R) {
  let circum = 2*PI*R
  return circum
}
// Afficharge de la circonférence
console.log(circumOfCircle(3.14, 6))

// 9- La densité d'une substance est calculée comme suit : densité= masse/volume . Écrivez une fonction qui calcule la densité
function densiteOfsubstance (masse, volume) {
  let densite = masse / volume
  return densite
}
// Afficharge de la densité
console.log(densiteOfsubstance(50, 100))

// 10- La vitesse est calculée en divisant la distance totale parcourue par un objet en mouvement divisée par le temps total mis. Écrivez une fonction qui calcule la vitesse d'un objet en mouvement, speed
function speed (distance, temps) {
  let speed = distance / temps
  return speed
}
// Afficharge de la vitesse
console.log(speed(4000, 360))

// 11- Le poids d'une substance est calculé comme suit : poids = masse x gravité . Écrivez une fonction qui calcule le poids
const poids = (masse, gravité) => {
  return masse * gravité
}
// Afficharge du poid
console.log(poids(50, 9.8))

// 12- La température en oC peut être convertie en oF en utilisant cette formule : oF = (oC x 9/5) + 32 . Écrivez une fonction qui convertit oC en oF convertCelsiusToFahrenheit
const convertCelsiusToFahrenheit = (oC) => {
  return oF = (oC * 9/5) + 38
}
// Afficharge de la conversion de oC en oF
console.log(convertCelsiusToFahrenheit(40))

// 13- L'indice de masse corporelle (IMC) se calcule comme suit : imc = poids en Kg / (taille x taille) en m2 . Écrivez une fonction qui calcule l'imc . L'IMC est utilisé pour définir de manière générale différents groupes de poids chez les adultes de 20 ans ou plus. Vérifiez si une personne a un poids insuffisant, normal, en surpoids ou obèse sur la base des informations fournies ci-dessous
// Réponse à la question en générale
const IMC = (poid, taille) => {
  let IMC = poid/taille**2
  if (IMC < 18.5) {
    console.log('Vous avez une Insuffisance pondérale')
  } else if (IMC <= 24.9) {
    console.log('Vous avez un Poids normal')
  } else if (IMC <= 29.9) {
    console.log('Vous êtes en Surpoids ')
  } else if (IMC >= 30) {
    console.log('Vous êtes obèsse ')
  } 
  return IMC
}
// Afficharge de l'IMC
console.log(IMC(500,3))

// 14- Écrivez une fonction appelée checkSeason , elle prend un paramètre de mois et renvoie la saison : Automne, Hiver, Printemps ou Été
function checkSeason () {
  let checkSeason = prompt('Entrez une saison')
  if (checkSeason === 'Janvier') {
    console.log('La saison est l\'été')
  } else if (checkSeason === 'Février') {
    console.log('La saison est printemps')
  } else if (checkSeason === 'Mars') {
    console.log('La saison est autonome')
  } else if (checkSeason === 'Avril') {
    console.log('La saison est hiver')
  }
  return checkSeason
}
// Afficharge de la saison
console.log(checkSeason())

// 15- Math.max renvoie son plus grand argument. Écrivez une fonction findMax qui prend trois arguments et renvoie leur maximum sans utiliser la méthode Math.max
function findMax  (a, b, c) {
  if (a > b && a > c) {
    return a
  } else if (b > a && b > c) {
    return b
  } else if (c > a && c > b) {
    return c
  }
  return findMax
}
// Afficharge de la valeur la plus grande
console.log(findMax(-10, 20, 30))