const usuarioSalvo = JSON.parse(localStorage.getItem("user"));

if (!usuarioSalvo) {
  window.location.href = "login.html";
} else {
  fetch(`https://681bd5256ae7c794cf6fe904.mockapi.io/frontend/${usuarioSalvo.id}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("nome").textContent = data.nome || "Não informado";
      document.getElementById("email").textContent = data.email;
      document.getElementById("telefone").textContent = data.telefone || "Não informado";
      document.getElementById("endereco").textContent = data.endereco || "Não informado";
    
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