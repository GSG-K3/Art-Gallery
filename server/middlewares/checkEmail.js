const checkEmailQuery = require('../database/queries/checkEmailQurey')
const checkEmail = (req, res, next) => {
  const data = req.body
  const email = data.email
  checkEmailQuery(email)
    .then(result => {
      if (result.rowCount === 0) {
        return next()
      } else res.status(403).json({ err: 'Email is already existed' })
    }
    )
    .catch(err => console.log(err))
}
module.exports = checkEmail
