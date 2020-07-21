const dbConnection = require('../config/dbConnection')

const addToCartQuery = (data) => {
  const sql = {
    text: 'INSERT INTO cart (artwork_id,client_id) VALUES ($1,$2)',
    values: [data.artwork, data.user]
  }
  return dbConnection.query(sql)
}
module.exports = addToCartQuery
