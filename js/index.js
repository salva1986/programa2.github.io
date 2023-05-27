// Botón 1: mostrar imagen con JS
const button1 = document.getElementById("button1");
button1.addEventListener("click", function () {
  const outputSection = document.getElementById("outputSection");
  const image = document.getElementById("image");


  if (image) {
    image.style.display = "none";
    outputSection.removeChild(image);
  } else {
    const newImage = document.createElement("img");
    newImage.id = "image";
    newImage.src = "img/imagen1.jpg";
    outputSection.appendChild(newImage);
  }
});


// Función para realizar operaciones 
function realizarOperacion(operacion) {
  limpiarResultado();
  const num1 = parseInt(prompt("Ingrese el primer número:"));
  const num2 = parseInt(prompt("Ingrese el segundo número:"));
  let resultado;

  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    case "division":
      resultado = num1 / num2;
      break;
  }

  const output = document.getElementById("output");
  output.innerHTML = "El resultado es: " + resultado;
  output.classList.remove("hidden");
}

// Botón 2: calcular suma
const button2 = document.getElementById("button2");
button2.addEventListener("click", function () {
  realizarOperacion("suma");
});

// Botón 3: calcular resta
const button3 = document.getElementById("button3");
button3.addEventListener("click", function () {
  realizarOperacion("resta");
});

// Botón 4: calcular multiplicación
const button4 = document.getElementById("button4");
button4.addEventListener("click", function () {
  realizarOperacion("multiplicacion");
});

// Botón 5: calcular división
const button5 = document.getElementById("button5");
button5.addEventListener("click", function () {
  realizarOperacion("division");
});

// Función para limpiar el resultado
function limpiarResultado() {
  const output = document.getElementById("output");
  output.innerHTML = "";
  output.classList.add("hidden");
}
