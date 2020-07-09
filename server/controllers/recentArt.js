const recent = require('../database/queries/recent')

const recentArt = (req, res) => {
  recent()
    .then(data => res.json(data.rows))
    .catch(err => err)
}
module.exports = recentArt
