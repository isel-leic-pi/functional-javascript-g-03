'use strict'

let i = 2
let sum = 0
while (i < process.argv.length) {
    sum += Number(process.argv[i])
    i++
}
console.log(sum)