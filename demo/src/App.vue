<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <MiComponenteDemo />
    <MiComponenteDemo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MiComponenteDemo from './components/MiComponenteDemo.vue';

export default defineComponent({
  name: 'App',
  components: {
    'MiComponenteDemo' : MiComponenteDemo
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
