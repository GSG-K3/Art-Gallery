const dbConnection = require('../config/dbConnection')

const artPost = (data) => {
  const sql = {
    text: 'INSERT INTO artwork (name ,artist_id ,photo_url ,description ,price ,caregory ,size ,type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
    values: [data.name, data.id, data.photo, data.description, data.price, data.category, data.size, data.type]
  }
  return dbConnection.query(sql)
}

module.exports = artPost
