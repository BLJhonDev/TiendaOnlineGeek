import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    // Aquí omito la obtención de los valores de email y password, ya que no los necesitas
    // const email = document.querySelector("[data-tipo=email]").value;
    // const password = document.querySelector("[data-tipo=password]").value;

    // Simplemente redirigimos a la página de productos sin validar correo ni contraseña
    window.location.href = "./productos.html";
});
