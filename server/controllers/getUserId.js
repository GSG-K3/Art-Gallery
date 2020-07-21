const { SECRET } = process.env
const jwt = require('jsonwebtoken')
const cookie = require('cookie')

const checkUser = (req, res) => {
  if (req.headers.cookie) {
    const { token } = cookie.parse(req.headers.cookie)
    jwt.verify(token, SECRET, (err, result) => {
      if (err) {
        return res.status(400)
      }
      if (result) {
        const id = result.id
        const name = result.name
        const role = result.role

        return res.json({ success: true, id, name, role })
      }
    }
    )
  } else return res.json({ success: false, message: 'faild to get user' })
}

module.exports = checkUser
