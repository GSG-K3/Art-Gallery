const logout = (req, res) => {
  res.clearCookie('token').sendStatus(200)
}
module.exports = logout
