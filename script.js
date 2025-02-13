// Seleccionamos el botón y el elemento del mensaje
const button = document.getElementById('clickButton');
const responseMessage = document.getElementById('responseMessage');

// Agregamos un evento de clic al botón
button.addEventListener('click', () => {
  responseMessage.textContent = "¡Hola! Has hecho clic en el botón.";
  responseMessage.style.color = '#4CAF50'; // Cambia el color del texto
});
