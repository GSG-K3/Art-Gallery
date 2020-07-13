const dbConnection = require('../config/dbConnection')

const artUser = (id) => {
  const sql = {
    text: 'SELECT * FROM artwork left JOIN users ON artwork.artist_id=users.id WHERE artwork.id=($1);',
    values: [id]
  }
  return dbConnection.query(sql)
}

module.exports = artUser
