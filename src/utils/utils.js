export const validateEmail = (email) => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return regex.test(email);
};

export const validatePassword = (password) => {
  const isWhitespace = /^(?=.*\s)/;
  if (isWhitespace.test(password)) {
    return "Password must not contain Whitespaces.";
  }
  const isContainsLowercase = /^(?=.*[A-Za-z])/;
  if (!isContainsLowercase.test(password)) {
    return "Password must have at least alphabet.";
  }

  const isContainsNumber = /^(?=.*[0-9])/;
  if (!isContainsNumber.test(password)) {
    return "Password must contain at least one Digit.";
  }
  const isValidLength = /^.{6,}$/;
  if (!isValidLength.test(password)) {
    return "Password must be 6 Characters Long.";
  }
  return "";
};
