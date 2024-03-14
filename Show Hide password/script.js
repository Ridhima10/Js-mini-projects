let showPassword=document.getElementById("showPassword")
let password=document.getElementById("password")


function ShowHidePassword() {
    if(password.type=="password"){
        password.type="text";
        showPassword.src="img/eye-fill.svg";
    }
    else{
        password.type="password";
        showPassword.src="img/eye-off-fill.svg";
    }
}