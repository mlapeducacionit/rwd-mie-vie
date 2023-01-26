/* Estilos */
// Librería Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Fuentes
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/700.css";
// Estilos propios
import './style.css'

/* Scripts */

import 'bootstrap/dist/js/bootstrap.min.js'

console.log('Hola mundo desde Vite!')

// Declaraciones
    const menuBtn = document.querySelector('nav .btn')
    const menuLst = document.querySelector('nav .menu')
    // console.log(menuBtn, menuLst)

    menuBtn.addEventListener('click', function() {
        if(menuLst.classList.toggle('active')) {
            menuBtn.innerHTML = '&times;'
        } else {
            menuBtn.innerHTML = '&equiv;'
        }
    })
