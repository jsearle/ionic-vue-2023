<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Mapa</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-content>
          <div id="map" ref="mapaReactivo"></div>
        </ion-card-content>
      </ion-card>
      <ion-button expand="block" @click="cargarMapa()">Cargar mapa</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
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
  IonCardContent
} from "@ionic/vue";
import useMap from "../composables/useMap";
import {ref} from "vue";

const map = useMap()
// busca un elemento con el atributo ref="mapaReactivo". Primero es null y después se le asigna el elemento
const mapaReactivo = ref(null);

// función que carga el mapa desde el componente
const cargarMapa = () => {
  const center = { lat: 40.416775, lng: -3.703790 }
  const zoom = 12
  // monta el elemento por referencia
  const element = mapaReactivo.value
  map.createMap(element, center, zoom)
}



</script>

<style scoped>
#map {
  height: 500px;
}
</style>