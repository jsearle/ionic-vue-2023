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
} from "@ionic/vue";
import { defineComponent } from "vue";

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
  },
});
</script>

<style scoped></style>
