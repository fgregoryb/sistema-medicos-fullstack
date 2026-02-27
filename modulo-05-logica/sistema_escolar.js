// 1. A Lista de Notas (Array)
const notas = [8.5, 7.0, 6.5, 8.0];

// 2. A Função que calcula a Média
function calcularMedia(listaDeNotas) {
    let somaTotal = 0;

    // Loop para somar todas as notas
    for (let i = 0; i < listaDeNotas.length; i++) {
        somaTotal = somaTotal + listaDeNotas[i];
    }

    // Média = Soma dividida pela quantidade de notas (.length!)
    const media = somaTotal / listaDeNotas.length;
    return media;
}

// 3. Executando
const mediaFinal = calcularMedia(notas);

console.log(`A média final do aluno é: ${mediaFinal.toFixed(1)}`);

// 4. Decisão (Aprovado ou Reprovado?)
// Regra: Média maior ou igual a 7 passa.
if (mediaFinal >= 7) {
    console.log("Status: ✅ APROVADO!");
} else {
    console.log("Status: ❌ REPROVADO. Estude mais.");
}