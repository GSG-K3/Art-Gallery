const getArtistQueries = require('../database/queries/getArtistQueries ')
const getArtist = (req, res) => {
    const artistId = req.params.id;
    getArtistQueries( artistId)
    .then(data =>  res.json(data.rows))
    .catch(err => console.log(err))
}
module.exports = getArtist
