var score = prompt('Entrez votre score pour rechercher votre note')
if (score === 'UN') {
    console.log(Math.random()+80 + 19)
} else {
    console.log('Veuillez resaisir votre score')
} if (score === 'B') {
    console.log(Math.random()+70 + 18)
} else {
    console.log('Veuillez resaisir votre score')
} if (score === 'C') {
    console.log(Math.random()+60 + 8)
} else {
    console.log('Veuillez resaisir votre score')
} if (score === 'D') {
    console.log(Math.random()+50 + 8)
} else {
    console.log('Veuillez resaisir votre score')
} if (score === 'F') {
    console.log(Math.random()+48 + 50)
} else {
    console.log('Veuillez resaisir votre score')
}
//2
var input = prompt('Entrez une saison');
if (input === 'septembre' || input === 'octobre' || input === 'novembre') {
    console.log('La saison est autonome')
} else if (input === 'décembre' || input === 'janvier' || input === 'février') {
    console.log('La saison est l\'hiver')
} else if (input === 'mars' || input === 'avril' || input === 'mai') {
    console.log('La saison est printemps')
} else if (input === 'juin' || input === 'juillet' || input === 'août') {
    console.log('La saison est l\'été')
} else {
    console.log('Vous n\'avez pas inscrit un moi de l\'année')
}
//3
var weekDays = prompt('Entrez un jours de la semaine')
if (weekDays === 'Lundi' || weekDays === 'Mardi' || weekDays === 'Mercredi' || weekDays === 'Jeudi' || weekDays === 'Vendredi') {
    console.log(weekDays + ' est un jours ouvrable')
} else {
    console.log(weekDays + ' est week-end')
}