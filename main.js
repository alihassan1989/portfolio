/*const loginForm = document.getElementById("login-form");
const loginSubmit = document.getElementById("login-submit");
const loginError = document.getElementById("error1");

loginSubmit.addEventListener = ( "click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if( username === "admin" && password === "123456") {
        alert("Login Seccessful");
        location.reload();
        
    } else {
        loginError.style.opacity=1;
    }
}

) */
function check(form){
    if(form.username.value === "admin" && form.password.value === "123456") {
        window.open('index.html');
    } else {
        alert("invalid username and/or password, please try again");
    }
}