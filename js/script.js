//script para activar el menu hamburguesa
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector("#menu-btn");
    const menu = document.querySelector("#menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    } else {
        console.error("Elemento no encontrado en el DOM");
    }
});


// Script de validacion de boostrap
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()