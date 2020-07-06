const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')
const getPassword = require('../database/queries/getPassword')
const { SECRET } = process.env

const createToken = (email, password, id, name, role, secret) => {
  return sign(
    { email, password, id, name, role }, secret
  )
}

const login = (req, res) => {
  const { email, password } = req.body

  if (email.trim().length === 0 || password.trim().length === 0) {
    res.status(400).json({
      message: 'All Fields Are equered !!!!!',
      status: 400
    })
  } else {
    getPassword(email)
      .then((result) => {
        if (!result || result.rows.length === 0) {
          res.status(500).json({
            message: 'Email Does Not Exist !!!!',
            status: 500
          })
        }

        const hash = result.rows[0].password
        bcrypt.compare(password, hash, (error, compared) => {
          if (error) {
            return res.json({ error })
          }
          if (compared) {
            const { id, name, role } = result.rows[0]
            const token = createToken(email, password, id, name, role, SECRET)
            return res
              .cookie('token', token, { maxAge: 900000, httpOnly: true })
              .status(200)
              .json({ message: 'you are loged in successfully!!!!' })
          } else {
            res.status(500).json({ message: 'password or email incorrect ' })
          }
        }

        )
      })
      .catch((err) => console.log(err))
  }
}

module.exports = login
