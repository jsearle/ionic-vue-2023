<template>
  <div :class="'mi-componente ' + claseActiva" :style="'border-width: ' + contador + 'px'">
    <h1>{{title}}</h1>
    <h3>Bienvenid@s a VUE!</h3>
    <p>Contador: {{contador}}</p>
    <button @click="sumar()">Sumar</button>
    <button @click="restar()">Restar</button>

    <p v-if="!esNegativo">El número es mayor que 0 (v-if)</p>
    <p v-else>El número es menor o igual que 0 (v-else)</p>

    <p v-show="!esNegativo">El número es mayor que 0 (v-show)</p>
    <p v-show="esNegativo">El número es menor o igual que 0 (v-show)</p>

    <ul>
      <li v-for="(alumno, index) in alumnos" :key="index">{{alumno}}</li>
    </ul>
    <button @click="addAlumno()">Añadir alumna</button>
    <button @click="renameAlumno()">Renombrar al segundo</button>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'MiComponenteDemo',
  props:['title'],
  emits: ['contador'],
  data(){
    return {
      contador: 1,
      claseActiva: '',
      alumnos: ['Juan', 'Pedro', 'Luis'],
    }
  },
  methods:{
    sumar(){
      this.contador += 1
    },
    restar(){
      this.contador -= 1
      if (this.contador < 0){
        //this.claseActiva = 'oculto'
      }
    },
    addAlumno(){
      this.alumnos.push('Maria')
    },
    renameAlumno(){
      this.alumnos[1] = 'Jose Luis'
    }
  },
  components: {
  },
  watch:{
    contador(nuevoValor){
      this.$emit('contador', nuevoValor)
    }
  },
  mounted(){
    this.contador = 0
  },
  /* beforeCreate created beforeMount mounted beforeUpdate updated beforeDestroy destroyed */
  computed:{
    esNegativo(): boolean{
      return (this.contador <= 0)
    }
  }
})

</script>

<style>
h1{
  color:red;
}
.mi-componente{
  border: 2px solid red;
  padding: 24px;
}
.oculto{
  display: none;
}
ul{
  text-align: left;
}
</style>