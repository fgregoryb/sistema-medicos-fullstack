// 1. SELECIONAR OS ELEMENTOS
const input = document.querySelector("#inputTarefa");
const botao = document.querySelector("#btnAdicionar");
const lista = document.querySelector("#listaTarefas");

// 2. FUNÇÃO QUE CRIA A TAREFA
function adicionarTarefa() {
    
    // Pega o texto que o usuário digitou
    const textoTarefa = input.value;

    // Validação: Se estiver vazio, não faz nada (retorna)
    if (textoTarefa === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    // --- A MÁGICA DO DOM ---
    
    // A. Cria um novo elemento <li> (item de lista) na memória
    const novaLi = document.createElement("li");
    
    // B. Coloca o texto dentro dele
    novaLi.innerText = textoTarefa;
    
    // C. Adiciona classes do Tailwind para ficar bonito
    novaLi.className = "bg-gray-50 p-3 rounded shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-100";

    // D. FUNCIONALIDADE EXTRA: Clicar para riscar/concluir
    novaLi.addEventListener("click", function() {
        // O .toggle adiciona a classe se não tiver, e remove se tiver
        novaLi.classList.toggle("riscado");
    });

    // E. Finalmente, pendura o item na lista (<ul>) que estava vazia
    lista.appendChild(novaLi);

    // --- LIMPEZA ---
    // Limpa o input para a próxima tarefa e foca nele de novo
    input.value = "";
    input.focus();
}

// 3. OUVIR O CLIQUE NO BOTÃO
botao.addEventListener("click", adicionarTarefa);

// 4. BÔNUS: OUVIR O "ENTER" NO TECLADO
input.addEventListener("keypress", function(evento) {
    if (evento.key === "Enter") {
        adicionarTarefa();
    }
});