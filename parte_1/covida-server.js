'use strict'

const PORT = process.argv[2] || 6969
const api = require('./covida-web-api.js')
const bodyParser = require('body-parser')

const express = require('express')

const server = express()

server.use(api)

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.raw())

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    if(process.send)
        process.send({ running: true })
})

