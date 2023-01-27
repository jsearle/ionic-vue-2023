<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Página secundaria</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-content>
          <h1>Esta página es secundaria</h1>
          <p>Este párrafo debería verse en negrita</p>
          <hr>
          <MyButton texto="Mi texto del botón" />
          <hr>
          <ion-button @click="alerta()" size="small" color="tertiary">Haz click</ion-button>
          <ion-button >Haz click</ion-button>
          <ion-button size="large">Haz click</ion-button>
        </ion-card-content>
      </ion-card>

          <ion-button size="large" expand="block">Haz click</ion-button>
          <ion-button size="large" expand="full" color="light">Haz click</ion-button>
          <ion-card>
            <ion-card-content>
              <ion-button size="small" fill="outline">Haz click</ion-button>
              <ion-button >Haz click</ion-button>
              <ion-button size="large" fill="clear">Haz click</ion-button>
            </ion-card-content>
          </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton} from '@ionic/vue'
import { defineComponent } from 'vue'
import MyButton from './MyButton.vue'

export default defineComponent({
  name: "SecondPage",
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton, MyButton },
  methods:{
    alerta(){
      alert('Click!')
    }
  }
})

</script>


<style scoped>
p{
  font-weight: bold;
}
</style>