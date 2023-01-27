<template>
  <ion-button color="success">{{texto}}</ion-button>
</template>

<script lang="ts">
import {IonButton} from '@ionic/vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name:'MyButton',
  components: {IonButton},
  props: ['texto']
})
</script>