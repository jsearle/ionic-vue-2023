<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    {{mouse}}
    <p>Nombre: {{nombre}}</p>
    <p>Número: {{numero}}</p>
    <p>Nombre completo: {{nombreCompleto}}</p>
    <MiComponenteDemo title="Título primero" @contador="contadorTres" />
    <button @click="modificarTexto()">Modificar texto</button>
    {{ nombreMayúsculas }} {{edadHace20Anyos}}
    {{ nombreMayúsculasFunc() }}
    {{alumnos}} {{fichaAlumno}}
    <div>
      <p>Nombre: {{fichaAlumno.nombre}}</p>
      <p>Edad: {{fichaAlumno.edad}}</p>
      <p>Nota: {{fichaAlumno.nota}}</p>
    </div>
    <SimpleComponent subtitulo="Este texto es el subtítulo" @llamada="llamadaDesdeComponenteHijo()"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import MiComponenteDemo from './components/MiComponenteDemo.vue';
import SimpleComponent from './components/SimpleComponent.vue';
import useMouse from './composables/useMouse'

export default defineComponent({
  name: 'App',
  components: {
    MiComponenteDemo,
    SimpleComponent
  },
  data: function(){
    return {
      nombre: 'Juan',
      apellido: 'Searle',
      numero: 54,
      alumnos: ['Juan', 'Pedro', 'Luis'],
      fichaAlumno: {nombre:'Juan', edad:45, nota:4.5 } as any // usamos any para dejar algo sin tipar
    }
  },
  methods: {
    modificarTexto(){
      this.nombre = this.nombre + ' Edad: ' + this.numero
      this.fichaAlumno.edad = 'mucha'
    },
    nombreMayúsculasFunc() : string {
      return  this.nombre.toUpperCase()
    },
    contadorTres(nuevoNumero : number){
      alert("Dice el componente hijo que el contador es ahora " + nuevoNumero)
    },
    llamadaDesdeComponenteHijo(){
      alert("Llamada desde el componente hijo")
    }
  },
  computed: {
    nombreCompleto() : string {
      return this.nombre + ' ' + this.apellido
    },
    nombreMayúsculas() : string{
      return  this.nombre.toUpperCase()
    },
    edadHace20Anyos(): number{
      return this.numero - 20
    }
  },
  provide(){
    return {
      userData: computed(() => this.fichaAlumno) 
    }
  },
  setup(){
    const mouse = useMouse()
    return {
      mouse
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
