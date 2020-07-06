const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { SECRET } = process.env

const createToken = async (result, password, email) => {
  const data = result.rows[0]
  const role = data.role
  console.log(data, 'response')

  const hash = data.password
  await bcrypt.compare(password, hash, (error, compared) => {
    if (error) {
      console.log(error)
      return error
    } else if (compared) {
      return jwt.sign(
        { data, role }, SECRET
      )
    }
  }
  )
}

module.exports = createToken
