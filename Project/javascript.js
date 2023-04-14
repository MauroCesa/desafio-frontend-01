function logar(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "username" && password == "password"){
        alert ("Login successful!");
    } else{
        alert("Username or Password incorrect. Try again.")
    }
}