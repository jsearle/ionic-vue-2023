<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- ion-buttons carga un espacio para poner botones -->
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Uso de preferencias</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-content>
          <ion-button expand="block" @click="carga()">Cargar datos desde las preferencias</ion-button>
          <ion-button expand="block" color="danger" @click="guarda()">Guardar datos en las preferencias</ion-button>
        </ion-card-content>
      </ion-card>
      <ion-list>
        <ion-item>
          <ion-label>Nombre:</ion-label>
          <!-- v-model sirve para vincular la variable de estado con el campo de texto -->
          <ion-input v-model="name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Email:</ion-label>
          <ion-input v-model="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Token:</ion-label>
          <ion-input v-model="token"></ion-input>
        </ion-item>
      </ion-list>
      <!-- Pintamos directamente el objeto de preferencias en crudo para verlo cambiar -->
      {{preferences.prefs}}
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonButton,
  IonCard,
  IonCardContent,
  IonButtons,
  IonMenuButton,
  IonInput,
  IonList
} from "@ionic/vue";

// cargamos el composable de las preferences
import usePreferences from "../composables/usePreferences";

export default defineComponent({
  name: 'PreferencesPage',
  components:{
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonItem,
    IonButton,
    IonCard,
    IonCardContent,
    IonButtons,
    IonMenuButton,
    IonInput,
    IonList
  },
  // definimos las variables de estado que se vinculan con los campos de texto
  data(){
    return {
      name:'',
      email:'',
      token:'',
    }
  },
  methods:{
    carga(){
      this.preferences.loadPrefs()
    },
    guarda(){
      this.preferences.savePrefs({name: this.name, email: this.email, token: this.token})
    }
  },
  // TODO: Revisar por qué no salta el watch
  watch:{
    preferences (newData:any) {
        this.name = newData.prefs.name
        this.email = newData.prefs.email
        this.token = newData.prefs.token
    }
  },
  setup() {
    const preferences = usePreferences()
    return {
      preferences
    }
  },
})
</script>

<style scoped>

</style>