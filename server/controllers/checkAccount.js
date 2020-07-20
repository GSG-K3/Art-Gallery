const checkEmailQuery = require('../database/queries/checkEmailQurey');
const checkAccount = (req, res) => {
  const data = req.body;
  const email = data.email;

  if (!email || email.trim().length === 0) {
    return res.status(400).json({
      message: 'This Field is Required !!',
      status: 400,
    });
  }

  checkEmailQuery(email)
    .then((result) => {
      if (result.rowCount === 0) {
        res
          .status(400)
          .json({
            status: 'notExist',
            message: 'We cannot find an account with this email address !! ',
          });
      } else {
        res.status(200).json({ status: 'Exist' });
      }
    })
    .catch((err) => console.log(err));
};
module.exports = checkAccount;
