'use strict'

const http = require('http')

const BufferList = require('bl')

let url = process.argv[2]

http.get(url, (res) => {
    let error;
    if (error) {
        console.error(error.message);
        res.resume();
        return;
    }
    res.setEncoding('utf8');
    let rawData = [];
    var bl = new BufferList((err, response) => {
        response.pipe//?????????
    })
    res.on('data', (chunk) => { bl.append(chunk); });
    res.on('end', () => {
        try {
            console.log(bl.length)
            rawData.forEach(element => {
                console.log(element)
            })
        } catch (e) {
            console.error(e.message);
        }
    });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
});