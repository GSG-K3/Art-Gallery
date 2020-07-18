const addArt = require('../database/queries/addArtQuery')

const postArt = (req, res) => {
  const data = req.body
  const user_id = 1
  console.log('hi Im in the controller', req.body)
  addArt(user_id, data)
    .then(result => res.status(200).json({ message: 'successfully added' }))
    .catch(err => res.status(403).json({ error: err.message }))
}

module.exports = postArt
