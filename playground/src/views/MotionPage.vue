<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Motion</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button @click="motion.capturarAceleracion()">Botón</ion-button>
      {{motion.data}}
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
import useMotion from "../composables/useMotion";

export default defineComponent({
  name: "MotionPage",
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
    const motion = useMotion()
    return {
      motion
    }
  },
});
</script>
