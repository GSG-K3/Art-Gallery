const getPassword = require('../database/queries/getPassword')
const createToken = require('../middlewares/createToken')

const login = (req, res) => {
  const { email, password } = req.body.values
console.log('req.body',req.body.values);

  /* if (email.trim().length === 0 || password.trim().length === 0) {
    return res.status(400).clearCookie('token')
      .json({
        message: 'All Fields Are Requered !!!!!',
        status: 400
      })
  } */
  if (!password || password.trim().length === 0) {
    return res.status(400).json({
      message: ' !! ' + 'هذا الحقل مطلوب',
      status: 400
    })
  }

  getPassword(email)
    .then(async (result) => {
      if (result.rowCount === 0) {
        return res.status(403).clearCookie('token').json({
          message: 'Email or passowrd is not correct !!!!',
          status: 403
        })
      }
      const token = await createToken(result.rows[0], password)
      if (!token) {
        res.status(403).clearCookie('token').json({
          message: 'Login faild Check your email or passowrd',
          status: 403
        })
      }
      return res
        .cookie('token', token, { maxAge: 900000, httpOnly: true })
        .status(200)
        .json({ message: 'you are loged in successfully!!!!' })
    }
    )
    .catch((err) => {
      return res.status(501).clearCookie('token').json({
        message: 'internal error , login faild',
        status: 501
      })
    })
}

module.exports = login
