import isRequired from "../utility-functions/isRequired";
import showError from "../utility-functions/error";
import success from "../utility-functions/success";
import isEmailValid from "../utility-functions/isEmailValid";
const emailInput = document.querySelector("#email");

const checkUserEmail = () => {
    let valid = false;

    const email = emailInput.value.trim();

    if(!isRequired(email)){

        showError(emailInput,'Email can not be missing')
    }
    else if(!isEmailValid(email)){

        showError(emailInput,'Email is invalid!')
    }
    else{
        success(emailInput);
        valid = true;
    }

    return valid;
}

export default checkUserEmail;
