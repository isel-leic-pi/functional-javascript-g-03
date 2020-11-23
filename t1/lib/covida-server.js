'use strict'

const PORT = process.argv[2] || 6969
const http = require('http')
const handler = require('body-parser')
const api = require('./lib/covida-web-api.js')

const express = require('express')
//const routes = require('./lib/routes/vinyl-routes')

const server = express()

//server.use(routes)
server.use(api)
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    if(process.send)
        process.send({ running: true })
})

