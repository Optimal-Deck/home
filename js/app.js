import { initMenu } from './menu.js';
import { initContactForm } from './contact-form.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Aplicación inicializada.");
    initMenu();
    initContactForm();
});
