//Arrays
const numbers = [1,2,3,4,5,'hello',true]
console.log(numbers)
console.log(numbers[6])
numbers[6]='final end'
console.log(numbers)
numbers.push('mango')// add to end
console.log(numbers)
numbers.unshift("hey")// add to first
console.log(numbers)
console.log(numbers.length)//property
numbers.pop() // take last one off //method
console.log(numbers)
console.log(numbers.length)
console.log(Array.isArray(numbers))// search array
console.log(Array.isArray('hello'))
console.log(numbers.indexOf('hello'))
