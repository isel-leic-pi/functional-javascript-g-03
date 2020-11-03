'use strict'

const fs = require('fs')

let path = process.argv[2]

let buffer = fs.readFileSync(path)        // buffer

let bufferToString = buffer.toString()      // buffer em string

let newBuffer = bufferToString.split('\n')      // array separados por newlines

console.log(newBuffer.length-1)

/*
    'use strict'
    const fs = require('fs')

    const contents = fs.readFileSync(process.argv[2])
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)
*/