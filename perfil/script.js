const usuarioSalvo = JSON.parse(localStorage.getItem("user"));

if (!usuarioSalvo) {
  window.location.href = "login.html";
} else {
  fetch(`https://681bd5256ae7c794cf6fe904.mockapi.io/frontend/${usuarioSalvo.id}`)
    .then(res => res.json())
    .then(dados => {
      document.getElementById("nome").textContent = dados.nome || "Não informado";
      document.getElementById("email").textContent = dados.email;
      document.getElementById("telefone").textContent = dados.telefone || "Não informado";
      document.getElementById("endereco").textContent = dados.endereco || "Não informado";
    })
    .catch(err => {
      console.error("Erro ao buscar usuário:", err);
      document.getElementById("profile-content").innerHTML = "<p>Erro ao carregar informações do perfil.</p>";
    });
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "../login/index.html";
}