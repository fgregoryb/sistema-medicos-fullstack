function resultadoImc (peso, altura){
    const imc = peso / (altura * altura);
    return imc;
}

const imcGregory = resultadoImc (88.0, 1.75)
const imcAmigo = resultadoImc (70.0, 1.80)
const imcBodybuilder = resultadoImc (110.0, 1.75); // Alguém muito forte

console.log(`O imc do Gregory é: ${imcGregory.toFixed(2)}`)
console.log(`O imc do Amigo é: ${imcAmigo.toFixed(2)}`)
console.log(`O imc do Bodybilder é: ${imcBodybuilder.toFixed(2)}`)