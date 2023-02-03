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
      <ion-button @click="obtenerPresion()">Obtener presion</ion-button>
      {{ presion }}
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
  },
  data(){
    return{
      presion: 0
    }
  },
  methods:{
    async obtenerPresion(){
      this.presion = await this.sensei.getPressure();
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
