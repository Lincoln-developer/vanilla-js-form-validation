/*
this function shows the success indicator is similar to the 
showError()
*/

const success = (input) => {
    //get the form field element
    const formField = input.parentElement;

    //remove the error class
    formField.ClassList.remove('error');
    
    formField.ClassList.add('success');

    //hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

export default success;