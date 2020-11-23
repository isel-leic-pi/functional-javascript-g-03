'use strict'

const services = require('../covida-services.js');
const url = require('url')
const covidadb = require('covida-db.js')
const igdb = require('igdb-data.js')
const Router  = require('express').Router

let clientid = `c8djo615xddme2l6rf59zo1w85j2cs`
let secret = `rg9esgj70gncmfflhx39agwd16utql`
let u = `https://id.twitch.tv/oauth2/token?client_id=${clientid}&client_secret=${secret}grant_type=client_credentials`
let baseurl = 'https://api.igdb.com/v4'

let js = {
    "access_token": "7u155btznajv6jsw7k0fx83oviymby",
    "expires_in": 4725712,
    "token_type": "bearer"
}
const router = Router()

// popular game
router.get('/games/', (req, resp, next) => {
    // https://api.igdb.com/v4/search
    const url = parse(req.url, true)
    let name = url.pathname.split('/').pop()
    services.getGame(name, (err, game) => {
        if(err) {
            res.statusCode = err.code
            res.end(`${err.message} \nError code ${err.code}`)
        } else {
            res.statusCode = 200
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify(game))
        }
    })
})

// search game
router.get('/games/search/:game', (req, resp, next) => {
    // https://api.igdb.com/v4/search
    const url = parse(req.url, true)
    let name = url.pathname.split('/').pop()
    services.getGame(name, (err, game) => {
        if(err) {
            res.statusCode = err.code
            res.end(`${err.message} \nError code ${err.code}`)
        } else {
            res.statusCode = 200
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify(game))
        }
    })
})
/*
function getGame(req, res) {
    // https://www.igdb.com/search?type=1&q=the+witcher
    const url = parse(req.url, true)
    let name = url.pathname.split('/').pop()
    services.getGame(name, (err, game) => {
        if(err) {
            res.statusCode = err.code
            res.end(`${err.message} \nError code ${err.code}`)
        } else {
            res.statusCode = 200
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify(game))
        }
    })
}
*/


// create group
router.post('groups/:groupid', (req, res, next) => {
    const url = parse(req.url, true)
    let name = url.query.name
    let description = url.query.description
    services.createGroup(name, description, (err, message) => {
        if(err) {
            res.statusCode = err.code
            res.end(`${err.message} \nError code ${err.code}`)
        } else {
            res.statusCode = 200
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify(message))
        }
    })
})

function getGroups(req, res) {
    // covida.getGroup()
}

function addGame(req, res) {
    let group
    // covida.addGame(group, (err, data) => {
        if (err) 
        cb
    })
}

function removeGame(req, res) {
    
}