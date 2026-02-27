// 1. Selecionando os elementos
const campoInput = document.querySelector("#campoInput");
const resultado = document.querySelector("#resultado");

// 2. Ouvindo o evento de digitação ('input')
campoInput.addEventListener("input", function() {
    
    // 3. Pegando o que foi digitado
    const textoDigitado = campoInput.value;
    
    // 4. Jogando para o parágrafo
    resultado.innerText = textoDigitado;
    
    // Bônus: Se digitar "segredo", muda a cor!
    if (textoDigitado === "segredo") {
        resultado.style.color = "red";
        resultado.innerText = "VOCÊ DESCOBRIU! 🕵️‍♂️";
    } else {
        resultado.style.color = "black";
    }
});