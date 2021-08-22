import checkUserEmail from "./inputField-Validation/email";
import checkUserName from "./inputField-Validation/username";
import checkUserpassword from "./inputField-Validation/password";
import confirmUserPassword from "./inputField-Validation/confirm-password";
const form = document.querySelector("#signup");

//Attaching event listener on the form
form.addEventListener('submit',(e) => {
    //preventing form from submitting data
    e.preventDefault();

    //validate form
    let isUserNameValid = checkUserName(),
        isUserEmailValid = checkUserEmail(),
        isUserPasswordValid = checkUserpassword(),
        isConfirmedPasswordValid= confirmUserPassword();

    let isFormValid = isUserEmailValid && 
    isUserNameValid && 
    isUserPasswordValid &&
    isConfirmedPasswordValid;

    //submit to the server if the form is valid
    if(isFormValid){
        
    }

})




