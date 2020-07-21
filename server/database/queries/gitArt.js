const dbConnection = require('../config/dbConnection')

const getArtQueries = () => {
  const sql = 'SELECT * FROM artwork WHERE sold = false;'
  return dbConnection.query(sql)
}
module.exports = getArtQueries
