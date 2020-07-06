const dbConnection = require('../config/dbConnection')

const addUserQuery = (data) => {
  const sql = {
    text: 'INSERT INTO users (name ,email_adress,phone_number,password,role,url) VALUES ($1,$2,$3,$4,$5,$6)',
    values: [data.name, data.email, data.phone, data.password, data.role, data.url]
  }
  return dbConnection.query(sql)
}
module.exports = addUserQuery
