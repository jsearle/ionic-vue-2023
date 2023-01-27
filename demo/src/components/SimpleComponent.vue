<template>
  <div :class="classColor">
    <h3>{{reactiveText}}</h3>
    <h1>Este es un componente sencillo</h1>
    <p>{{ subtitulo }}</p>
    <button @click="toggleColor()">Cambiar color</button>
    {{userData}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  name: 'SimpleComponent',
  props: ['subtitulo'],
  emits:['llamada'],
  components: {
  },
  data(){
    return {
      classColor: 'red',
    }
  },
  methods: {
    toggleColor(){
      if (this.classColor === 'red'){
        this.classColor = 'blue'
        this.setReactiveText( 'Otro texto' )
      } else {
        this.classColor = 'red'
        this.setReactiveText('Un texto')
      }
      //this.$emit('llamada')
    }
  },
  computed: {
  },
  watch: {
  },
  mounted(){
    console.log('Mounted!')
  },
  inject:['userData'],
  setup(){
    const reactiveText = ref('este texto es reactivo')
    const reactiveObject = reactive({texto:'texto', numero:23})

    const setReactiveText = (nuevoTexto:string) => {
      reactiveText.value = nuevoTexto
    }
    return {
      reactiveText,
      reactiveObject,
      setReactiveText
    }
  }
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