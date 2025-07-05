// Este é um comentário em JavaScript. Explique a lógica do seu código aqui. [cite: 238]

// Adicionamos um 'escutador' de eventos que espera o DOM (a página) carregar completamente.
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os links do menu e todas as seções de conteúdo.
    const menuLinks = document.querySelectorAll('.menu-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Função para lidar com o clique em um link do menu.
    function handleMenuClick(event) {
        // Previne o comportamento padrão do link (que seria recarregar a página).
        event.preventDefault();

        const targetId = event.target.dataset.target;

        // Esconde todas as seções de conteúdo.
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Remove a classe 'active-link' de todos os links para o estilo visual.
        menuLinks.forEach(link => {
            link.classList.remove('active-link');
        });

        // Mostra a seção de conteúdo correspondente ao link clicado.
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Adiciona a classe 'active-link' ao link que foi clicado.
        event.target.classList.add('active-link');
    }

    // Adiciona o 'escutador' de clique a cada um dos links do menu.
    menuLinks.forEach(link => {
        link.addEventListener('click', handleMenuClick);
    });

    // Garante que o primeiro link já comece com o estilo de ativo.
    // O 'querySelector' pega apenas o primeiro que ele encontrar.
    document.querySelector('.menu-link[data-target="sobre"]').classList.add('active-link');
});