import { useState, useEffect } from "react";

// const useRegisterForm = (validate, callback: () => void) => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: React<HTMLInputElement>) => {
//     e.preventDefault();

//     setErrors(validate(values));
//     setIsSubmitting(true);
//   };

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && isSubmitting) {
//     }
//   }, [errors, isSubmitting]);

//   return { handleChange, handleSubmit, values, errors };
// };

// export default useRegisterForm;
