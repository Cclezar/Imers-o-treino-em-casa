function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      // Se estiver vazio, exibe uma mensagem de erro na seção de resultados
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algum valor!</p>";
      return; // Interrompe a função
    }
  
    // Converte o valor da pesquisa para minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa as variáveis para armazenar os resultados e as informações de cada item
    let resultados = "";
    let titulo = "";
    let tags = "";
  
    // Itera sobre cada item do conjunto de dados
    for (let dado of dados) {
      // Converte o título e as tags do item para minúsculas para comparação
      titulo = dado.titulo.toLowerCase();
      tags = dado.tags.toLowerCase();
  
      // Verifica se o título ou as tags do item contêm o termo pesquisado
      if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se encontrar uma correspondência, adiciona o item aos resultados
        resultados += `
          <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.nivel}</p>
            <p class="descricao-meta">${dado.exercicios}</p>
            <p class="descricao-meta">${dado.materiais}</p>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta">${dado.observacao}</p>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (!resultados) {
      // Se não houver resultados, exibe uma mensagem informando
      resultados = "<p>Nada foi encontrado!</p>";
    }
  
    // Atualiza o conteúdo da seção de resultados com os resultados encontrados (ou a mensagem de "não encontrado")
    section.innerHTML = resultados;
  }
  


