// Função para gerar combinações 4 a 4
function gerarCombinacoes(array, tamanho) {
    const resultado = [];
    
    const combinar = (inicio, combinacaoAtual) => {
        if (combinacaoAtual.length === tamanho) {
            resultado.push([...combinacaoAtual]);
            return;
        }

        for (let i = inicio; i < array.length; i++) {
            combinacaoAtual.push(array[i]);
            combinar(i + 1, combinacaoAtual);
            combinacaoAtual.pop();
        }
    };

    combinar(0, []);
    return resultado;
}

document.getElementById('gerarCartelas').addEventListener('click', function () {
    const input = document.getElementById('numerosUsuario').value;

    // Processar entrada do usuário
    const numeros = input
        .split(',')
        .map(numero => parseInt(numero.trim()))
        .filter(numero => !isNaN(numero));

    if (numeros.length < 4) {
        alert('Por favor, insira pelo menos 4 números para gerar as combinações.');
        return;
    }

    // Gerar combinações 4 a 4
    const combinacoes = gerarCombinacoes(numeros, 4);

    // Exibindo as cartelas
    const resultadoDiv = document.getElementById('cartelas');
    resultadoDiv.innerHTML = ''; // Limpa resultados anteriores
    combinacoes.forEach((cartela, index) => {
        const cartelaDiv = document.createElement('div');
        cartelaDiv.textContent = `Cartela ${index + 1}: ${cartela.join(', ')}`;
        resultadoDiv.appendChild(cartelaDiv);
    });
});
