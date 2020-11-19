'use strict'

const request = require("http")

const base_url = `https://api.igdb.com/v4/`

function getGame(name, cb) {
    const url = `${baseUrl}games`
    request.body = {search = `"${name}"`}
    request.post(url, (err, res, body) => {
        let obj = JSON.parse(body)
        if(obj.games.length == 0)
            callback({'code' : "404", 'message' : "Game not Found"}, null)
        else if(!checkError(200, callback, err, res, body))
            callback(null, obj)
    })
}