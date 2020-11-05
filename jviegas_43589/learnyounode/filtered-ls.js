'use strict'

const fs = require('fs')
const path = require('path');


let dir = process.argv[2]

let a = process.argv[3]
let b = '.'
let extension = b.concat(a)

fs.readdir(dir, (err, files) => {
    if (err) {
        return
    }
    if (extension) {
        for (let i = 0; i < files.length; i++) {
            if (path.extname(files[i]) === extension)
                console.log(files[i])
        }
    }
    else {
        console.log(files)
    }
})