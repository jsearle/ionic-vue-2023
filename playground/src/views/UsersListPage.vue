<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Listado de usuarios</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label>
            <h2>Usuario</h2>
            <p>Email del usuario</p>
          </ion-label>
        </ion-item>
      </ion-list>
      <p>{{users}}</p>
      <ion-button @click="loadUsers()">Cargar usuarios</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonItem,
  IonButton
} from "@ionic/vue";
import { defineComponent } from "vue";
import useAPI from "../composables/useAPI";

export default defineComponent({
  name: "UsersListPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonLabel,
    IonItem,
    IonButton
  },
  data(){
    return {
      users: []
    }
  },
  methods:{
    async loadUsers(){
      this.users = await this.api.loadUserList()
    }
  },
  setup() {
    const api = useAPI()
    return {api};
  },
});
</script>

<style scoped></style>
