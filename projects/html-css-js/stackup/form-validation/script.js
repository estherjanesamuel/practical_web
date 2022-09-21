//declare your variables for the text field and access DOM
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#password2')
const stackie = document.querySelector('#stackie1')
const regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
const btn = document.querySelector('button')


//check email is valid
const isValidEmail = (email) => {
    // const rg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const rg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return rg.test(email);
}


const checkEmail = () => {
    let valid = false;
    const e = email.value.trim();
    console.log(isValidEmail(e))

    if (!isRequired(e)) {
        showErr(email, 'Email Cannot be blank.');
    } else if (!isValidEmail(e)) {
        showErr(email, 'Email is not valid.');
    } else {
        showSuccess(email);
        valid = true;
    }

    return valid
}

//check that all fields have input || check the field is required
const isRequired = value => value === '' ? false : true;

const checkStakie = () => {
    let valid = false;
    const stk = stackie.value.trim();

    if (!isRequired(stk)) {
        showErr(stackie, 'stakie cannot be blank.');
    } else {
        showSuccess(stackie);
        valid = true;
    }

    return valid;

}

//check input length for password || is password strong
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isPassLengthMoreThanFive = (length, min) => length < min  ? false : true;

const isPassSecure = (password) => {
    const rg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})");
    return rg.test(password);
}

const checkPass = () => {
    let valid = false;
    const min = 5;
    const pass = password.value.trim();

    if (!isRequired(pass)) {
        showErr(password, "Password can't be blank.")
    } else if (!isPassLengthMoreThanFive(pass.length, min)) {
        showErr(password, 'Password must has at least 5 characters.') //that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)
    } else {
        showSuccess(password);
        valid = true;
    }

    return valid;


}

// show the error or succes functionality
const showErr = (input, message) => {
    // get the form-control element
    const formCtrl = input.parentElement;
    //add the error class
    formCtrl.classList.remove('success');
    formCtrl.classList.add('error');

    // show the error message
    const err = formCtrl.querySelector('small');
    err.textContent = message;
}

const showSuccess = (input) => {
    // get tje form-control element
    const formCtrl = input.parentElement;
    //add the error class
    formCtrl.classList.remove('error');
    formCtrl.classList.add('success');

    // show the error message
    const err = formCtrl.querySelector('small');
    err.textContent = '';
}

//check the two passwords match
const checkConfirmPass = () => {
    let valid = false;

    // check confirm password
    const confPass = confirmPassword.value.trim();
    const pass = password.value.trim();

    if (!isRequired(confPass)) {
        showErr(confirmPassword, 'Please enter the password again');
    } else if (pass !== confPass) {
        showErr(confirmPassword, 'Confirm password does not match');
    } else {
        showSuccess(confirmPassword)
        valid = true;
    }

    return valid;
}


//add event listener for Submit button
btn.addEventListener('click', (e) => {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    let isEmailValid = checkEmail(),
        isPassValid = checkPass(),
        isConfPassValid = checkConfirmPass(),
        isStakieValid = checkStakie();

     let isFormValid = isEmailValid && isPassValid && isConfPassValid && isStakieValid;
     
     // submit to the server if the form is valid
     if (isFormValid) {

     }
    
});