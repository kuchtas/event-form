export const validateUser = (user) => {
  let errors = {};
  const regex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
  if (!user.name) {
    errors.name = "Name is required";
  }
  if (!user.surname) {
    errors.surname = "Surname is required";
  }
  if (!user.email) {
    errors.email = "Email is required";
  } else if (!regex.test(String(user.email).toLowerCase())) {
    errors.email = "Email is invalid";
  }
  if (!user.date) {
    errors.date = "Date is required";
  }
  return errors;
};
