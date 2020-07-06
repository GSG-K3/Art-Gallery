const { sign } = require('jsonwebtoken')

const createToken = (email, password, id, name, role, secret) => {
  return sign(
    { email, password, id, name, role }, secret
  )
}

module.exports = createToken
