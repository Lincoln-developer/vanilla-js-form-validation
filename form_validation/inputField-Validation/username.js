import isRequired from "../utility-functions/isRequired";
import isBetween from "../utility-functions/isBetween";
import showError from "../utility-functions/error";
import success from "../utility-functions/success";
const usernameInput = document.querySelector("#username");

const checkUserName = () => {
    let valid = false;
    const min = 3,
          max = 25;
          const username = usernameInput.value.trim();
          if(!isRequired(username)) {

              showError(usernameInput,'Username can not be empty')

          } else if(!isBetween(username.length, min,max)){

              showError(usernameInput,`Username must be between ${min} and ${max}`)
          }
          else{
              success(usernameInput);
              valid = true;
          }

          return valid;
}

export default checkUserName;