//1
const firstName = 'Hounhoui'
const lastName = 'Josué'
const country = 'Bénin'
const city = 'Cotonou'
const agee = 22
let isMarried = false
let year = 2024
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof agee, typeof isMarried, typeof year)
//2
console.log(10 === '10')
//3
console.log(parseInt('10') === 10)
//4
console.log(3 !== '3')
console.log(true)
console.log((5 == '5'))

console.log(7 !== 7)
console.log(0 === false)
console.log(1 === true)
//5
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
let language1 = 'Python'
let language2 = 'Jargon'
console.log(language1.length)
console.log(language2.length)
console.log(language1.length != language2.length)
//6
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!(language1.includes('on'), language2.includes('on')))
//7
const nows = new Date()
console.log(nows)
console.log(nows.getFullYear())
console.log(nows.getMonth())
console.log(nows.getDate())
console.log(nows.getDay())
console.log(nows.getHours())
console.log(nows.getMinutes())
console.log(nows.getTime())