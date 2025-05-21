// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }

// document.querySelectorAll('.accordion').forEach(button => {
//   button.addEventListener('click', function () {
//       const icon = this.querySelector('svg'); 
//       icon.classList.toggle('rotate');
//   });
// });


const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    // Alterna classe do botão
    this.classList.toggle("active");

    // Alterna o painel
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    // Alterna rotação do ícone (caso tenha um <svg>)
    const icon = this.querySelector("svg");
    if (icon) {
      icon.classList.toggle("rotate");
    }
  });
});