const getPassword = require('../database/queries/getPassword')
const createToken = require('../middlewares/createToken')

const login = (req, res) => {
  const { email, password } = req.body

  if (email.trim().length === 0 || password.trim().length === 0) {
    res.status(400).json({
      message: 'All Fields Are Requered !!!!!',
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
        const token = createToken(result, password, email)
        console.log(token)
        if (token) {
          res
            .cookie('token', token, { maxAge: 900000, httpOnly: true })
            .status(200)
            .json({ message: 'you are loged in successfully!!!!' })
        }
      }
      )
      .catch((err) => console.log(err))
  }
}

module.exports = login
