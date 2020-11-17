'use strict'

const services = require('../covida-services.js');
const url = require('url')
const covidadb = require('covida-db.js')
const igdb = require('igdb-data.js')

let clientid = `c8djo615xddme2l6rf59zo1w85j2cs`
let secret = `rg9esgj70gncmfflhx39agwd16utql`
let u = `https://id.twitch.tv/oauth2/token?client_id=${clientid}&client_secret=${secret}grant_type=client_credentials`
let baseurl = 'https://api.igdb.com/v4'

function getPopularGames(req, res) {
    services.getPopularGames
}

function getGame(req, res) {
    let game = url.parse(req)
}

function createGroup(req, res) {
    covidadb.createGroup()
}

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