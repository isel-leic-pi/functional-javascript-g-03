'use strict'

// module.exports = {readFilesFiltered}
const fs = require('fs')
const path = require('path');

module.exports = function (dir, extension, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err, null)
        }
        let arr = []
        if (extension) {
            for (let i = 0; i < files.length; i++) {
                if (path.extname(files[i]) === ('.'.concat(extension)))
                    arr.push(files[i])
            }
        }
        return callback(null, arr)
    })
}

/*
'use strict'                                          
const fs = require('fs')                              
const path = require('path')                          
                                                      
module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {              
    if (err) {                                        
      return callback(err)                            
    }                                                 
                                                      
    list = list.filter(function (file) {              
      return path.extname(file) === '.' + filterStr   
    })                                                
                                                      
    callback(null, list)                              
  })                                                  
}                                                     
*/