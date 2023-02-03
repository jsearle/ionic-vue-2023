<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Sensores de capa nativa</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-content>
          <ion-button @click="obtenerPresion()">Obtener presión</ion-button>
          <ion-item><ion-label>Presión: {{ presion }}</ion-label></ion-item>
          <hr />
          <ion-button @click="obtenerLuz()">Obtener luz ambiental</ion-button>
          <ion-item><ion-label>Luz: {{ luz }}</ion-label></ion-item>
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
  IonItem,
  IonLabel
} from "@ionic/vue";
import { defineComponent } from "vue";
import useSensei from "../composables/useSensei";

export default defineComponent({
  name: "SensorPage",
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
    IonItem,
    IonLabel
  },
  data(){
    return{
      presion: 0,
      luz: 0
    }
  },
  methods:{
    async obtenerPresion(){
      this.presion = await this.sensei.getPressure();
    },
    async obtenerLuz(){
      this.luz = await this.sensei.getLight();
    }
  },
  mounted(){
    this.sensei.init();
  },
  setup() {
    const sensei = useSensei();
    return {
      sensei
    }
  },
});
</script>
