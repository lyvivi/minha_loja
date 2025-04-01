// Exemplo de produtos
const produtos = [
    { id: 1, nome: "Produto 1", preco: 99.99 },
    { id: 2, nome: "Produto 2", preco: 149.99 },
    { id: 3, nome: "Produto 3", preco: 199.99 }
    { id: 4, nome: "Produto 4", preco: 299.99 }
];

// Carrinho de compras (armazenado no localStorage para persistir os dados)
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Função para atualizar o carrinho no HTML
function atualizarCarrinho() {
    const carrinhoTabela = document.getElementById("itens-carrinho");
    carrinhoTabela.innerHTML = ""; // Limpar tabela

    let total = 0;
    
    // Adiciona cada item do carrinho na tabela
    carrinho.forEach((item, index) => {
        total += item.preco * item.quantidade;
        carrinhoTabela.innerHTML += `
            <tr>
                <td>${item.nome}</td>
                <td>R$ ${item.preco.toFixed(2)}</td>
                <td>
                    <button onclick="alterarQuantidade(${index}, -1)">-</button>
                    ${item.quantidade}
                    <button onclick="alterarQuantidade(${index}, 1)">+</button>
                </td>
                <td>R$ ${(item.preco * item.quantidade).toFixed(2)}</td>
                <td><button onclick="removerItem(${index})">Remover</button></td>
            </tr>
        `;
    });

    // Atualiza o total
    document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para adicionar ou remover quantidade de um produto
function alterarQuantidade(index, delta) {
    const item = carrinho[index];
    item.quantidade += delta;

    if (item.quantidade <= 0) {
        carrinho.splice(index, 1); // Remove o item se a quantidade for menor ou igual a zero
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Função para remover um item do carrinho
function removerItem(index) {
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
    } else {
        alert("Compra finalizada com sucesso!");
        localStorage.removeItem("carrinho"); // Limpar o carrinho
        atualizarCarrinho(); // Atualiza a página após finalização
    }


// Inicializar carrinho ao carregar a página
atualizarCarrinho();
// script.js


    // Ação quando o botão for clicado
    // Por exemplo, redirecionar o usuário para uma página de pagamento
    alert("Compra finalizada com sucesso! Você será redirecionado para a página de pagamento.");
  
    // Aqui, você pode redirecionar para outra página, como a página de pagamento
    window.location.href = "pagina_de_pagamento.html"; // Exemplo de redirecionamento
  }
