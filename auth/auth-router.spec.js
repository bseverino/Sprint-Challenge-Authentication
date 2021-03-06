const request = require('supertest')

const server = require('../api/server.js')

describe('server', () => {
    it('runs the test', () => {
        expect(true).toBe(true)
    })

    it('should return json', () => {
        const credentials = {
            username: 'bianca',
            password: 'password'
        }

        return request(server)
            .post('/api/auth/register', credentials)
            .then(res => {
                expect(res.type).toMatch(/json/i)
            })
    })
})