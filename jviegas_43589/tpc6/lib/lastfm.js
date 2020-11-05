'use strict'

const urllib = require('urllib')

const LASTFM_HOST = 'http://ws.audioscrobbler.com/2.0/'
const LASTFM_KEY = '79b2506be8ce86d852882e1774f1f2e8'
const LASTFM_TOP_TRACKS = `?method=artist.gettoptracks&api_key=${LASTFM_KEY}&format=json&artist=`
const LASTFM_GET_ARTIST1 = `?method=artist.search&artist=`
const LASTFM_GET_ARTIST2 = `&api_key=${LASTFM_KEY}&format=json`


/**
 * @param {String} artist 
 * @param {function(Error, Array)} cb Callback that receives an array with tracks names
 * of given artist, or an Error if it does not succeed.
 */
function getTopTracks(artist, cb) {
    const url = LASTFM_HOST + LASTFM_TOP_TRACKS + artist
    urllib.request(url, (err, data, res) => {
        if(err) return cb(err)
        const obj = JSON.parse(data)
        if(obj.error) return cb(new Error(obj.message))
        const tracks = obj.toptracks.track.map(t => t.name)
        cb(null, tracks)
    })
}

/**
 * @param {String} artist Artist name
 * @param {function(Error, Array)} cb Callback receives an array of Artist objects with given name or 
 * an Error if there is no Artist with given name.
 */
function searchArtist(artist, cb) {
    // http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=kjahkdfhalf&api_key=79b2506be8ce86d852882e1774f1f2e8&format=json
    const url = LASTFM_HOST + LASTFM_GET_ARTIST1 + artist + LASTFM_GET_ARTIST2
    urllib.request(url, (err, data, res) => {
        if(err) return cb(err)
        const obj = JSON.parse(data)
        if(obj.error) return cb(new Error(obj.message))
        if (obj.results.artistmatches.artist.length > 0) return cb(null, true)
        else return cb(null, false)
    })
}

module.exports = {
    getTopTracks,
    searchArtist
}