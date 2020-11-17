'use strict'

const PORT = process.argv[2] || 6969
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

'use strict';

const DEFAULT_PORT = 8080
const PORT = process.argv[2] || DEFAULT_PORT

const logger = require('debug')('[Server start]')
const express = require('express')
const app = express()
const httpRequest = require('./ciborg-request')
const gamesData = require('./data-access/ciborg-games-data')(httpRequest)
const database = require('./data-access/ciborg-db')
const repo = require('./data-access/ciborg-repository')(gamesData, database)
const ciborgServices = require('./ciborg-services')(repo)
const ciborgApi = require('./ciborg-web-api')(ciborgServices)
const ciborgPaths = require('./ciborg-paths')

//Authentication
const authServices = require('./auth-web-services')(database)
const authApi = require('./auth-web-api')(app, authServices)


logger('Initializing all paths...')
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(express.static('../app/dist'))
app.use('/images', express.static("../app/src/images"))


ciborgPaths.init(app, ciborgApi, authApi)
logger('Starting server on port: %d', PORT)
app.listen(PORT)