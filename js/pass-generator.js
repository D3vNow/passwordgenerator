
// Sessão de ajuste de elementos do container
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

// Sessão de senha
let passwordLenght = document.querySelector("#value");
let generatedPassword = document.querySelector("#password")
let containerPassword = document.querySelector("#container-password")

let chartset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*(){}[]|`?/";
let newPassword = "";

passwordLenght.innerHTML = sliderElement.value;

slider.oninput = function(){
    passwordLenght.innerHTML = this.value;
}

function generatePassword(){

    let pass = "";
    for(let i = 0, n = chartset.length; i < sliderElement.value; ++i){
        pass += chartset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    generatedPassword.innerHTML = pass;
    newPassword = pass;
    
}

function copyPassword(){
    navigator.clipboard.writeText(newPassword);
    alert("Senha copiada!")
    
}