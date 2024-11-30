document.getElementById("registrationForm").addEventListener("submit", (event) => {
event.preventDefault()

const name = document.getElementById("name").value.trim()
const email = document .getElementById("email").value.trim()
const age = document.getElementById("age").value
const gender = document.getElementById("gender").value
const terms = document.getElementById("terms").value

let errors = []

if (name.length < 3){
    errors.push("name must be atleast three character long")
}

if (!/\S+@\S+\.\S+/.test(email)){
    errors.push("invalid email format")
}

if(age < 18 || age > 99){
    errors.push("age must be within 18 and 99")
}

if(!gender){
    errors.push("you must select a gender")
}
 if(!terms){
    errors.push("you must agree to the terms and condition")
 }   

 if (errors.length > 0){
    alert.join("\n")
 }else{
    alert("form submitted submitted succesfully")
    this.reset()
 }
})