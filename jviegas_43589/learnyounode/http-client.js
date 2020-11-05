'use strict'

const http = require('http')
<<<<<<< HEAD
const url = 'https://www.reddit.com/r/WorldOfWarships/comments/jk1x5o/just_play_more/'


function abc(url, callback) {
    http.get(url,(res) => {
        let rawData = '';
        res.setEncoding('utf-8')
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
            callback(rawData.toString())
          } catch (e) {
            console.error(e.message);
          }
        });
      }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
      })
}

console.log('starting')
console.log(abc(url, (cb) => {
    cb()
}))
console.log('ending')
=======
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
>>>>>>> 6f686181f02d6219be5fa33f02dd89f3cea424e4
