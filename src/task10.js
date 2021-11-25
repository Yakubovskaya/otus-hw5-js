export function isValidData(data) {
  const regexpDate =
    /^[0-3]+[0-9]+(\.|\/|-|\s)+(([0]+[0-9]|[1]+[0-2])|[а-я]{3,8})+(\.|\/|-|\s)+[12]+[0-9]{3}/;
  return regexpDate.test(data);
}

export function isValidEmail(email) {
  const regexpEmail = /[a-zA-Z_.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;
  return regexpEmail.test(email);
}

export function isValidPhone(phone) {
  const regexpPhone = /\+\d\s\d{3}\s\d{3}-\d{2}-\d{2}/;
  return regexpPhone.test(phone);
}
