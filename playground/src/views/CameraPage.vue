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
      <ion-fab slot="fixed" horizontal="center" vertical="bottom">
        <ion-fab-button @click="abreCamara()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-card>
        <ion-card-content>
          {{foto}}
          <ion-img v-if="foto" :src="foto" />
          <p v-else> Pulsa el botón de la cámara para tomar una foto. </p>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardContent,
  IonImg,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/vue";
import { defineComponent } from "vue";
import useCamera from "../composables/useCamera";
import {camera} from "ionicons/icons";

export default defineComponent({
  name: "CameraPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardContent,
    IonImg,
    IonFab,
    IonFabButton,
    IonIcon
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
    // llamamos a la composable function
    const cam = useCamera()
    // ponemos el resultado al alcance del componente
    return {
      cam,
      camera
    }
  },
});
</script>
