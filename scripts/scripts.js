// scripts.js

// Função para mostrar conteúdo com base no ID da seção
function showContent(sectionId) {
    // Esconde todas as seções de conteúdo
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Mostra a seção selecionada
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Mostra a seção "Sobre Mim" ao carregar a página
showContent('content1');

// Adiciona um evento ao formulário para mostrar a mensagem de sucesso
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    document.getElementById('success-message').style.display = 'block'; // Mostra a mensagem de sucesso
    // Opcional: você pode limpar os campos do formulário após o envio
    document.getElementById('contact-form').reset();
});
