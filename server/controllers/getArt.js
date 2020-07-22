const getArtQueries = require('../database/queries/gitArt')

const getArt = (req, res) => {
  getArtQueries()
    .then(data => res.json(data.rows))
    .catch(err => res.status(500).json({ message:'Internal Server Error' }))
}
module.exports = getArt
