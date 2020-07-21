const deleteItemCartQuery = require('../database/queries/deleteCartItemQuery')

const deleteCartItem = (req, res) => {
  const data = req.body
  deleteItemCartQuery(data)
    .then(result => res.json({ message: 'Successfuly  Deleted' }))
    .then(err => res.status(500).json({ message:'Internal Server Error' }))
}

module.exports = deleteCartItem
