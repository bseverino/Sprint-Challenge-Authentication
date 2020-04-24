/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secrets.js')

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      console.log(err)
      res.status(401).json({ you: 'shall not pass!' })
    } else {
      req.user = decoded
      next()
    }
  })
}
