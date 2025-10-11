import { DOM, showElement, hideElement } from './dom-utils.js';

const toggleMenu = () => {
    if (DOM.mainMenu.style.display === 'none') {
        showElement(DOM.mainMenu);
    } else {
        hideElement(DOM.mainMenu);
    }
};

const handleMediaQueryChange = (e) => {
    if (e.matches) {
        // En pantallas pequeñas, ocultamos el menú inicialmente
        hideElement(DOM.mainMenu);
    } else {
        // En pantallas grandes, mostramos el menú
        showElement(DOM.mainMenu);
    }
};

/**
 * Inicializa los listeners para el menú de navegación.
 */
export const initMenu = () => {
    if (DOM.menuToggle && DOM.mainMenu) {
        DOM.menuToggle.addEventListener('click', toggleMenu);
    }

    if (DOM.mediaQuery) {
        // Ejecutar la función una vez al inicio
        handleMediaQueryChange(DOM.mediaQuery);
        // Agregar el listener para cambios futuros
        DOM.mediaQuery.addEventListener('change', handleMediaQueryChange);
    }
};