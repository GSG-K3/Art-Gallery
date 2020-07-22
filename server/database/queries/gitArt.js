const dbConnection = require('../config/dbConnection')

const getArtQueries = () => {
  const sql = 'SELECT * FROM artwork ;'
  return dbConnection.query(sql)
}
module.exports = getArtQueries
