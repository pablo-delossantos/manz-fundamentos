function sumar(a, b) {
  return a + b;                    // Devolvemos la suma de a y b al exterior
  console.log("Suma realizada.");  // Este código nunca se ejecutará
}

// Ejecución
const resultado = sumar(5, 5);            // Se guarda 10 en la variable resultado
console.log("Resultado = ", resultado);   // Mostramos el resultado por consola