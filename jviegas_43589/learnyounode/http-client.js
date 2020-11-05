'use strict'

const http = require('http')
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