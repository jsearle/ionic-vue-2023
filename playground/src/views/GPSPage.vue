<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>GPS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button @click="obtenerPosicion()">Obtener posición</ion-button>
      <ion-button @click="iniciarSeguimiento()">Iniciar</ion-button>
      <ion-button @click="pararSeguimiento()">Parar</ion-button>
      <hr />
      <ion-item><ion-label>Latitud: {{gps.data.coords.latitude}} </ion-label></ion-item>
      <ion-item><ion-label>Longitud: {{gps.data.coords.longitude}} </ion-label></ion-item>
      <ion-item><ion-label>Altitud: {{gps.data.coords.altitude}} </ion-label></ion-item>
      <ion-item><ion-label>Rumbo: {{gps.data.coords.heading}} </ion-label></ion-item>
      
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
import { defineComponent } from "vue";
import useGPS from "../composables/useGPS";

export default defineComponent({
  name: "GPSPage",
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
  data(){
    return {
      intervalo: null as any
    }
  },
  methods:{
    async obtenerPosicion(){
      await this.gps.getCurrentPosition()
    },
    iniciarSeguimiento(){
      this.gps.watchPosition()
    },
    pararSeguimiento(){
      this.gps.stopWatch()
    }
  },
  setup() {
    const gps = useGPS()
    return {
      gps
    }
  },
});
</script>
