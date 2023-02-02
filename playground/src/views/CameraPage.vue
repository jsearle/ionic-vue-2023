<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Capacitor Camera</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button @click="abreCamara()">Abrir la cámara</ion-button>
      <ion-card>
        <ion-card-content>
          {{foto}}
          <ion-img :src="foto" />
        </ion-card-content>
      </ion-card>
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
  IonCard,
  IonCardContent,
  IonImg
} from "@ionic/vue";
import { defineComponent } from "vue";
import useCamera from "../composables/useCamera";

export default defineComponent({
  name: "CameraPage",
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardContent,
    IonImg
  },
  data(){
    return {
      foto: '' as any
    }
  },
  methods:{
    async abreCamara(){
      this.foto = await this.cam.takePicture();
    }
  },
  setup() {
    const cam = useCamera()
    return {
      cam
    }
  },
});
</script>
