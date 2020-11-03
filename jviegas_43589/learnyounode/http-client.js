'use strict'

const http = require('http')
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
    res.on('data', (chunk) => { rawData.push(chunk); });
    res.on('end', () => {
        try {
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
