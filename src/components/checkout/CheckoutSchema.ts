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
});
export default schema;
