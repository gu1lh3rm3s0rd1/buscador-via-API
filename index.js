
window.addEventListener("DOMContentLoaded", (event) => {

  //evento para capturar o submit
  document.getElementById('busca').addEventListener('submit', function (event) {
      event.preventDefault();

      //trim no valor capturado
      const query = document.getElementById('input').value.trim();
      if (query !== '') {
          searchProducts(query);

      }

  });

});

//funçao de busca
function searchProducts(query) {
    //api
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(query)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayResults(data.results))
        .catch(error => console.error('Erro ao realizar a pesquisa:', error));

}

function displayResults(results) {
  document.getElementById('results').innerHTML = '';

    if (results.length === 0) {
      document.getElementById('results').innerHTML = 'Nenhum resultado encontrado.';
        return;

    }

    results.forEach(function (product) {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<img src="${product.thumbnail}" alt="${product.title}">
                                    <p>${product.title}</p>
                                    <p>R$ ${product.price}</p>`;
        document.getElementById('results').appendChild(productElement);

    });
}
