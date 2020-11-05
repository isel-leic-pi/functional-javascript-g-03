'use strict'

const fs = require('fs')

let path = process.argv[2]

fs.readFile(path, (err, data) => {
    if (err) {
        throw err;
    }
    let abc = data.toString().split('\n')
    console.log(abc.length-1)
  });
 /*
 'use strict'                                              
const fs = require('fs')                                  
const file = process.argv[2]                              
                                                          
fs.readFile(file, function (err, contents) {              
  if (err) {                                              
    return console.log(err)                               
  }                                                       
  // fs.readFile(file, 'utf8', callback) can also be used 
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)                                      
})                                                        
*/  