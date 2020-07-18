const dbConnection = require('../config/dbConnection')

const artPost = (user_id, data) => {
  const sql = {
    text: 'INSERT INTO artwork (titel ,artist_id ,photo_url ,description ,price ,category ,size ,type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8 ,$9)',
    values: [data.name, user_id, data.id, data.photo, data.description, data.price, data.category, data.size, data.type]
  }
  return dbConnection.query(sql)
}

module.exports = artPost
