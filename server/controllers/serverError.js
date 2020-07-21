const serverErr = (err, req, res, next) => {
  if (err) {
    res.status(500).send({ message: '500  SERVER ERROR' })
    next()
  }
}

module.exports = serverErr
