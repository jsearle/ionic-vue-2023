<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Título de la página</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button >Botón</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Page',
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    console.log('test')
  },
});
</script>