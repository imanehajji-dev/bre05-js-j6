/*Exercice 2 : soumettre le formulaire vous-même après traitement*/

let form = document.querySelector("#test-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(event.target.elements.username.value);
    console.log(event.target.elements.password.value);
    
    event.target.submit();
});


