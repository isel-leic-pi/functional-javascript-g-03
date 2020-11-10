/* eslint-disable no-undef */
'use strict'

const users = require('./../lib/users')

/*
test('test users module getUsers successfuly', done => {
    users.getUser('gamboa', (err, user) => {
        // Assert that there is no error
        expect(err).toBeFalsy()

        // Assert that property username of user is gamboa
        expect(user.username).toBe('gamboa')
        done()
    })
})
*/

test('test users module addUsers successfuly', done => {
    users.addUser('jardel', (err, user) => {
        expect(err).toBeFalsy()
        expect(user.username).toBe('jardel')
        done()
    })

})