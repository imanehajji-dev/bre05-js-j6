
/*Exercice 6 : Checkbox et activation de bouton*/
let checkbox = document.querySelector("#conditions");
let bouton = document.querySelector("#submitBtn");

checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
        bouton.disabled = false;
    } else {
        bouton.disabled = true;
    }
});