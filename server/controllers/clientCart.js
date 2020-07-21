const clientCartQuery = require('../database/queries/clientCartQuery')

const clientCart = (req, res) => {
  const clientId = req.params.id

  clientCartQuery(clientId)
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).json({ message: err.message }))
}

module.exports = clientCart
