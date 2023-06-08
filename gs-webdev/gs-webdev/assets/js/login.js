alert("Seja bem vindo!")
function Enviar(){

    var nome = document.getElementById("nomeid");
    var senha = document.getElementById("senhaid")
    if (nome.value == "Admin" && (senha.value == 123456 || senha.value == "123456")){
        window.open("https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021", "_blank")
    } else if(nome.value == "" || senha.value == ""){
        alert("Preencha todos os campos!")
    }
    else{
        alert("Usúario e(ou) senha incorreta(s)!");
    }
}
const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

// Load light or dark mode
changeThemeBtn.addEventListener("change", function () {
    toggleDarkMode();
});
let data = new Date()
document.querySelector(".date").innerHTML=(data.toLocaleString());


