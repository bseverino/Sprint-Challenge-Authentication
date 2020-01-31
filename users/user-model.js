const db = require('../database/dbConfig.js')

module.exports = {
    add,
    findBy
}

// add user to database, requires username and password
function add(credentials) {
    return db('users')
        .insert(credentials)
}

// find user(s) based on argument given
function findBy(filter) {
    return db('users')
        .where(filter)
}