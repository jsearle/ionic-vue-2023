<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>Nombre: {{nombre}}</p>
    <p>Número: {{numero}}</p>
    <MiComponenteDemo title="Título primero" />
    <button @click="modificarTexto()">Modificar texto</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MiComponenteDemo from './components/MiComponenteDemo.vue';

export default defineComponent({
  name: 'App',
  components: {
    MiComponenteDemo
  },
  data: function(){
    return {
      nombre: 'Juan Searle',
      numero: 54
    }
  },
  methods: {
    modificarTexto(){
      this.nombre = this.nombre + ' Edad: ' + this.numero
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
