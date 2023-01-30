import * as Yup from "yup";
import "yup-phone";
const phoneRegex = /^[0-9\- ]{8,14}$/;
const schema = Yup.object({
  name: Yup.string().required("Name can't be empty").max(30, "Too long"),
  email: Yup.string().email("Wrong format").required("Email can't be empty"),
  phone: Yup.string()
    .matches(phoneRegex, "Phone number is not valid")
    .nullable(),
  address: Yup.string().required("Address can't be empty").max(200, "Too long"),
  zip: Yup.string(),
  city: Yup.string().required("City can't be empty"),
  country: Yup.string().required("Country can't be empty").max(30, "Too long"),
  payment: Yup.string().required("Choose the payment method"),
  emoneyN: Yup.string()
    .required("e-Money Number is required")
    .max(9, "Too long")
    .min(9, "Too short"),
  pin: Yup.string()
    .required("Pin can't be empty")
    .max(4, "Too long")
    .min(4, "Too short"),
});
export default schema;
