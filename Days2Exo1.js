//Corriger de l'exercice 1
//1-déclaration d'une variable
let challenge = '  30 Days Of JavaScript'
//2-affichage de la donnée du variable
console.log(challenge)
//3-la taille de la valeur du variable
console.log(challenge.length)
//4-changement pour grand caractère
console.log(challenge.toUpperCase())
//5-changement pour petit caractère
console.log(challenge.toLowerCase())
//6-je tranche la première sous-chaîne
console.log(challenge.substring(0, 3))
//7-Je découpe les exprexion l'une de l'autre
console.log(challenge.substring(3))
//8-je vérifie si la chaine contient Script
console.log(challenge.includes('Script'))
//9-je divise la chaine en un tableau
console.log(challenge.split(''))
//10
console.log(challenge.split(' '))
//11
let reseau = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon '
console.log(reseau.split(','))
//12
console.log(challenge.replace('JavaScript', 'Python'))
//13
console.log(challenge.charAt('15'))
//14
console.log(challenge.charCodeAt('J'))
//15
console.log(challenge.indexOf('a'))
//16
console.log(challenge.lastIndexOf('a'))
//17
let tence = 'Vous ne pouvez pas terminer une phrase par parce que parce que parce que c\'est une conjonction'
console.log(tence.indexOf('parce que'))
//18
let snt = 'Vous ne pouvez pas terminer une phrase par parce que parce que parce que c\'est une conjonction'
console.log(snt.lastIndexOf('parce que'))
//19
let sea = 'Vous ne pouvez pas terminer une phrase par parce que parce que parce que c\'est une conjonction'
console.log(sea.search('parce que'))
//20
console.log(challenge.trim())
//21
console.log(challenge.startsWith('  '))
//22
console.log(challenge.endsWith('Script'))
//23
console.log(challenge.match('a'))
//24
let crsc = '30 days'
console.log(crsc.concat(' of JavaScript'))
//25
console.log(crsc.repeat('2'))