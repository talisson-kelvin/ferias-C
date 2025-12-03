// Dados
const claraContent = {
    dialogues: [
        "Oi! Se você tá vendo isso, já saiba: você é alguém muito especial nesses meses pra mim.",
        "A gente viveu muita coisa legal e eu quis juntar tudo aqui num cantinho só seu.",
        "Tem momentos, risadas e um pouco da energia que você sempre traz.",
        "Fiz tudo com muito carinho porque você merece.",
        "Quando quiser continuar, é só clicar no botão. Vambora!"
    ],

    tags: ["extrovertida", "educada", "fé", "energia boa", "F1", "gentil"],

    timeline: [
        { title: "Início", text: "O começo de uma amizade que trouxe muita luz." },
        { title: "Conversa Marcante", text: "Aquele papo leve que rendeu ótimas risadas e conexão." },
        { title: "Conquistas", text: "Momento de ver seu crescimento e vibrar junto!" },
        { title: "Energia Total", text: "Sempre trazendo o ânimo que o ambiente precisava." },
        { title: "O Agora", text: "Pronta pra criar ainda mais memórias boas." }
    ],

    moments: [
        { icon: "fas fa-flag-checkered", text: "Conversas que me fizeram entender como é ter uma amiga." },
        { icon: "fas fa-laugh-squint", text: "Sua habilidade de alegrar o dia." },
        { icon: "fas fa-hands-praying", text: "Sua fé que inspira." },
        { icon: "fas fa-bolt", text: "O alto astral que contagia todos ao redor." },
        { icon: "fas fa-sun", text: "A leveza com que lida com os desafios." },
        { icon: "fas fa-comment-dots", text: "Sua pontualidade nas respostas e atenção." }
    ],

    brought: ["Alegria pura.", "Paz e leveza.", "Exemplo de fé."],
    learned: ["Que a fé move montanhas.", "A importância da educação em qualquer papo.", "Que ser extrovertido é uma força."],
    top5: ["Extrovertida", "Gentileza Inegável", "Foco e Determinação", "Alto Astral Constante", "Amizade Sincera"]
};

let currentDialogue = 0;
let isLastDialogue = false;

function nextDialogue() {
    const text = document.getElementById("dialogue-text");
    const btn = document.getElementById("next-button");

    text.textContent = claraContent.dialogues[currentDialogue];
    currentDialogue++;

    if (currentDialogue === claraContent.dialogues.length) {
        btn.textContent = "Começar Retrospectiva";
        isLastDialogue = true;
    }
}

function startMainSite() {
    if (!isLastDialogue) {
        nextDialogue();
        return;
    }

    const intro = document.getElementById("intro-screen");
    const main = document.getElementById("main-container");

    intro.classList.add("fade-out");

    setTimeout(() => {
        intro.remove();
        main.style.opacity = "1";
        main.style.transform = "translateX(0)";
    }, 500);
}

window.onload = () => {
    document.getElementById("next-button").onclick = startMainSite;
    nextDialogue();
    loadDynamicContent();
};

// Inserção de conteúdo dinâmico
function loadDynamicContent() {
    // TAGS
    document.getElementById("tags-container").innerHTML =
        claraContent.tags
            .map(tag => `<span class="bg-red-600/40 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">${tag}</span>`)
            .join("");

    // MOMENTOS
    document.getElementById("moments-container").innerHTML =
        claraContent.moments
            .map(m => `
                <div class="metallic-card p-4 rounded-lg flex items-start space-x-4 transition hover:bg-gray-700/50">
                    <i class="${m.icon} text-2xl text-red-500 mt-1"></i>
                    <p class="text-gray-300">${m.text}</p>
                </div>
            `)
            .join("");

    // VOCÊ TROUXE
    document.getElementById("brought-list").innerHTML =
        claraContent.brought
            .map(i => `<li class="text-gray-300 flex items-start"><i class="fas fa-check text-green-400 mt-1 mr-3"></i> ${i}</li>`)
            .join("");

    // EU APRENDI
    document.getElementById("learned-list").innerHTML =
        claraContent.learned
            .map(i => `<li class="text-gray-300 flex items-start"><i class="fas fa-feather-pointed text-yellow-400 mt-1 mr-3"></i> ${i}</li>`)
            .join("");

    // TOP 5
    document.getElementById("top5-list").innerHTML =
        claraContent.top5
            .map((c, index) => `<li class="text-lg"><span class="font-bold text-red-400 mr-2">${index + 1}.</span> ${c}</li>`)
            .join("");

    // TIMELINE
    document.getElementById("timeline-container").innerHTML =
        claraContent.timeline
            .map(t => `
                <div class="mb-8 flex items-start relative">
                    <div class="timeline-dot absolute -left-1 mt-2.5 w-3 h-3 rounded-full"></div>
                    <div class="ml-6 p-4 w-full bg-gray-800 rounded-lg shadow-xl hover:bg-gray-700 transition">
                        <h3 class="text-xl font-semibold text-red-400">${t.title}</h3>
                        <p class="text-gray-400 text-sm mt-1">${t.text}</p>
                    </div>
                </div>
            `)
            .join("");
}
// Função para revelar a frase secreta (alert + console.log para depuração)
function revealSecret() {
    const secret = "Sua frase secreta é: Você é a pole position da minha amizade!";
    // alerta amigável (visível para quem clicar)
    alert(secret);
    // mensagem no console para quem preferir ver lá (útil para mobile/desktop devs)
    console.log("Frase secreta revelada:", secret);
}

// Conectar o botão após carregamento (caso o HTML já esteja montado)
window.addEventListener('DOMContentLoaded', () => {
    const secretBtn = document.getElementById('secret-button');
    if (secretBtn) {
        secretBtn.addEventListener('click', revealSecret);
    }
});


