'use strict'

const request = require("http")
const body_parser = require('body-parser')
const cid = '&client_id=c8djo615xddme2l6rf59zo1w85j2cs'
const at = '&access_token=7u155btznajv6jsw7k0fx83oviymby'
const database = require()

const base_url = `https://api.igdb.com/v4/`

function getGame(name, callback) {
    const url = `${baseUrl}search`+cid+at
    request.body = {search = `"${name}"`}
    request.post(url, (err, res, body) => {
        let obj = JSON.parse(body)
        if(obj.games.length == 0)
            callback({'code' : "404", 'message' : "Game not Found"}, null)
        else if(!checkError(200, callback, err, res, body))
            callback(null, obj)
    })
}

function getPopularGame(name, callback) {
    const url = `${baseUrl}search`+cid+at
    request.body = {
        fields *;
        where rating >= 90;
        }
    request.post(url, (err, res, body) => {
        let obj = JSON.parse(body)
        if(obj.games.length == 0)
            callback({'code' : "404", 'message' : "Game not Found"}, null)
        else if(!checkError(200, callback, err, res, body))
            callback(null, obj)
    })
}

function createGroup(name, description, callback) {
    database.create(databaseName)
    database.insert(databaseName, 'group',
        {
            'name' : name,
            'description' : description,
            'games' : []
        },
        (error, response) =>
            callback(error, `Group ${name} sucessfully created`)
    )
} 