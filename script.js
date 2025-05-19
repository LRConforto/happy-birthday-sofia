let paginaAtual = 0;
const paginas = document.querySelectorAll('.pagina');

function proximaPagina() {
    if (paginaAtual < paginas.length - 1) {
        const pagina = paginas[paginaAtual];
        pagina.classList.add('virada');
        pagina.classList.remove('ativa');
        paginaAtual++;
        paginas[paginaAtual].classList.add('ativa');
    } else {
        // Recomeça ou trava na última
        alert("Fim do cartão 🎉 TE AMO! 🩷");
       setTimeout(() => window.location.href = 'index.html', 400);
    }
}