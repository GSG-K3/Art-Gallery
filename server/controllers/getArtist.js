const getArtistQueries = require('../database/queries/getArtistQueries')
const getArtist = (req, res) => {
  const artistId = req.params.id
  getArtistQueries(artistId)
    .then(data => res.json(data.rows))
    .catch(err => res.status(500).json({ message: 'Internal Server Error' }))
}
module.exports = getArtist
