//1
let originalSentence = 'L\'amour est la meilleure chose au monde. Certains ont trouvé leur amour et d\'autres cherchent toujours  leur amour'
let wordToCount = 'amour'
let newSentence = originalSentence.split(wordToCount)
console.log(newSentence)
let count = newSentence.length - 1
console.log(count)
//2
var sentences = 'Vous ne pouvez pas terminer une phrase avec parce que parce que parce que c\'est une conjonction'
var regEx = /parce que/gi
console.log(sentences.match(regEx))
//3
var exprexion = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
var expr = '%@$&#;?'
var nexExpression = exprexion.replace('%@$&#;?')
console.log(nexExpression)
//4
let salaire = 5000
let prime = 10000
let revenusCours = 15000
console.log(salaire*12 + prime + revenusCours*12)