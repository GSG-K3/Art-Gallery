const artUser = require('../database/queries/getArtAndUser')

const getArtAndUser = (req, res) => {
  const artId = req.params.id
  artUser(artId)
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).json({ message:'Internal Server Error' }))
}

module.exports = getArtAndUser
