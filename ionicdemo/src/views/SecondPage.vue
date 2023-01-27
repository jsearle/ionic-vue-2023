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
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent} from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: "SecondPage",
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent }
})

</script>


<style scoped>
p{
  font-weight: bold;
}
</style>