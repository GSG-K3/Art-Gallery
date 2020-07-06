const dbConnection = require('../config/dbConnection')

const checkEmailQurey = (email) => {
  const sql = {
    text: 'SELECT name FROM users WHERE email_adress=$1',
    values: [email]
  }
  return dbConnection.query(sql)
}
module.exports = checkEmailQurey
