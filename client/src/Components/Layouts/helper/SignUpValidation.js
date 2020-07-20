

import * as yup from "yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


let SignupSchema = yup.object().shape({
 name: yup.string().min(3).max(20).required("Thissss field is required."),
  email: yup
    .string()
    .email()
    .min(6)
    .required("This field is required."),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')


});
export default SignupSchema
