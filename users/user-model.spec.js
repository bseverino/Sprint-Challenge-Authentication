const db = require('../database/dbConfig.js')
const Users = require('./user-model.js')

describe('user model', () => {
    describe('test environment', () => {
        it('should use the test environment', () => {
            expect(process.env.DB_ENV).toBe('test')
        })
    })

    beforeEach(async () => {
        await db('users').truncate()
    })

    describe('add()', () => {
        it('should add the user into the db', async () => {
            await Users.add({ username: 'bianca', password: 'password' })
            await Users.add({ username: 'isabela', password: 'password' })

            const users = await db('users')

            expect(users).toHaveLength(2)
        })
    })

    describe('findBy(username)', () => {
        it('should find a single user and return it in an array', async () => {
            const username = 'bianca'
            await Users.add({ username: 'bianca', password: 'password' })
            await Users.findBy({ username })

            const users = await db('users')

            expect(users).toHaveLength(1)
        })
    })
})