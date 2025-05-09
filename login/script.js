async function login(event) {
    event.preventDefault();
    
    // Pegando as informações que o usuario forneceu (tirado da aula kk)
    const email = document.getElementById("emailUser").value.trim();
    const senha = document.getElementById("passwordUser").value.trim();
    const message = document.getElementById("message");

    // Se não preencheu o email e a senha, preencha denovo
    if (!email || !senha) {
      message.textContent = "Preencha todos os campos.";
      message.style.color = "red";
      return;
    }
    
    // Pegando as informações de quem logou e salvando elas no LocalStorage
    try {
      const response = await fetch("https://681bd5256ae7c794cf6fe904.mockapi.io/frontend");
      const users = await response.json();
  
      const userFound = users.find(user => user.email === email && user.senha === senha);
  
      if (userFound) {
        localStorage.setItem("user", JSON.stringify(userFound));
        window.location.href = "../index.html";
      } else {
        message.textContent = "Email ou senha incorretos.";
        message.style.color = "red";
      }
    } catch (error) {
      console.error("Erro:", error);
      message.textContent = "Erro ao conectar com o servidor.";
      message.style.color = "red";
    }
  }