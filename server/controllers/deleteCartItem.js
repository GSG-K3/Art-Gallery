const deleteItemCartQuery = require('../database/queries/deleteCartItemQuery')

const deleteCartItem = (req, res) => {
  const data = req.body
  deleteItemCartQuery(data)
    .then(result => res.json({ message: 'Successfuly  Deleted' }))
    .then(err => console.log(err.message))
}

module.exports = deleteCartItem
