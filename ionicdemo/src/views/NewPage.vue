<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Página Nueva</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Este es el título de la card</ion-card-title>
          <ion-card-subtitle>Este es el subtítulo</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Esta página es la nueva página</p>
        </ion-card-content>
      </ion-card>
      <ion-grid>
        <ion-row>
          <ion-col size-md="4" size-xs="12">1</ion-col>
          <ion-col size-md="6" size-xs="12">2</ion-col>
          <ion-col>3</ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="4">4</ion-col>
          <ion-col>5</ion-col>
          <ion-col size="6">6</ion-col>
          <ion-col size="12">7</ion-col>
        </ion-row>
      </ion-grid>
      <ion-list>
        <ion-list-header>Título</ion-list-header>
        <ion-item v-for="(fruta, index) in elementosLista" :key="index" :button="true" @click="()=>router.push('/dos')">
          <ion-avatar slot="start">
            <img src="https://thispersondoesnotexist.com/image" alt="">
          </ion-avatar>
          <ion-label>{{fruta}}</ion-label>
        </ion-item>
      </ion-list>
      <ion-button>Botón</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
  IonGrid, 
  IonRow,
  IonCol,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonAvatar
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from 'vue-router'

export default defineComponent({
  name: "SecondPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton,
    IonGrid, 
    IonRow,
    IonCol,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonAvatar
  },
  data(){
    return{
      elementosLista: ['Naranjas', 'Peras', 'Manzanas', 'Plátanos', 'Fresas']
    }
  },
  methods: {
    alerta() {
      alert("Click!");
    },
  },
  setup(){
    const router = useRouter()
    return {
      router
    }
  }
});
</script>

<style scoped>
p {
  font-weight: bold;
}
ion-col{
  border: 1px solid #990000;
}
</style>
