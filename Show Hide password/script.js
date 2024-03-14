let showPassword = document.getElementById("showPassword");
let password = document.getElementById("password");
let msg = document.getElementById("msg");
let strength = document.getElementById("strength");

function ShowHidePassword() {
    if (password.type == "password") {
        password.type = "text";
        showPassword.src = "img/eye-fill.svg";
    } else {
        password.type = "password";
        showPassword.src = "img/eye-off-fill.svg";
    }
}

password.addEventListener("input", () => {
    if (password.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
    if (password.value.length == 0) {
        password.style.borderColor = "navy";
    } else if (password.value.length < 4) {
        strength.innerHTML = "Weak";
        password.style.borderColor = "red";
        msg.style.color = "red";
    } else if (password.value.length >= 4 && password.value.length < 8) {
        strength.innerHTML = "Medium";
        password.style.borderColor = "orange";
        msg.style.color = "orange";
    } else if (password.value.length >= 8) {
        strength.innerHTML = "Strong";
        password.style.borderColor = "green";
        msg.style.color = "green";
    }
});
