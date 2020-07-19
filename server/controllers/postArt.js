const addArt = require('../database/queries/addArtQuery')

const postArt = (req, res) => {
  const data = req.body
  addArt(data)
    .then(result => res.status(200).json({ message: 'successfully added' }))
    .catch(err =>
      //  res.status(403).json({ error: err.message })
      console.log(err))
}

module.exports = postArt
