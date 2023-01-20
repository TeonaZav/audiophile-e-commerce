import * as Yup from "yup";
import "yup-phone";
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
const schema = Yup.object({
  name: Yup.string().required("Name cannot be empty"),
  email: Yup.string().email("Wrong format").required("Email Can't be empty"),
  phone: Yup.string()
    .matches(phoneRegex, "Wrong format")
    .min(10, "too short")
    .max(10, "too long"),
  address: Yup.string().required("Address cannot be empty"),
  zip: Yup.string(),
  city: Yup.string().required("City cannot be empty"),
  Country: Yup.string().required("Country cannot be empty"),
});
export default schema;
