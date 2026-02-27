const nome = "Gregory";
const peso = 88.0; 
const altura = 1.75;
const imc = peso / (altura * altura);

console.log(`IMC: ${imc.toFixed(2)}`);

// Lógica de Decisão (O Cérebro)
if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso.");
} else if (imc < 25) {
    console.log("Classificação: Peso normal.");
} else if (imc < 30) {
    console.log("Classificação: Sobrepeso (Ou muito músculo! 💪)");
} else {
    console.log("Classificação: Obesidade.");
}