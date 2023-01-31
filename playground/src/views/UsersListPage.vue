<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Listado de usuarios</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <!-- las variables de estado en la plantilla se acceden directamente (sin "this.")  -->
        <ion-item v-for="user in users" :key="user.id">
          <ion-avatar slot="start">
            <ion-img :src="user.avatar"></ion-img>
          </ion-avatar>
          <ion-label>
            <h2>{{ user.first_name }} {{ user.last_name }}</h2>
            <p>{{ user.email }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
      <ion-button expand="block" size="large" @click="loadUsers()">Cargar usuarios</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// importamos los componentes de ionic
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonItem,
  IonButton,
  IonAvatar,
  IonImg
} from "@ionic/vue";

// importamos la función para definir un componente en TS
import { defineComponent } from "vue";

// importamos nuestra composable function
import useAPI from "../composables/useAPI";

// definimos el componente
export default defineComponent({
  // nombre del componente para las Dev Tools
  name: "UsersListPage",
  // registramos todos los componentes que se van a usar en la plantilla
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonLabel,
    IonItem,
    IonButton,
    IonAvatar,
    IonImg
  },
  // definimos las variables de estado (reactivas) de este componente
  data(){
    return {
      users: [] as any[]
    }
  },
  // definimos los métodos que serán llamados desde la plantilla
  methods:{
    async loadUsers(){
      // siempre usamos this dentro de los métodos para acceder a varaibles o a otros métodos del componente
      this.users = await this.api.loadUserList()
    }
  },
  // montamos las instancias de las composable functions
  setup() {
    const api = useAPI()
    return { api };
  },
});
</script>

<style scoped></style>
