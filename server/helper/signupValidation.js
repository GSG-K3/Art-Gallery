const Joi = require('@hapi/joi')

const signUpValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(20).required(),
    email: Joi.string().min(6).required().email(),
    phone: Joi.number().min(5),
    url: Joi.string(),
    password: Joi.string().min(6).required(),
    repeatPassword: Joi.ref('password'),
    role: Joi.string()

  })
  return schema.validate(data)
}
module.exports = signUpValidation
