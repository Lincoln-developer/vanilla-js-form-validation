const passwordInput = document.querySelector("#password");
import isRequired from "../utility-functions/isRequired";
import showError from "../utility-functions/error";
import success from "../utility-functions/success";
import isPasswordSecure from "../utility-functions/isPasswordSecure";

const checkUserpassword = () => {

    let valid = false;

    const password = passwordInput.value.trim();

    if(!isRequired(password)){

        showError(passwordInput,'Please the password again')

    } else if(!isPasswordSecure(password)){

        showError(passwordInput,
            'password must include one upper,lower case character,number and special character'
            )
    }else{
        success(passwordInput);
        valid = true;
    }

    return valid;
}

export default checkUserpassword;