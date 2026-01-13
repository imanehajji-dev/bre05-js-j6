/*Exercice 4 : valider des champs de formulaire*/

let form = document.querySelector("#signup-form");
let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm_password");

form.addEventListener("submit", (event) => {
    
    event.preventDefault();

    if (password.value === confirm.value) {
       
        password.classList.add("valid");
        confirm.classList.add("valid");

       
        password.classList.remove("invalid");
        confirm.classList.remove("invalid");
    } 
    else {
       
        password.classList.add("invalid");
        confirm.classList.add("invalid");

        password.classList.remove("valid");
        confirm.classList.remove("valid");
    }
});