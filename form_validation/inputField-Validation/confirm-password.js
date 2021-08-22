const ConfirmPasswordInput = document.querySelector("#confirm-password");
const passwordInput = document.querySelector("#password");
import showError from "../utility-functions/error";
import success from "../utility-functions/success";
import isRequired from "../utility-functions/isRequired";



const confirmUserPassword = () => {

    let valid = false;

    const confirmPassword = ConfirmPasswordInput.value.trim();

    const userPassword = passwordInput.value.trim();

     if(!isRequired(confirmUserPassword)){

         showError(ConfirmPasswordInput,'Please enter the password again')

     } else if(userPassword !== confirmPassword){3

         showError(ConfirmPasswordInput,'Confirmed password doesnot match')

     }else{
         
         success(ConfirmPasswordInput);
         valid = true;
     }

     return valid;
}

export default confirmUserPassword;