const addToCartQuery = require('../database/queries/addToCartQuery')

const addToCart = (req, res) => {
  const data = req.body
  addToCartQuery(data)
    .then(result => res.status(200).json({ message: 'successfully added' }))
    .catch(err => res.status(500).json({ message:'Internal Server Error' }))
}

module.exports = addToCart
