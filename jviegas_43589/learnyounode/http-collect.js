'use strict'

const http = require('http')

const BufferList = require('bl')

let url = process.argv[2]

http.get(url, (response) => {
    let error;
    if (error) {
        console.error(error.message);
        response.resume();
        return;
    }
    response.setEncoding('utf8');
    let rawData;
    response.pipe(BufferList(function (err, data) {
        console.log(data.length)
        console.log(data.toString())
    }))
    response.on('end', () => {
        try {
            //console.log(bl.length)
            //console.log(bl)
        } catch (e) {
            console.error(e.message);
        }
    });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
});

/* 
http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
*/