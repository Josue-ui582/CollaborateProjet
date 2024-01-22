//1
let phase = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(phase)
//2
let teresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(teresa)
//3
let numr = '10'
let numb = parseInt(numr)
console.log(numb)
//4
let chiffre = '9.8'
let chifree = parseFloat(chiffre)
console.log(chifree)
console.log(Math.round(9.8))
//5
let word1 = 'Python'
let word2 = 'Jargon'
console.log(word1.includes('on'), word2.includes('on'))
//6
let word3 = 'J\'espère que ce cours n\'est pas plein de Jargon'
console.log(word3.includes('Jargon'))
//7
let randomNum = Math.random()
console.log(randomNum)
let Nuum = Math.floor(Math.random() * 100)
console.log(Nuum)
//8 
let randomNumber = Math.random()*50 + 50;
console.log(randomNumber)
//9
let randomNumber1 = Math.floor(Math.random() * 255)
console.log(randomNumber1)
//10
let randomNum1 = Math.floor(Math.random()*'JavaScript'.length)
let randomNum2 = 'JavaScript'.charAt(randomNum1)
console.log(randomNum2)
//11
console.log('\t1\t1\t1\t1\t1')
console.log('\t2\t1\t2\t4\t8')
console.log('\t3\t1\t3\t9\t27')
console.log('\t4\t1\t4\t16\t64')
console.log('\t5\t1\t5\t25\t125')
//12
let originalSring = 'Vous ne pouvez pas terminer une phrase avec parce que parce que parce que c\'est une conjonction'
let substringToRemove = 'parce que parce que parce que'
let newString = originalSring.substr(0, originalSring.indexOf(substringToRemove));
console.log(newString)