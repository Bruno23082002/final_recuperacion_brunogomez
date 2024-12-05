// Script para la página principal
document.getElementById("bienvenidaBtn").addEventListener("click", function() {
    const nombre = document.getElementById("nombreInput").value.trim();
    const mensajeBienvenida = document.getElementById("mensajeBienvenida");
    if (nombre) {
        mensajeBienvenida.textContent = `¡Bienvenido, ${nombre}!`;
        mensajeBienvenida.classList.remove('hidden');
    } else {
        alert('Por favor, ingresa un nombre.');
    }
});

// Script para las operaciones
function calcular(tipo) {
    let cantidad, precio, resultado;
    if (tipo === 'total') {
        cantidad = prompt("Ingrese la cantidad:");
        precio = prompt("Ingrese el precio por unidad:");
        resultado = cantidad * precio;
        alert("El total de producto es: " + resultado);
    } else if (tipo === 'porcentaje30') {
        precio = prompt("Ingrese el precio:");
        resultado = precio * 0.30;
        alert("El 30% del precio es: " + resultado);
    } else if (tipo === 'descuento') {
        precio = prompt("Ingrese el precio:");
        resultado = precio * 0.25;
        alert("El 25% de descuento es: " + resultado);
    }
}

// Script para el formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Mensaje enviado con éxito!");
    // Aquí puedes implementar la lógica para enviar el formulario a un correo
    return false; // Para que no se recargue la página
});

function limpiarFormulario() {
    document.getElementById("contactForm").reset();
}

