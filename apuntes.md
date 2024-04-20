# Unidad 1 Conceptos previos

## Variables

```js
x = 5; // nombre: x, valor: 5, tipo de dato: número
y = "Hola"; // nombre: y, valor: Hola, tipo de dato: texto
Manz = "me"; // nombre: Manz, valor: me, tipo de dato: texto
```

## Comentarios de código

> Aprender a comentar mejor.

Una serie de consejos a tener presentes a la hora de dejar comentarios en nuestro código:

- No comentar detalles redundantes. No escribir lo que haces, escribe **por qué lo haces**.
- Mejor nombrar `variables / funciones / clases` de forma descriptiva que usar comentarios para describirlas.
- Sé conciso y concreto. Resume. No escribas párrafos si no es absolutamente necesario.
- Intenta usar siempre el mismo idioma y estilo de comentarios.
- Si modificas código, revisa también los comentarios. **Comentarios desactualizados, son inservibles**.

### Tipos de comentario

```js
// Comentarios cortos de una sola línea. Suelen explicar la línea siguiente.
let a = 1;

let x = 45; // También se utilizan al final de una línea.

/* Por otro lado, existen los comentarios múltiples de varias líneas consecutivas.
   Suelen utilizarse para explicaciones largas que requieren bastante
   espacio porque se mencionan gran cantidad de cosas :-) */
```

Poner **nombres descriptivos** a las variables debería ser algo obligatorio a lo que acostumbrarnos, puesto que puede ahorrarnos muchos comentarios y tiempo, simplificar el código considerablemente y hacerlo mucho más legible y con menos ambigüedades.

```js
let precio = 50; ✅

console.log(precio);

let oferta = precio * 0.5; ✅
```

> En este fragmento de código, **no utilizamos comentarios** porque el nombre de las variables ya ayuda a entender el código y lo hace autoexplicativo.

## Convenciones de nombres

Usar nombres descriptivos.

En índices y contadores se pude utilizar una sola letra.

### Constantes, clases y variables

La convención adoptada con las constantes es que deben ir siempre en **MAYÚSCULAS** si se tratan de valores sensibles a ser modificados por el programador a lo largo del desarrollo del programa (por ejemplo, una constante con los minutos con los que arrancará una cuenta atrás).
