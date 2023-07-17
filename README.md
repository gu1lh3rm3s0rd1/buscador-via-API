# Buscador de Produtos

Aplicação feita com JavaScript e a API do Mercado Livre.
Este projeto é um buscador de produtos que consome dados de uma API externa para obter informações sobre os produtos disponíveis. O usuário pode pesquisar por palavras-chave e visualizar os detalhes de cada produto encontrado.

## Funcionalidades

- Pesquisa de produtos por palavras-chave.
- Exibição dos resultados de pesquisa com informações como título, preço e imagem do produto.
- Paginação dos resultados para uma melhor experiência do usuário.

## Tecnologias Utilizadas

- HTML, CSS e JavaScript para a construção da interface do aplicativo.
- Consumo da API do Mercado Livre para obter os dados dos produtos.
- Ferramentas de desenvolvimento, como Webpack ou Parcel, para facilitar o empacotamento do aplicativo.

## API Externa

O projeto consome dados de uma API externa de produtos chamada "ProductAPI". A documentação completa da API está disponível em [API](https://api.mercadolibre.com/sites/MLB/search).

## Como Usar

1. Clone o repositório ou faça o download dos arquivos do projeto.
2. Obtenha a chave de API do Mercado Livre para usar em suas requisições.
3. Abra o arquivo "index.html" em seu navegador.
4. Utilize a caixa de pesquisa para pesquisar produtos no Mercado Livre.

## Exemplo de Código

Aqui está um exemplo simplificado do código JavaScript usado para fazer uma chamada à API e exibir os resultados na página:

        const apiKey = 'SUA_CHAVE_DE_API';
        const searchQuery = 'celular';

        fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchQuery}&api_key=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            // Processar os resultados da pesquisa aqui
          })
          .catch(error => console.error(
            'Erro na requisição:', error)
          );

## Contribuição

Contribuições são bem-vindas! Se você deseja melhorar ou adicionar novas funcionalidades ao projeto Buscador de Produtos via API, sinta-se à vontade para fazer um fork do repositório e enviar um pull request.

## Autor

 - Nome: Guilherme Benjamin Sordi
 - GitHub: [gu1lh3rm3s0rd1](https://github.com/gu1lh3rm3s0rd1)
 - LinkedIn: [guilhermesordi](https://www.linkedin.com/in/guilherme-sordi-33ab06233/)

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
