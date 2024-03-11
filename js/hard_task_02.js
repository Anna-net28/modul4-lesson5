'use strict'

let x
let y
let int32 = 0
const minimumNumber = (x, y) => {
   return y + ((x - y) & ((x - y) >> 31));
}
console.log(minimumNumber(45, 5));