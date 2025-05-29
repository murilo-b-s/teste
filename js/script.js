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


const submenuLinks = document.querySelectorAll('.mais-opcoes a');

submenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-responsivo').classList.remove('aberto');
        document.getElementById('btn').classList.remove('open');
        submenu.classList.remove('ativo'); // Opcional: fechar o submenu também
    });
});


const carousel = document.querySelector('.carrossel');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');

btnLeft.addEventListener('click', () => {
    carousel.scrollBy({ left: -1000, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
    carousel.scrollBy({ left: 1000, behavior: 'smooth' });
});


const carrossel = document.querySelector('.carrossel');
const itens = document.querySelectorAll('.item');
const indicadoresContainer = document.querySelector('.indicadores');

const itemsPerPage = window.innerWidth <= 430 ? 4 : 6; // Ajuste conforme seu layout
const totalPaginas = Math.ceil(itens.length / itemsPerPage);

// Cria as bolinhas
for (let i = 0; i < totalPaginas; i++) {
    const bolinha = document.createElement('div');
    bolinha.classList.add('bolinha');
    if (i === 0) bolinha.classList.add('ativo');
    indicadoresContainer.appendChild(bolinha);
}

const bolinhas = document.querySelectorAll('.indicadores .bolinha');

// Função para atualizar as bolinhas ativas
function atualizarIndicadores() {
    const scrollLeft = carrossel.scrollLeft;
    const larguraTotal = carrossel.scrollWidth - carrossel.clientWidth;
    const porcentagem = scrollLeft / larguraTotal;
    const index = Math.round(porcentagem * (totalPaginas - 1));

    bolinhas.forEach((bolinha, i) => {
        bolinha.classList.toggle('ativo', i === index);
    });
}

// Escuta o evento de scroll do carrossel
carrossel.addEventListener('scroll', atualizarIndicadores);

// Atualiza ao clicar nos botões
btnLeft.addEventListener('click', () => {
    carrossel.scrollBy({ left: -1000, behavior: 'smooth' });
});
btnRight.addEventListener('click', () => {
    carrossel.scrollBy({ left: 1000, behavior: 'smooth' });
});


// const carousel = document.querySelector('.carrossel');
// const btnLeft = document.querySelector('.left');
// const btnRight = document.querySelector('.right');
// const blocos = document.querySelectorAll('.carrossel .bloco');
// const indicadores = document.querySelectorAll('.indicadores .bolinha');

// let indexAtual = 0;

// // Função que atualiza o scroll e os indicadores
// function atualizarCarrossel() {
//     const largura = carousel.clientWidth;
//     carousel.scrollTo({
//         left: indexAtual * largura,
//         behavior: 'smooth'
//     });

//     indicadores.forEach((dot, i) => {
//         dot.classList.toggle('ativo', i === indexAtual);
//     });
// }

// // Botão direito
// btnRight.addEventListener('click', () => {
//     if (indexAtual < blocos.length - 1) {
//         indexAtual++;
//         atualizarCarrossel();
//     }
// });

// // Botão esquerdo
// btnLeft.addEventListener('click', () => {
//     if (indexAtual > 0) {
//         indexAtual--;
//         atualizarCarrossel();
//     }
// });

// // Clicar nas bolinhas
// indicadores.forEach((dot, i) => {
//     dot.addEventListener('click', () => {
//         indexAtual = i;
//         atualizarCarrossel();
//     });
// });

// // Scroll manual (com o dedo)
// carousel.addEventListener('scroll', () => {
//     const largura = carousel.clientWidth;
//     const novoIndex = Math.round(carousel.scrollLeft / largura);
//     if (novoIndex !== indexAtual) {
//         indexAtual = novoIndex;
//         atualizarCarrossel();
//     }
// });
const numBolinhas = 2; // fixo

// Supondo que as bolinhas estão no HTML com pelo menos 2 spans
const indicadores = document.querySelectorAll('.indicadores .bolinha');

// Limitar índice máximo para 1
const maxIndex = numBolinhas - 1;

function atualizarCarrossel() {
    const largura = carousel.clientWidth;
    carousel.scrollTo({
        left: indexAtual * largura,
        behavior: 'smooth'
    });

    indicadores.forEach((dot, i) => {
        if (i < numBolinhas) {
            dot.classList.toggle('ativo', i === indexAtual);
        } else {
            dot.style.display = 'none'; // oculta bolinhas extras
        }
    });
}

btnRight.addEventListener('click', () => {
    if (indexAtual < maxIndex) {
        indexAtual++;
        atualizarCarrossel();
    }
});

btnLeft.addEventListener('click', () => {
    if (indexAtual > 0) {
        indexAtual--;
        atualizarCarrossel();
    }
});

indicadores.forEach((dot, i) => {
    if(i < numBolinhas) {
        dot.addEventListener('click', () => {
            indexAtual = i;
            atualizarCarrossel();
        });
    } else {
        dot.style.display = 'none';
    }
});

// Ajuste no scroll para não passar do limite máximo
const cards = document.querySelectorAll('.card');

// Detecta se é dispositivo mobile
const isMobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768;

cards.forEach(card => {
    const overlay = card.querySelector('.card-preto');

    if (isMobile) {
        // Para mobile: toggle no clique
        card.addEventListener('click', () => {
            const isVisible = overlay.style.opacity === '1';
            // Fecha todos antes de abrir outro
            document.querySelectorAll('.card .card-preto').forEach(o => o.style.opacity = '0.1');
            overlay.style.opacity = isVisible ? '0.1' : '1';
        });
    } else {
        // Para desktop: aparece no hover
        card.addEventListener('mouseenter', () => {
            overlay.style.opacity = '1';
        });
        card.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0.1';
        });
    }
});



// const cards = document.querySelectorAll('.card');
// // const cardPreto = card.querySelectorAll('.cardPreto')
// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         if (window.innerWidth <= 430) {
//             const cardPreto = card.querySelector('.card-preto');
//             if (cardPreto) {
//                 cardPreto.classList.toggle('ativo');
//             }
//         }
//     });
// });
