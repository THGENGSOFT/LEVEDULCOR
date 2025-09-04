// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Adicionar classe ativa ao item de navegação quando a seção estiver visível
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function highlightNavLink() {
    let index = sections.length;
    
    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
    
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) {
        navLinks[index].classList.add('active');
    }
}

window.addEventListener('scroll', highlightNavLink);
highlightNavLink();

// Adicionar animação de fade-in para as seções ao rolar
function checkScroll() {
    const elements = document.querySelectorAll('.sobre-grid, .cardapio .item, .depoimentos blockquote');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar estilos para animação
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.sobre-grid, .cardapio .item, .depoimentos blockquote');
    
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Verificar a posição inicial
    setTimeout(checkScroll, 100);
});

window.addEventListener('scroll', checkScroll);

// Adicionar efeito de carregamento para imagens
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Adicionar uma classe para imagens carregadas
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
});
