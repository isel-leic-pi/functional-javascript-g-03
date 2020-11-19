'use strict'
const request = require('request')
const urllib = require('urllib')


function getGame(name, cb) {
    const url = `${baseUrl}search?name=${name}&client_id=${apiKey}`
    urllib.get()
    return request.get(url, (err, res, body) => {
        let obj = JSON.parse(body)
        if(obj.games.length == 0)
            callback({'code' : "404", 'message' : "Game not Found"}, null)
        else if(!checkError(200, callback, err, res, body))
            callback(null, obj)
    })
}