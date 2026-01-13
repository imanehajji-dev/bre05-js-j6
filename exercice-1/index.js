/*Exercice 1 : récupérer les valeurs des champs d'un formulaire*/

let form = document.querySelector("#test-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(event.target.elements.username.value);
    console.log(event.target.elements.password.value);
});


