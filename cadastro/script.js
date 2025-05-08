async function cadastrar(event) {
  event.preventDefault();

  const nome = document.getElementById("nomeUser").value.trim();
  const telefone = document.getElementById("telefoneUser").value.trim();
  const endereco = document.getElementById("enderecoUser").value.trim();
  const email = document.getElementById("emailUser").value.trim();
  const senha = document.getElementById("passwordUser").value.trim();

  if (!nome || !telefone || !endereco || !email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  const novoUsuario = {
    nome,
    telefone,
    endereco,
    email,
    senha,
  };

  try {
    const response = await fetch(
      "https://681bd5256ae7c794cf6fe904.mockapi.io/frontend",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoUsuario),
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao cadastrar usuário.");
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = "../login/index.html";
  } catch (error) {
    console.error("Erro no cadastro:", error);
    alert("Erro ao se cadastrar. Tente novamente mais tarde.");
  }
}
