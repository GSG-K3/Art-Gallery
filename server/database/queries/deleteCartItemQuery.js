const dbConnection = require('../config/dbConnection')

const deleteItemCartQuery = (data) => {
  const sql = {
    text: 'DELETE FROM cart WHERE artwork_id=($1) AND client_id=($2);',
    values: [data.artwork, data.user]
  }
  return dbConnection.query(sql)
}

module.exports = deleteItemCartQuery
