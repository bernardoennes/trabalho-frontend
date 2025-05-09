const carrinho = [];

    async function buscarPizzaAPI(nomePizza, tamanho) {
      try {
        const response = await fetch(
          "https://681bd5256ae7c794cf6fe904.mockapi.io/pizzas"
        );
        const pizzas = await response.json();
        const pizza = pizzas.find(
          (p) => p.nome.toLowerCase() === nomePizza.toLowerCase()
        );
        if (!pizza) return null;

        return {
          nome: pizza.nome,
          preco: pizza.preco[tamanho],
          tamanho: tamanho,
        };
      } catch (e) {
        console.error("Erro ao acessar a API:", e);
        return null;
      }
    }

    function abrirCarrinho() {
      atualizarCarrinho();
      document.getElementById("overlay").style.display = "block";
    }

    function fecharCarrinho() {
      document.getElementById("overlay").style.display = "none";
    }

    function atualizarCarrinho() {
      const carrinhoDiv = document.getElementById("carrinho");
      carrinhoDiv.innerHTML = "<h2>Seu Carrinho</h2>";

      if (carrinho.length === 0) {
        carrinhoDiv.innerHTML += "<p>O carrinho está vazio.</p>";
        return;
      }

      const lista = document.createElement("ul");
      carrinho.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${
          item.nome
        } - ${item.tamanho.toUpperCase()} - R$ ${item.preco.toFixed(2)}`;
        lista.adicionarPizza(li);
      });

      carrinhoDiv.adicionarPizza(lista);
    }

    document.addEventListener("DOMContentLoaded", () => {
      const botoes = document.querySelectorAll(".pizza-img-card button");

      botoes.forEach((botao) => {
        botao.addEventListener("click", async function () {
          const pizzaCard = this.closest(".pizza-img-card");
          const nomePizza = pizzaCard
            .querySelector("h4")
            .textContent.replace("PIZZA", "")
            .trim();
          const tamanho = pizzaCard.querySelector("select").value;

          const pizza = await buscarPizzaAPI(nomePizza, tamanho);

          if (pizza) {
            carrinho.push(pizza);
            alert(
              `${pizza.nome} (${
                pizza.tamanho
              }) adicionada ao carrinho por R$ ${pizza.preco.toFixed(2)}.`
            );
          } else {
            alert("Não foi possível adicionar a pizza. Verifique a API.");
          }
        });
      });

      document.querySelector("button[onclick='abrir()']").onclick =
        abrirCarrinho;
    });