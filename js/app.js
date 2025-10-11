import { initMenu } from './menu.js';
import { initContactForm } from './contact-form.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Aplicación inicializada.");
    initMenu();
    initContactForm();
});





// const menuToggle = document.querySelector('#menuToggle')
// const mainMenu = document.querySelector('#mainMenu')

// const formularioContacto = document.querySelector('#formularioContacto')
// const statusDiv = document.querySelector('#mensajeStatus')

// const nombreForm = document.querySelector('#nombre')
// const emailForm = document.querySelector('#email')
// const telefonoForm = document.querySelector('#telefono')
// const tipoProyectoForm = document.querySelector('#tipoProyecto')
// const mensajeForm = document.querySelector('#mensaje')

// const mediaQuery = window.matchMedia("(max-width: 900px)")

// const showMainMenu = () => mainMenu.style.display = 'flex';
// const hiddenMainMenu = () => mainMenu.style.display = 'none';

// const infoContacto = {
//     nombre: "",        
//     email: "",
//     telefono: "",
//     tipoProyecto: "",
//     mensaje: ""
// }

// menuToggle.addEventListener('click', () => {
//     if(mainMenu.style.display === 'none'){
//         showMainMenu()
//     }else{
//         hiddenMainMenu()
//     }
// })

// mediaQuery.addEventListener('change', e => {
//     if(e.matches){    
//         hiddenMainMenu()
//     }else{
//         showMainMenu()
//     }
// })


// nombreForm.addEventListener('input', e => infoContacto.nombre = e.target.value)
// emailForm.addEventListener('change', e => infoContacto.email = e.target.value)
// telefonoForm.addEventListener('change', e => infoContacto.telefono = e.target.value)
// tipoProyectoForm.addEventListener('change', e => infoContacto.tipoProyecto = e.target.value)
// mensajeForm.addEventListener('change', e => infoContacto.mensaje = e.target.value)


// formularioContacto.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     statusDiv.textContent = "Enviando... ⏳";

//     console.log(infoContacto)

//     if(infoContacto.nombre === "" || infoContacto.email === "" || infoContacto.tipoProyectoForm === "" || infoContacto.mensajeForm === "") {
//         setTimeout(() => {
//             statusDiv.textContent = "Faltan completar campos...";
//         }, 5000);
//         return
//     }


//     try {
//         const response = await fetch("http://localhost:3000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(infoContacto),
//         });

//         const result = await response.json();

//         if (result.success) {
//         statusDiv.textContent = "✅ Mensaje enviado correctamente";
//         formularioContacto.reset();
//         } else {
//         statusDiv.textContent = "❌ " + result.message;
//         }
//     } catch (error) {
//         console.error(error);
//         statusDiv.textContent = "❌ Error al enviar, revisa tu conexión";
//     }
// })