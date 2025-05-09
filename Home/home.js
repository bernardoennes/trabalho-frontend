// Ao clicar no botão, se n tiver usuario no Local Storage, manda pro login, se não manda pro perfil
function acessarPerfil() {
  const usuarioLogado = localStorage.getItem("user");

  if (usuarioLogado) {
    window.location.href = "perfil/index.html";
  } else {
    window.location.href = "login/index.html";
  }
}

// Pega todos os slides e altera o valor "active" para mudar qual esta na frente
const slides = document.querySelectorAll(".banner-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Ao passar pelas 3 imagens, volta pra primeira
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Espaçamento pro usuario ter tempo de ler cada uma
showSlide(currentSlide);
