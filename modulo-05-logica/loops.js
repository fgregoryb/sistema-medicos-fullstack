// 1. Criando a Lista (Array)
// Usamos colchetes [] e separamos por vírgula.
const exerciciosCostas = ["Puxada Alta", "Remada Curvada", "Serrote", "Levantamento Terra"];

console.log("--- MEU TREINO DE HOJE ---");

// 2. O Loop (A Mágica)
// i = index (índice/contador)
// exerciciosCostas.length = O tamanho da lista (4 itens)

for (let i = 0; i < exerciciosCostas.length; i++) {
    
    // Acessando o item da lista pela posição [i]
    const exercicioAtual = exerciciosCostas[i];
    
    console.log(`Exercício ${i + 1}: ${exercicioAtual}`);
}

console.log("--- FIM DO TREINO ---");