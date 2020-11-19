'use strict'

const client_id = `c8djo615xddme2l6rf59zo1w85j2cs`
const client_secret = `rg9esgj70gncmfflhx39agwd16utql`

const express = require('express')

if(process.argv.length > 2 )
    require('./lib/repo/users').init(process.argv[2])

const server = express()

server.use(routes)

server.listen(8000, () => {
    console.log('Listening on port 8000')
    if(process.send)
        process.send({ running: true })
})