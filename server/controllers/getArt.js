const getArtQueries = require('../database/queries/gitArt')

const getArt = (req, res) => {
  getArtQueries()
    .then(data => res.json(data.rows))
    .catch(err => err)
}
module.exports = getArt
