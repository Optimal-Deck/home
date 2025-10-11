// contact-form.js
import { DOM } from './dom-utils.js';

const API_URL = "http://localhost:3000/api/contact";
const infoContacto = {
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "",
    mensaje: ""
};

/**
 * Maneja la actualización del objeto infoContacto cuando cambian los inputs.
 * @param {string} key - La clave a actualizar en infoContacto.
 * @returns {Function} Un manejador de eventos para el input.
 */
const createInputHandler = (key) => (e) => {
    infoContacto[key] = e.target.value;
};

/**
 * Muestra un mensaje de estado en el DOM y lo oculta después de un tiempo.
 * @param {string} message - El mensaje a mostrar.
 * @param {boolean} isError - Indica si el mensaje es un error (para logging).
 * @param {number} duration - Duración en ms para que el mensaje permanezca.
 */
const updateStatus = (message, isError = false, duration = 5000) => {
    if (DOM.statusDiv) {
        DOM.statusDiv.textContent = message;
        if (isError) {
            console.error(message);
        }

        if (duration > 0) {
             setTimeout(() => {
                // Borrar el mensaje de estado después de la duración
                DOM.statusDiv.textContent = "";
            }, duration);
        }
    }
};


const validateForm = () => {
    // Validamos que los campos obligatorios no estén vacíos
    const requiredFields = ['nombre', 'email', 'tipoProyecto', 'mensaje'];

    for (const field of requiredFields) {
        if (!infoContacto[field] || infoContacto[field].trim() === "") {
            updateStatus("Faltan completar campos obligatorios. 🛑", true);
            return false;
        }
    }
    return true;
};

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    updateStatus("Enviando... ⏳", false, 0); // Mostrar "Enviando" permanentemente

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(infoContacto),
        });

        const result = await response.json();

        if (result.success) {
            updateStatus("✅ Mensaje enviado correctamente", false, 8000);
            DOM.formularioContacto.reset();
            // Opcional: limpiar infoContacto después del envío exitoso
            Object.keys(infoContacto).forEach(key => infoContacto[key] = "");
        } else {
            // Error de la API con mensaje
            updateStatus(`❌ ${result.message}`, true, 10000);
        }
    } catch (error) {
        // Error de red
        updateStatus("❌ Error al enviar, revisa tu conexión.", true, 10000);
    }
};

/**
 * Inicializa los listeners para el formulario de contacto.
 */
export const initContactForm = () => {
    // Escuchadores para actualizar el estado del formulario
    if (DOM.nombreForm) DOM.nombreForm.addEventListener('input', createInputHandler('nombre'));
    if (DOM.emailForm) DOM.emailForm.addEventListener('change', createInputHandler('email'));
    if (DOM.telefonoForm) DOM.telefonoForm.addEventListener('change', createInputHandler('telefono'));
    if (DOM.tipoProyectoForm) DOM.tipoProyectoForm.addEventListener('change', createInputHandler('tipoProyecto'));
    if (DOM.mensajeForm) DOM.mensajeForm.addEventListener('change', createInputHandler('mensaje'));

    // Escuchador para el envío del formulario
    if (DOM.formularioContacto) {
        DOM.formularioContacto.addEventListener("submit", handleSubmit);
    }
};