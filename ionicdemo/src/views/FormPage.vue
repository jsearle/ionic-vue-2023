<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Formularios</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-content>
          <h1>Formularios</h1>
          <p>Este párrafo debería verse en negrita</p>
        </ion-card-content>
      </ion-card>

      <ion-list>
        <ion-item>
          <ion-label position="floating">Nombre:</ion-label>
          <ion-input
            type="text"
            v-model="camposForm.nombre"
            clear-input
            inputmode="tel"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Apellidos:</ion-label>
          <ion-input type="text" v-model="camposForm.apellidos"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email:</ion-label>
          <ion-input type="text" v-model="camposForm.email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Clave:</ion-label>
          <ion-input type="password" v-model="camposForm.password"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Observaciones:</ion-label>
          <ion-textarea v-model="camposForm.obs" auto-grow></ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Entorno favorito:</ion-label>
          <ion-select v-model="camposForm.fav" interface="action-sheet">
            <ion-select-option>Vue</ion-select-option>
            <ion-select-option>React</ion-select-option>
            <ion-select-option>Angular</ion-select-option>
            <ion-select-option>Mi sofá</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-checkbox v-model="camposForm.acepta" slot="start"></ion-checkbox>
          <ion-label>Acepta las condiciones</ion-label>
        </ion-item>
      </ion-list>
      <ion-button size="large" expand="block" @click="enviarFormulario()"
        >Enviar Formulario</ion-button
      >
      {{ camposForm }}
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
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonCheckbox,
  IonSelect,
  IonSelectOption
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonCheckbox,
    IonSelect,
    IonSelectOption
  },
  data() {
    return {
      camposForm: {
        nombre: "nada",
        apellidos: null,
        email: null,
        password: null,
        obs: null,
        acepta: false,
        fav: null,
      } as any,
    };
  },
  methods: {
    enviarFormulario() {
      console.log("Enviando formulario", this.camposForm);
    },
  },
});
</script>

<style scoped>
p {
  font-weight: bold;
}
</style>
