//1
const empty = Array()
console.log(empty)
//2
const arr = ['maman', 'papa', 'enfant', 'cousine', 'nièce']
//3
console.log(arr.length)
//4
console.log(arr[0], arr[2], arr[4])
//5
const  MixedDataTypes = [255, 'banane', true, 50.9, 'orange', 'mangue', 90, 'beigné']
console.log(MixedDataTypes.length)
//6
const itCompanies  = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7
console.log(itCompanies)
//8
console.log(itCompanies.length)
//9
console.log(itCompanies[0], itCompanies[1], itCompanies[6])
//10
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6])
//11
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
//12
console.log(itCompanies.toString())
//13
const entreprise = prompt('Entrez le nom d\'une entreprise')
if(itCompanies.includes(entreprise)) {
    console.log(entreprise)
} else {
    console.log('L\'entreprise est introuvable')
}
//14
const repetedword = itCompanies.includes(/[A-Za-z]/)
console.log(repetedword)
//15
itCompanies.sort()
console.log(itCompanies)
//16
itCompanies.reverse()
console.log(itCompanies)
//17
console.log(itCompanies.slice(0, 3))
//18
console.log(itCompanies.slice(4, 7))
//19
console.log(itCompanies.slice(0, 1, 2, 3, 4, 5, 6, 7, 8))
//20
console.log(itCompanies.splice(7))
//21
console.log(itCompanies.splice(1, 5))
//22
console.log(itCompanies.splice(8))