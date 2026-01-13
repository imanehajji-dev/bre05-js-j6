/*Exerice 5 : Affichage dynamique et prévisualisation*/

let username = document.querySelector("#login_username");
let color = document.querySelector("#color");
let div = document.querySelector("div");

username.addEventListener("change", (event) => {
    let text = document.createTextNode(event.target.value);
    div.appendChild(text);
    console.log(event.target.value);
});

color.addEventListener("change", (event) => {
    div.style.backgroundColor = event.target.value;
});



