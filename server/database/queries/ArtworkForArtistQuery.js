const dbConnection = require('../config/dbConnection')

const ArtworkForArtistQuery= (id) => {
  const sql = {
    text: 'SELECT * FROM artwork WHERE artist_id =($1);',
    values: [id]
  }
  return dbConnection.query(sql)
}

module.exports = ArtworkForArtistQuery 