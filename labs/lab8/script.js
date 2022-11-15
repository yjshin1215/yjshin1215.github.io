let body_element = document.querySelector("body");

function toggleTheme() {
    body_element.classList.toggle("dark-mode");
}

let buttonVariable = document.getElementById("toggleButton");

buttonVariable.onclick = toggleTheme;