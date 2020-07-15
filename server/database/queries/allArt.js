const dbConnection = require('../config/dbConnection')

const  getArtQueries = () => {
  console.log('im in the quere' );
  const sql = 'SELECT * FROM artwork  ';
  console.log(sql);
  return dbConnection.query(sql) 
}
module.exports = getArtQueries;