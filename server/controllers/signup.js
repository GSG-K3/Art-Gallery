const bcrypt = require('bcrypt')

const secret = process.env.SECRET
const signUpValidation = require('../helper/signupValidation')
const addUser = require('../database/queries/addUser')

const signup = async (req, res) => {
  const data = req.body
  const { error } = signUpValidation(data)
  if (!error) {
    const secretPassword = data.password + secret
    const hashPassword = (password) => bcrypt.hash(password, 10)

    data.password = await hashPassword(secretPassword)
    addUser(data)
      .then(response => res.status(200).json({
        message: 'Successfully registered'
      }))
      .catch(err => res.status(400).json({
        message: err.message
      }))
  } else res.status(400).json({ err: error.message })
}

module.exports = signup
