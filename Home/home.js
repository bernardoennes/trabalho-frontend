function acessarPerfil() {
  const usuarioLogado = localStorage.getItem("user");

  if (usuarioLogado) {
    window.location.href = "../perfil/index.html";
  } else {
    window.location.href = "../login/index.html";
  }
}

const slides = document.querySelectorAll(".banner-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);
showSlide(currentSlide);
