// document.getElementById('btn').
// addEventListener('click', function() {
//     this.classList.toggle('open');

//     document.getElementById('menu-responsivo').classList.toggle('aberto');
// });

// const btnAulas = document.getElementById('submenu-responsivo');
// const submenu = document.querySelector('.mais-opcoes');

// btnAulas.addEventListener('click', (e) => {
// e.preventDefault();
// submenu.classList.toggle('ativo');
// });

// Controle do menu hamburguer
document.getElementById('btn').addEventListener('click', function() {
    this.classList.toggle('open');

    const menu = document.getElementById('menu-responsivo');
    const submenu = document.querySelector('.mais-opcoes');

    menu.classList.toggle('aberto');

    // Verifica se o menu foi fechado
    if (!menu.classList.contains('aberto')) {
        submenu.classList.remove('ativo'); // Fecha o submenu também
    }
});

// Controle do submenu (Aulas)
const btnAulas = document.getElementById('submenu-responsivo');
const submenu = document.querySelector('.mais-opcoes');

btnAulas.addEventListener('click', (e) => {
    e.preventDefault();
    submenu.classList.toggle('ativo');
});
