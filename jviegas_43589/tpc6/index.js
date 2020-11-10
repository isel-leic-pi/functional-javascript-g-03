'use strict'

const vinyl = require('./lib/vinyl')
const users = require('./lib/users.js')
const lastfm = require('./lib/lastfm.js')
 


users.addUser('josefino', (err) => {
    if (err)
    console.log(err)
})
users.addUser('mário', (err) => {
    if (err)
    console.log(err)
})
users.addUser('josefino', (err) => {
    if (err)
    console.log(err)
})

users.addUser('barnabé', (err) => {
    if (err)
    console.log(err)
})


/*
vinyl.getTopTracks('gamboa', 3, (err, tracks) => {
    if(err) console.log(err)
    else
        tracks.forEach(t => console.log(t))   
})

users.addArtist('josefino', 'Avenged Sevenfold', (err) => {
    if (err) {
        console.log(err)
    }
})

users.addArtist('josefino', 'Metallica', (err) => {
    if (err) {
        console.log(err)
    }
})
*/
/*
lastfm.getTopTracks('franz ferdinand', (err, tracks) => {
    if(err) console.log(err)
    else tracks.forEach(t => console.log(t))
})*/
/*
users.getUser('gamboa', (err, user) => {
    if(err) console.log(err)
    else
        user.artists.forEach(art => console.log(art))
})

users.getUser('kaskdh', (err, user) => {
    if(err) console.log(err)
    else
        user.artists.forEach(art => console.log(art))
})
*/


/*
lastfm.searchArtist('Metallica', (err, artist) => {
    if (err) {
        console.log(err)
        return
    }
    if (artist) {
        console.log(`Lastfm contains Metallica`)
    }
    else console.log(`Lastfm does not contain Metallica`)
})

lastfm.searchArtist('AbsentArtist', (err, artist) => {
    if (err) {
        console.log(err)
        return
    }
    if (artist) {
        console.log(`Lastfm contains AbsentArtist`)
    }
    else console.log(`Lastfm does not contain AbsentArtist`)
})
*/