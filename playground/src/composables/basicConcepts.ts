
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


/*
// Listado de comandos que hemos usado a lo largo del curso:

npm install -g @vue/cli
Este comando instala el CLI de Vue de forma global en nuestro equipo.

vue create demo
Este comando crea un nuevo proyecto de Vue con el nombre demo. Te conducirá por una serie de pasos

code .
Si estás en una carpeta de proyecto, este comando abrirá el proyecto en VS Code.

npm run serve
Este comando ejecuta el proyecto en modo desarrollo. Se puede acceder a la aplicación en http://localhost:8080

npm run build
Este comando crea una versión de producción de la aplicación.

npm install XXX
este comando instala el paquete XXX en el proyecto.

npm i XXX
Este comando es una abreviación de npm install XXX

npm i -g @ionic/cli
Este comando instala el CLI de Ionic de forma global en nuestro equipo.

ionic start demo
este comando crea un nuevo proyecto de Ionic con el nombre demo. Os conducirá por una serie de pasos.
Elegid la opción de plantilla que queráis y el entorno VUE

ionic serve
Este comando ejecuta el proyecto en modo desarrollo. Se puede acceder a la aplicación en http://localhost:8100

npx cap sync
Este comando sincroniza los plugins de Capacitor con el proyecto de Ionic y copia los archivos del build

npx cap copy
Este comando copia los archivos de la aplicación de Ionic a la carpeta de Capacitor. Ojo que este comando no copia los archivos del build

npx cap open android
Este comando abre el proyecto de Android en Android Studio

npx cap run android
Este comando ejecuta la aplicación en un dispositivo Android conectado

npx cap run android -l
Este comando ejecuta la aplicación en un dispositivo Android conectado y abre la consola de logs

Atajos en scripts de package.json
npm run go -> este atajo lo creamos para que hiciese npm run serve, npx cap sync y npx cap run android a la vez:
npm run build && npx capacitor sync && npx capacitor run android


Plugins que hemos usado en el proyecto:

npm install @capacitor/preferences
npm install @capacitor-community/sqlite
npm install --save-dev vue-sqlite-hook
npm install @ionic/pwa-elements
npm install @capacitor/camera
npm install @capacitor-community/camera-preview
npm install @capacitor/geolocation
npm install @capacitor/splash-screen
npm install @capacitor/filesystem



Para crear un plugin propio:
npm init @capacitor/plugin
npm run build
npm install ../ruta/a/carpeta/plugin


*/