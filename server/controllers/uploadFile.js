const fs = require('path')
const uploadFile = (req, res) => {
  if (!req.files) {
    return (res.status(400).json(({ msg: 'no file uploaded ' })))
  }

  const file = req.files.Image
  console.log(file)
  // this is the path where the image will be uploaded
  const Filepath = fs.join(__dirname, '..', '..', 'client', 'public', 'upload')
  console.log(Filepath, 'fileeeeeeeepath')
  file.mv(`${Filepath}/${file.name}`, err => {
    if (err) {
      console.log(err)
      return res.status(500).send(err)
    }

    res.json({ fileName: file.name, filePath: `upload/${file.name}` })
  })
}

module.exports = uploadFile
