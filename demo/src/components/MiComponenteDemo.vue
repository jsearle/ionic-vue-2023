<template>
  <div>
    <h1>{{title}}</h1>
    <h3>Bienvenid@s a VUE!</h3>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'MiComponenteDemo',
  components: {
  },
  props:['title']
})

</script>

<style>
h1{
  color:red;
}
</style>