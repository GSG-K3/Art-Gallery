const dbConnection = require('../config/dbConnection')

const getPassword = (email) => {
  const sql = {
    text: 'select password,name,id,role from users where email_adress = $1;',
    values: [email]
  }
  return dbConnection.query(sql)
}

module.exports = getPassword
