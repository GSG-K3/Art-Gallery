const dbconnection = require('../config/dbConnection')

const recent = () => {
  const sql = 'SELECT * FROM (SELECT * FROM artwork ORDER BY id DESC LIMIT 4)Var1 ORDER BY id ASC;'
  return dbconnection.query(sql)
}

module.exports = recent
