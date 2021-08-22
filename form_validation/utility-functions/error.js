/*
this function highlights the border of the input field and

displays an error message if the input field is wrong
*/

const showError = (input,message) => {

    //get the form field elemet
    const formField = input.parentElement;

    //add the error class
    formField.ClassList.remove('success');
    formField.ClassList.add('error');

    //show the error message
    const error = formField.querySelector('small');
    error.textContent = message;

}

export default showError;