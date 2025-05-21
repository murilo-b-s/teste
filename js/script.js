document.getElementById('btn').
addEventListener('click', function() {
    this.classList.toggle('open');

    document.getElementById('menu-responsivo').classList.toggle('aberto');
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
accordion.addEventListener("click", function () {
    // Alterna a classe "active" no botão clicado
    this.classList.toggle("active");

    // Encontra o próximo painel (assumindo que o HTML tem ele logo após o botão)
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      // Se já está aberto, fecha
    panel.style.maxHeight = null;
    } else {
      // Abre suavemente com a altura do scroll
    panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});