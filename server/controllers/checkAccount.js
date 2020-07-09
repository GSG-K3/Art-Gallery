const checkEmailQuery = require('../database/queries/checkEmailQurey')
const checkAccount = (req, res) => {
  const data = req.body;
  const email = data.email;
console.log('eeemaaail',email);

  if (email.trim().length === 0) {
    return res.status(400).json({
      message: 'All Fields Are Requered !!!!!',
      status: 400
    })
  }

  checkEmailQuery(email)
    .then((result) => {

      if (result.rowCount === 0) {
        res.status(200).json({ success: false, message: 'Email not exist' })
      } else
      {
        res
          .status(200)
          .json({ success: false, message: 'Email is already existed' })
      }
    })
    .catch((err) => console.log(err))
}
module.exports = checkAccount;
