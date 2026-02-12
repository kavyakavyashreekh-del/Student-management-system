function togglePassword() {
    let pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234") {
        localStorage.setItem("loggedIn", true);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Credentials");
    }
}