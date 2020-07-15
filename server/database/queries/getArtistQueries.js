const dbConnection = require('../config/dbConnection')

const getArtistQueries = (id) => {
  const sql = {
    text: 'SELECT * FROM users WHERE id=($1);',
    values: [id]
  }
  return dbConnection.query(sql)
}

module.exports = getArtistQueries 