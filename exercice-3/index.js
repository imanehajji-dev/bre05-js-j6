/*Exercice 3 : écouter les champs de formulaires individuellement*/

let username = document.querySelector("#login_username");
let password = document.querySelector("#login_password");
let sujet = document.querySelector("#sujet");
let message = document.querySelector("#message"); 

username.addEventListener("change", (event) => {
    console.log(event.target.value);
});

password.addEventListener("change", (event) => {
    console.log(event.target.value);
});

sujet.addEventListener("change", (event) => {
    console.log(event.target.value);
});

message.addEventListener("change", (event) => {
    console.log(event.target.value);
});