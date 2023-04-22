const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

const agregarOperador = (operador) => {
  if (pantalla.value.slice(-1).match(/[+\-*/]/)) {
    pantalla.value = pantalla.value.slice(0, -1);
  }
  pantalla.value += operador;
};

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonPulsado = boton.value;

    if (boton.id === "igual") {
      try {
        const resultado = eval(pantalla.value);
        pantalla.value = parseFloat(resultado.toFixed(3));
      } catch (error) {
        pantalla.value = "ERROR!";
      }
    } else if (boton.id === "borrar") {
      pantalla.value = pantalla.value.slice(0, -1);
    } else if (boton.id === "ce") {
      pantalla.value = "";
    } else if (boton.id === "raiz") {
        pantalla.value = Math.sqrt(parseFloat(pantalla.value)).toFixed(1);
      } else if (boton.textContent.match(/[+\-*/]/)) {
      agregarOperador(boton.textContent);
    } else {
      pantalla.value = pantalla.value + botonPulsado;
    }
  });
});

const botonesInput = (key) => {
  if (key.match(/[+\-*/]/)) {
    agregarOperador(key);
  } else if (key.match(/[0-9]/)) {
    pantalla.value = pantalla.value + key;
  } else if (key === "Backspace") {
    pantalla.value = pantalla.value.slice(0, -1);
  } else if (key === "Enter" || key === "=") {
    try {
      const resultado = eval(pantalla.value);
      pantalla.value = parseFloat(resultado.toFixed(3));
    } catch (error) {
      pantalla.value = "ERROR!";
    }
  }
};

document.addEventListener("keydown", (event) => {
  botonesInput(event.key);
});
