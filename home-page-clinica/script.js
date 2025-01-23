function showPage(pageId) {
    const sections = document.querySelectorAll('main section');

    // Remove a classe "active" de todas as seções
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Adiciona a classe "active" à seção clicada
    const activeSection = document.getElementById(pageId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}
