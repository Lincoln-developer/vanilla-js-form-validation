//checking whether the email is valid or invalid using regular expressions
const isEmailValid = (email) => {

    const regExp = new RegExp("^(?=.*[a-z])(?=.*[A-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

    return regExp.test(email);

}

export default isEmailValid;