function acessarPerfil() {
  const usuarioLogado = localStorage.getItem("user");

  if (usuarioLogado) {
    window.location.href = "../perfil/index.html";
  } else {
    window.location.href = "../login/index.html";
  }
}