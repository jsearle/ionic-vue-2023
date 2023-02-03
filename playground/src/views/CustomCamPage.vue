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
      <ion-grid class="overlay" v-if="camActiva">
        <ion-row>
          <ion-col size="8">
          </ion-col>
          <ion-col size="4" class="align-right">
            <p>{{fecha}}</p>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-card v-if="!camActiva && base64Foto != ''">
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
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
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
    IonIcon,
    IonGrid,
    IonRow,
    IonCol
  },
  data(){
    return{
      camActiva: false,
      base64Foto: "",
      fecha: ''
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
    },
    calcularFecha(){
      const date = new Date()
      this.fecha = date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
    }
  },
  mounted(){
    setInterval(this.calcularFecha, 1000)
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
ion-col{
  /*border:1px solid greenyellow;*/
}
.overlay p{
  color: greenyellow;
  text-shadow: #000000 1px 1px 5px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
.align-right{
  text-align: right;
}
</style>
