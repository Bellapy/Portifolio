// Aguarda o DOM estar completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos que devem ser revelados ao rolar
    const elementsToReveal = document.querySelectorAll('.reveal');

    // Configurações para o Intersection Observer
    // threshold: 0.1 significa que o callback será acionado quando 10% do elemento estiver visível
    const observerOptions = {
        root: null, // Observa em relação à viewport do navegador
        rootMargin: '0px',
        threshold: 0.1 
    };

    // A função que será executada quando um elemento observado cruzar o threshold
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Verifica se o elemento está 'intersectando' (visível) na viewport
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para acionar a transição CSS
                entry.target.classList.add('visible');
                
                // [Otimização] Para de observar o elemento uma vez que ele já foi revelado
                observer.unobserve(entry.target);
            }
        });
    };

    // Cria uma nova instância do observador
    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // Pede ao observador para monitorar cada um dos elementos selecionados
    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

});