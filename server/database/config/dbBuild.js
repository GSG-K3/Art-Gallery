const fs = require('fs')
const path = require('path')

const dbConnection = require('./dbConnection')

const sql = fs.readFileSync(path.join(__dirname, 'dbBuild.sql')).toString()
const sql2 = fs.readFileSync(path.join(__dirname, 'dummyData.sql')).toString()

const runDbBuild = (sql, sql2) => {
  return dbConnection
    .query(sql, sql2)
    .then((res) => res)
    .catch((err) => console.log(err))
}

runDbBuild(sql, sql2)

module.exports = runDbBuild
