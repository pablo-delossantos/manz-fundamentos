function tablaMultiplicar(tabla, hasta = 10) {
  for (let i = 0; i <= hasta; i++) {
    console.log(tabla, "x", i, "=", tabla * i);
  }
}

// Ejecución
tablaMultiplicar(2); // Tabla del 2, del 0 al número 10
tablaMultiplicar(2, 15); // Tabla del 2, del 0 al número 15
