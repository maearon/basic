const array = [1, 3, 5, 7]
const numbers2 = []

const sum = arr => {
    const reducer = (sum, val) => sum + val
    const initialValue = 0
    return arr.reduce(reducer, initialValue)
}

const sumArray = sum(array)

// const remove = n => {
//     let newArray = []
//     for (const [index, value] of array.entries()) {
//         if (index !== n) {
//             newArray.push(value)
//         }
//     }
//     return newArray
// }

// for (const [index, value] of array.entries()) {
//     numbers2.push(sum(remove(index)))
// }

for (const [index, value] of array.entries()) {
    numbers2.push(sumArray - value)
}

console.log(`array2: ${numbers2}`)
// console.log(`Sum array1: ${sum(array)}`)
console.log(`Sum array1: ${sumArray}`)

const max = Math.max(...numbers2)
const maxIndex = numbers2.indexOf(max) + 1
const min = Math.min(...numbers2)
const minIndex = numbers2.indexOf(min) + 1

const special = ['zeroth','first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth']
const deca = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet']

const stringifyNumber = n => {
  if (n < 20) return special[n]
  if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth'
  return deca[Math.floor(n/10)-2] + 'y-' + special[n%10]
}

console.log(`Max array2: ${max} is ${stringifyNumber(maxIndex)} element`)
console.log(`Max array2: ${min} is ${stringifyNumber(minIndex)} element`)