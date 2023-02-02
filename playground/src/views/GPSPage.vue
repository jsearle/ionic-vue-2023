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
      {{coordinates}}
      <hr />
      {{gps.data.coords.latitude}} 
      {{gps.data.coords.longitude}}
      {{gps.data.coords.heading}}
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
      coordinates: {
        latitude: 0 as number | null,
        longitude: 0 as number | null,
        altitude:0 as number | null,
        accuracy: 0 as number | null,
        heading: 0 as number | null
      } as any,
      intervalo: null as any
    }
  },
  methods:{
    async obtenerPosicion(){
      const newCoords = await this.gps.getCurrentPosition()
      console.log(newCoords)
      this.coordinates.latitude = newCoords.latitude
      this.coordinates.longitude = newCoords.longitude
      this.coordinates.altitude = newCoords.altitude
      this.coordinates.accuracy = newCoords.accuracy
      this.coordinates.heading = newCoords.heading
    },
    iniciarSeguimiento(){
      this.gps.watchPosition()
    },
    pararSeguimiento(){
      clearInterval(this.intervalo)
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
