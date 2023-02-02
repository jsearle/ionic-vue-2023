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
      <ion-button @click="motion.capturarAceleracion()">Activar sensores de movimiento</ion-button>
      <div v-if="motion.data.aceleracion && motion.data.orientacion">
        <ion-item><ion-label>Aceleración: <br />
            {{ motion.data.aceleracion.x }} <br />
            {{ motion.data.aceleracion.y }} <br />
            {{ motion.data.aceleracion.z }}
          </ion-label>
        </ion-item>
        <ion-item ><ion-label >Gravedad: <br />
            {{ motion.data.gravity.x }} <br />
            {{ motion.data.gravity.y }} <br />
            {{ motion.data.gravity.z }}
          </ion-label></ion-item
        >
        <ion-item
          ><ion-label
            >Orientacion: <br />
            {{ motion.data.orientacion.alpha }} <br />
            {{ motion.data.orientacion.beta }} <br />
            {{ motion.data.orientacion.gamma }}
          </ion-label></ion-item
        >
      </div>
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
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { defineComponent } from "vue";
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
    IonItem,
    IonLabel,
  },
  setup() {
    const motion = useMotion();
    return {
      motion,
    };
  },
});
</script>
