document.getElementById("myForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let valid = true;

document.getElementById("nameError").textContent="";
document.getElementById("emailError").textContent="";
document.getElementById("passError").textContent="";

if(name === ""){
document.getElementById("nameError").textContent="Name is required";
valid = false;
}

if(!email.includes("@")){
document.getElementById("emailError").textContent="Enter valid email";
valid = false;
}

if(password.length < 6){
document.getElementById("passError").textContent="Password must be 6 characters";
valid = false;
}

if(valid){
alert("Form submitted successfully!");
}

});