var yearMonth = prompt('Insérez un mois de l\'année')
if (yearMonth === 'janvier' || yearMonth === 'mars' || yearMonth === 'mai' || yearMonth === 'juillet' || yearMonth === 'août' || yearMonth === 'octobre' || yearMonth === 'décembre') {
    console.log(yearMonth + ' compte 31 jours')
} else if (yearMonth === 'février') {
    console.log(yearMonth + ' compte 28 jours')
} else if (yearMonth === 'avril' || yearMonth === 'juin' || yearMonth === 'septembre' || yearMonth === 'novembre') {
    console.log(yearMonth + ' compte 30 jours')
}