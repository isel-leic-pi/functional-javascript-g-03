'use strict'

const async = require('async')

const http = require('http')

const BufferList = require('bl')


let url1 = process.argv[2]
let url2 = process.argv[3]
let url3 = process.argv[4]

let urls = [url1, url2, url3]

let count = 0
let out = []
for (let i = 0; i < urls.length; i++) {
    http.get(urls[i], (response) => {
        let error;
        if (error) {
            console.error(error.message);
            response.resume();
            return;
        }
        response.setEncoding('utf8');
        let rawData = '';
        response.pipe(BufferList(function (err, data) {
            rawData += data.toString()
            //console.log(rawData)
            //console.log(data.toString())
        }))
        response.on('end', () => {
            try {
                //console.log(bl.length)
                out[i] = rawData;
                // console.log(rawData)
                count++
                if (count === 3)
                    end()
            } catch (e) {
                console.error(e.message);
            }
        });
        }).on('error', (e) => {
            console.error(`Got error: ${e.message}`);
    });
}
 
function end() {
    for (let k = 0; k < out.length ; k++)   console.log(out[k])
}

/*
function printResults () {                               
  for (let i = 0; i < 3; i++) {                          
    console.log(results[i])                              
  }                                                      
}                                                        
                                                         
function httpGet (index) {                               
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {              
      if (err) {                                         
        return console.error(err)                        
      }                                                  
                                                         
      results[index] = data.toString()                   
      count++                                            
                                                         
      if (count === 3) {                                 
        printResults()                                   
      }                                                  
    }))                                                  
  })                                                     
}                                                        
                                                         
for (let i = 0; i < 3; i++) {                            
  httpGet(i)                                             
}                                                        
*/