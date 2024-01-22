let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$@";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}


function generatePassword(){
    let pass = "";

// -> Algoritimo de passagem dos caracteres para a quantidade de caracteres selecionados no Slider (pelo usuário)
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n))
    }

// -> Remove a classe "hide"  (esconder) que esconde o log deixando mais dinâmica quando o usuário acessa pela primeira vez       
    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;
}
// -> Função para copiar a senha gerado ao clicar sobre o texto
//* Nota: pelos meus testes, ao menos no MAC OS, somente o Safari está copiando a senha. Os demais navegadores não estão copiando a senha,
function copyPassword(){
    alert("Senha copiada!")
    navigator.clipboard.writeText(novaSenha);
}
