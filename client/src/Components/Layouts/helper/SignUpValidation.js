

import * as yup from "yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


let SignupSchema = yup.object().shape({
 name: yup.string().min(3).max(20).required("هذا الحقل مطلوب"),
  email: yup
    .string()
    .email()
    .min(6)
    .required("هذا الحقل مطلوب"),
    phone: yup.string().matches(phoneRegExp, 'رقم الهاتف مطلوب')


});
export default SignupSchema
