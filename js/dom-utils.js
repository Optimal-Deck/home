/**
 * Selecciona un elemento del DOM.
 * @param {string} selector - El selector CSS del elemento.
 * @returns {Element | null} El elemento seleccionado o null si no se encuentra.
 */
export const getElement = (selector) => document.querySelector(selector);

/**
 * Muestra un elemento estableciendo su estilo 'display' a 'flex'.
 * @param {Element} element - El elemento del DOM a mostrar.
 */
export const showElement = (element) => {
    if (element) {
        element.style.display = 'flex';
    }
};

/**
 * Oculta un elemento estableciendo su estilo 'display' a 'none'.
 * @param {Element} element - El elemento del DOM a ocultar.
 */
export const hideElement = (element) => {
    if (element) {
        element.style.display = 'none';
    }
};

// Exportamos todas las referencias al DOM para usarlas en otros módulos
export const DOM = {
    menuToggle: getElement('#menuToggle'),
    mainMenu: getElement('#mainMenu'),
    formularioContacto: getElement('#formularioContacto'),
    statusDiv: getElement('#mensajeStatus'),
    nombreForm: getElement('#nombre'),
    emailForm: getElement('#email'),
    telefonoForm: getElement('#telefono'),
    tipoProyectoForm: getElement('#tipoProyecto'),
    mensajeForm: getElement('#mensaje'),
    mediaQuery: window.matchMedia("(max-width: 900px)")
};