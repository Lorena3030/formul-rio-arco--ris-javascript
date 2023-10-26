function soma(a, b) {
    return a + b;
}

// Chamando a função para somar dois números
let resultado = soma(5, 3);

// Atualizando o elemento HTML com o resultado
document.getElementById("resultado").textContent = "A soma é: " + resultado;