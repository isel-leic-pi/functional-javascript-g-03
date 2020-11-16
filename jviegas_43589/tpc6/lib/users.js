'use strict'

const fs = require('fs')
const PATH_USERS = './data/users.json'

/**
 * @typedef User
 * @property {String} username
 * @property {Array} artists
 */

/**
 * @param {String} username 
 * @param {function(Error, User)} cb 
 */
function getUser(username, cb) {
    fs.readFile(PATH_USERS, (err, buffer) => {
        if(err) return cb(err)
        const arr = JSON.parse(buffer)
        const users = arr.filter(user => user.username == username)
        if(users.length == 0) return cb(new Error('There is no user with username ' + username))
        cb(null, users[0])
    })
}

/**
 * Add a new User object with given username if it does not exist yet.
 * Returns an Error if that username already exists.
 * @param {String} username 
 * @param {function(Error)}
 */
function addUser(username, cb) {
    getUser(username, (err, user) => {
        if (err === null) {
            return cb(new Error(`User ${username} already exists`))
        }
        let fileContents = []
        fs.readFile(PATH_USERS, (err, buffer) => {
            if (err) {
                console.log(err)
                return cb(err)
            }
            fileContents = JSON.parse(buffer)
            let newUser = {
                username : `${username}`,
				artists : []
            }
            fileContents.push(newUser)
            const toWrite = JSON.stringify(fileContents)
            fs.writeFile(PATH_USERS, toWrite , (err) => {
                if (err) {
                    console.log(`Error writing to file`)
                    cb(err)
                }
                console.log(`User ${username} successfully added`)
                cb(null, newUser)
            })
        })
    })
}

/**
 * Adds a new artist name to the array of artists of the User with 
 * given username.
 * I does not verify repetitions among artists.
 * 
 * @param {String} username 
 * @param {String} artist 
 * @param {function(Error, User)} cb 
 */
function addArtist(username, artist, cb) {
    getUser(username, (err, user) => {
        if (err != null) {
            cb(new Error(`User ${username} doesn't exist`))
        }
        else {
            fs.readFile(PATH_USERS, (err, buffer) => {
                if (err) {
                    console.log(err)
                    cb(err)
                }
                let fileContents = []
                fileContents = JSON.parse(buffer)
                const user = fileContents.filter(user => user.username == username)
                if (Object.hasOwnProperty(user, 'artists')) {
                    fileContents.forEach(element => {
                        if (element.username === username) {
                            element.artists = new Array()
                            element.artists.push(artist)
                        }
                    });
                } else {
                    fileContents.forEach(element => {
                        if (element.username === username) {
                            element.artists.push(artist)
                        }
                    })
                }
                let toWrite = JSON.stringify(fileContents)
                fs.writeFile(PATH_USERS, toWrite , (err) => {
                    if (err) {
                        console.log(`Error writing to file`)
                        cb(err)
                    }
                    console.log(`Successfully added ${artist} to user ${username}`)
                })
            })
        }
    })
}

module.exports = {
    getUser,
    addArtist,
    addUser
}
