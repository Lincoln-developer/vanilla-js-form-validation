//checking if password is strong using regular expressions
const isPasswordSecure = (password) => {

    const regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

    return regExp.test(password);

}

export default isPasswordSecure;