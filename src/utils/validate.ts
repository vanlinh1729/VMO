interface Form {
  name?: string;
  email?: string;
  phoneNumber?: string;
}
interface FormValue {}

export const validateInfo = (values: any) => {
  let errors: Form = {};

  if (!values.name.trim()) {
    errors.name = "Name can not be empty.";
  }

  if (!values.email) {
    errors.email = "Email can not be empty.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Incorrect email format.";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Phonenumber can not be empty.";
  } else if (
    /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(values.phoneNumber)
  ) {
    errors.phoneNumber = "Phonenumber is wrong";
  }

  return errors;
};
