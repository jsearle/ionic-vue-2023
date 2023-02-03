<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Cámara especial</ion-title>
        <ion-buttons slot="end">
          <ion-button v-if="camActiva" @click="desactivarCamara()">Parar cámara</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card  v-if="!camActiva">
        <ion-card-content>
          <ion-button @click="activarCamara()">Activar cámara</ion-button>
        </ion-card-content>
      </ion-card>
      <ion-card v-if="!camActiva">
        <ion-card-content>
          <ion-img :src="'data:image/jpg;base64, ' + base64Foto"></ion-img>
        </ion-card-content>
      </ion-card>
      <ion-fab  v-if="camActiva" slot="fixed" vertical="bottom" horizontal="center">
        <ion-fab-button color="success" @click="capturarFoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
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
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/vue";
import { defineComponent } from "vue"
import useCustomCamera from "../composables/useCustomCamera";
import { camera } from "ionicons/icons";

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
    IonCard,
    IonCardContent,
    IonFab,
    IonFabButton,
    IonIcon
  },
  data(){
    return{
      camActiva: false,
      base64Foto: ""
    }
  },
  methods:{
    activarCamara(){
      this.camActiva = true
      this.cam.startCam()
    },
    desactivarCamara(){
      this.camActiva = false
      this.cam.stopCam()
    },
    async capturarFoto(){
      this.base64Foto = await this.cam.capture()
      this.desactivarCamara()
    }
  },
  setup() {
    const cam = useCustomCamera()
    return {
      cam,
      camera
    }
  },
});
</script>

<style scoped>
ion-content {
  --background: transparent;
}
ion-card-content{
  text-align: center;
}
</style>
