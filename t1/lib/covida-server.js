'use strict'

const PORT = 6969
const http = require('http')
//const api = require('.lib/covida-web-api.js')


const express = require('express')
//const routes = require('./lib/routes/vinyl-routes')

const server = express()

//server.use(routes)

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    if(process.send)
        process.send({ running: true })
})