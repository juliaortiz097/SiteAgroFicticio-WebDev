// data padrão navegador
window.onload = function() {
  date();
};

function date() {
  var element = document.getElementById("date");
  var dataAtual = new Date();
  element.innerHTML = "Data: " + dataAtual.toLocaleDateString();
}

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
alert("Seja bem vindo!")
function validar() {
  let nome = document.getElementById("nomepid");
  let email = document.getElementById("email");
  let telefone = document.getElementById("telefone");
  if (nome.value == "" || telefone.value == "" || email.value == "") {
    alert("Preencha todos os campos!")
  }
}