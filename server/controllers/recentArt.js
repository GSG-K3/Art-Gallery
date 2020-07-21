const recent = require('../database/queries/recent')

const recentArt = (req, res) => {
  recent()
    .then(data => res.json(data.rows))
    .catch(err => res.status(500).json({ message: 'Internal Server Error' }))
}
module.exports = recentArt
