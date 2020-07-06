const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { SECRET } = process.env
const createToken = async (user, password) => {
  const userPassword = user.password

  try {
    const match = await bcrypt.compare(password, userPassword)

    if (!match) {
      return null
    }
    return jwt.sign(
      {
        id: user.id,
        name: user.name,
        role: user.role
      }, SECRET
    )
  } catch (error) {
    return null
  }
}

module.exports = createToken
