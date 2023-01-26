<template>
  <div :class="classColor">
    <h1>Este es un componente sencillo</h1>
    <p>{{ subtitulo }}</p>
    <button @click="toggleColor()">Cambiar color</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SimpleComponent',
  props: ['subtitulo'],
  components: {
  },
  data: function(){
    return {
      classColor: 'red'
    }
  },
  methods: {
    toggleColor(){
      if (this.classColor === 'red'){
        this.classColor = 'blue'
      } else {
        this.classColor = 'red'
      }
    }
  },
  computed: {
  },
  watch: {
  },
  mounted: function(){
    // TODO: create something here
  },

})
</script>

<style>
  p{
    font-family: 'Courier New', Courier, monospace;
    color: #999999;
  }
  .red{
    background-color: rgb(248, 193, 193);
  }
  .blue{
    background-color: rgb(193, 221, 248);
  }
</style>