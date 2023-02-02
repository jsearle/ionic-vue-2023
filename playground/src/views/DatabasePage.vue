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
      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">
              Nombre
            </ion-label>
            <ion-input v-model="nombre"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">
              Edad
            </ion-label>
            <ion-input v-model="edad"></ion-input>
          </ion-item>
          <ion-button expand="block" @click="insertar()">Insertar usuario</ion-button>
        </ion-card-content>
      </ion-card>

      <ion-list>
        <ion-item v-for="user in users" :key="user.id">
          <ion-label><h2>{{ user.name }}</h2> <p>Edad: {{ user.age }}</p></ion-label>
        </ion-item>
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
  IonLabel,
  IonInput,
  IonCard,
  IonCardContent
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
    IonLabel,
    IonInput,
    IonCard,
    IonCardContent
  },
  data() {
    return {
      users: [] as any,
      nombre:'',
      edad: ''
    };
  },
  methods: {
    async obtenerUsers() {
      const usuarios = await this.db.obtenerDbUsers();
      this.users = usuarios;
      console.log(usuarios);
    },
    async insertar() {
      this.db.insertarDbUser(this.nombre, parseInt(this.edad, 10))
      this.nombre = ''
      this.edad = ''
      this.obtenerUsers()
    }
  },
  setup() {
    const db = useDatabase();
    return {
      db,
    };
  },
});
</script>
