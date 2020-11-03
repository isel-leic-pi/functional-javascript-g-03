'use strict'

const mymodule = require('./mymodule')

const fs = require('fs')
const path = require('path');

let dir = process.argv[2]

let extension = process.argv[3]

mymodule(dir, extension, (err, files) => {
    if (err) {
        console.log(err)
    }
    else {
        files.forEach(element => {
            console.log(element)
        });
    }
})