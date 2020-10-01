let inputEmail = document.getElementById("email");
let emailWarning = document.getElementById("emailWarning");
let inputPassword = document.getElementById("password");
let passwordWarning = document.getElementById("passwordWarning");
let inputConfirmPassword = document.getElementById("confirmPassword");
let passwordConfirmationWarning = document.getElementById("passwordConfirmationWarning");
let buttonLogin = document.getElementById("buttonLogin");
let opaqueToken = "opaque";
let redBorder = "borderBottomRed";

inputEmail.onchange = () => applyWarningsIfNeeded(isEmailCorrect(), inputEmail, emailWarning);

inputPassword.onchange = () => applyWarningsIfNeeded(isPasswordCorrect(inputPassword.value), inputPassword, passwordWarning);

inputConfirmPassword.onchange = () => applyWarningsIfNeeded(isPasswordCorrect(inputConfirmPassword.value) && isPasswordsEquals(),
    inputConfirmPassword, passwordConfirmationWarning);

function applyWarningsIfNeeded(predicate, input, warning) {
    if (predicate){
        input.classList.remove(redBorder);
        warning.classList.add(opaqueToken);
    }else{
        input.classList.add(redBorder);
        warning.classList.remove(opaqueToken);
    }
}

let isEmailCorrect = () => inputEmail.value.match("^.+@.+\\.com");

let isPasswordCorrect = (password) => password.match("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}");

let isPasswordsEquals = () => inputPassword.value === inputConfirmPassword.value;