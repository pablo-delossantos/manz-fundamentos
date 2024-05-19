// Declaración
function tablaMultiplicar(tabla, hasta) {
  for (let i = 0; i <= hasta; i++) {
    console.log(tabla, "x", i, "=", tabla * i);
  }
}

// Ejecución
tablaMultiplicar(1, 10); // Tabla del 1
tablaMultiplicar(5, 10); // Tabla del 5
