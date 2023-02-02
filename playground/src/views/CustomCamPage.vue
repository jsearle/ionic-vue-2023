<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Cámara especial</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button @click="cam.startCam()">Activar cámara</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
} from "@ionic/vue";
import { defineComponent } from "vue"
import useCustomCamera from "../composables/useCustomCamera";

export default defineComponent({
  name: "CustomCamPage",
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
  },
  setup() {
    const cam = useCustomCamera()
    return {
      cam
    }
  },
});
</script>

<style scoped>
ion-content {
  --background: transparent;
}
</style>
