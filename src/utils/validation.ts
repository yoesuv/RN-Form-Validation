import * as Yup from "yup";

// Login validation schema
export const loginSchema = Yup.object().shape({
  email: Yup.string().email("enter a valid email").required("enter an email"),
  password: Yup.string()
    .required("enter a password")
    .min(5, "password min 5 character"),
});

// Register validation schema
export const registerSchema = Yup.object().shape({
  fullname: Yup.string()
    .required("enter an fullname")
    .matches(new RegExp(/^[a-zA-Z][a-zA-Z'., ]*$/), "input is not correct"),
  email: Yup.string().email("enter a valid email").required("enter an email"),
  password: Yup.string()
    .required("enter a password")
    .min(5, "password min 5 character"),
  confirmpassword: Yup.string().test(
    "passwords-match",
    "Passwords must match",
    function (value) {
      return this.parent.password === value;
    }
  ),
});
