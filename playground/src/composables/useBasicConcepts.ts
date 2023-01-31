
// DEFINICIÓN DE VARIABLES Y CONSTANTES

// var hace que el scope sea general, es mutable y redefinible
var url = 'http://google.es'
var razas_de_gatos = ['siamés', 'persa', 'angora', 'lince']
var numero = 1
// se puede redefinir
var numero = 23

// let hace que el scope sea a nivel de bloque. Es mutable.
let razas_de_perros = ['pastor alemán', 'chihuahua', 'setter', 'san bernardo']
let nombre = 'Juan Searle'
let edad = 30

// const hace que la variable sea inmutable
const frutas = ['pera', 'manzana', 'naranja', 'fresa']
const PI = 3.1416
const enProduccion = true

// un objeto no primitivo se puede alterar, pero no sustituir:
frutas.push('kiwi')


// OBJETOS EN JAVASCRIPT / typescript
const datosAlumno = {
  nombre: 'Juan',
  apellido: 'Searle',
  edad: 30,
  notas: [5, 7, 8, 9, 10],
  faltas: 3
}
// Typescript INFIERE el tipo de cada propiedad del objeto, y crea un tipo al vuelo

// en typescript se puede mutar una propiedad de un objeto
datosAlumno.faltas = 4

// en typescript no se puede crear una propiedad nueva en un objeto
// ❌ datosAlumno.password = '1234'

// si definimos el tipo como any podremos modificar el modelo de datos
const datosAlumnoAny = {
  nombre: 'Juan',
  apellido: 'Searle',
  edad: 30,
  notas: [5, 7, 8, 9, 10],
  faltas: 3
} as any // "as any" evita que el tipo sea inferido por typescript

// ahora sí podemos crear una propiedad nueva en el objeto
datosAlumnoAny.password = '1234'

// si se crea un objeto con propiedades que vienen de otros elementos, podemos usar atajo en la definición
const nacimiento = 1977
const alumno = {
  nombre: 'Juan',
  nacimiento
}



// FUNCIONES EN JAVASCRIPT

// podemos declarar una función de varias formas:

// forma clásica
function cuadrado(lado: number): number {
  return lado * lado
}

// arrow function
const cuadrado2 = (lado: number): number => {
  return lado * lado
}

// arrow function one-line
const cuadrado3 = (lado: number): number => lado * lado



// ASINCRONÍA EN JS

// declaramos la función como asíncrona para poder usar await dentro
const getDatos = async () => {
  // usamos await para esperar a que la promesa se resuelva
  const response = await fetch('https://reqres.in/api/users')
  // volvemos a usar await para esperar a que se resuelva la promesa de la conversión a JSON
  const data = await response.json()
  // devolvemos el dato concreto
  return data
}

// sin sincronía
const getDatosPromesa = () => {
  // devolvemos la respuesta sin resolver
  return fetch('https://reqres.in/api/users').then(r => r.json())
}

// el tipo de resultado es una promesa
// para obtener el resultado de la promesa, usamos el método then
const resultado = getDatosPromesa().then(respuesta => console.log(respuesta))
