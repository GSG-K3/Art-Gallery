const dbConnection = require('../config/dbConnection')

const getArtQueries = () => {
  const sql = 'SELECT * FROM artwork left JOIN users ON artwork.artist_id=users.id WHERE sold = false;'
  return dbConnection.query(sql)
}
module.exports = getArtQueries
