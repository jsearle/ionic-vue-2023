<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Base de datos SQLite</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button @click="db.inicializarDb()">Inicializar DB</ion-button>
      <ion-button @click="db.seedDb()">Insertar usuarios (seed)</ion-button>
      <ion-button @click="obtenerUsers()">Obtener usuarios</ion-button>
      <ion-list>
        <ion-item v-for="user in users" :key="user.id">
          <ion-label>{{ user }}</ion-label>
        </ion-item>

        {{ users }}
      </ion-list>
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
  IonList,
  IonItem,
  IonLabel
} from "@ionic/vue";
import { defineComponent } from "vue";
import useDatabase from "../composables/useDatabase";

export default defineComponent({
  name: "DatabasePage",
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel
  },
  data() {
    return {
      users: [] as any,
    };
  },
  methods: {
    async obtenerUsers() {
      const usuarios = await this.db.obtenerDbUsers();
      this.users = usuarios;
      console.log(usuarios);
    },
  },
  setup() {
    const db = useDatabase();
    return {
      db,
    };
  },
});
</script>
