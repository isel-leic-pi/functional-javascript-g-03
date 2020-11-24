'use strict'

const http = require("http")
//const request = require('request');
const urllib = require('urllib')
const cid = 'c8djo615xddme2l6rf59zo1w85j2cs'
const at = '7u155btznajv6jsw7k0fx83oviymby'
const bat = 'Bearer 7u155btznajv6jsw7k0fx83oviymby'
const database = require('./lib/covida-db.js');
module.exports = {getPopularGames: getPopularGames}

const base_url = `https://api.igdb.com/v4/`

function getPopularGames(name, callback) {
    const url = `${base_url}`+'games'
    urllib.request(url,{ 
            method:'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Client-ID' : cid,
                'Authorization' : bat
            },
            content : "fields  id, name, rating; limit 10; where rating >= 90;"
        }, 
        (err, data, res)=> {
            let obj = JSON.parse(data)
            if(obj.length == 0)
                callback({'code' : "404", 'message' : "No content"}, null)
            else if(!checkError(200, callback, err, res, body))
                callback(null, obj)
    })

}

function getGame(game, callback) {
    const url = `${base_url}`+'games'
    urllib.request(url,{ 
            method:'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Client-ID' : cid,
                'Authorization' : bat
            },
            content : `fields *;search"${game}";`
        }, 
        (err, data, res)=> {
            let obj = JSON.parse(data)
            if(obj.length == 0)
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