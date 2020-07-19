const dbConnection = require('../config/dbConnection')

const artPost = (data) => {
  console.log(data, 'queryyyyyyyyyyyyyyyyyy')
  const sql = {
    text: 'INSERT INTO artwork (title ,artist_id ,photo_url ,description ,price ,category ,size ,type,sold) VALUES ($1,$2,$3,$4,$5,$6,$7,$8 ,$9 )',
    values: [data.name, data.user_id, data.photo, data.description, data.price, data.category, data.size, data.type, data.sold]
  }
  return dbConnection.query(sql)
}

module.exports = artPost
