const dbConnection = require('../config/dbConnection')

const clientCartQuery = (id) => {
  const sql = {
    text: 'SELECT * from artwork WHERE id IN (SELECT artwork_id FROM cart WHERE client_id=($1));',
    values: [id]
  }
  return dbConnection.query(sql)
}

module.exports = clientCartQuery
