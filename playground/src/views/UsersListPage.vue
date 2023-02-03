<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- ion-buttons carga un espacio para poner botones -->
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Listado de usuarios</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="loginVisible = true">Login</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- condicionamos la existencia del card a que la variable de estado del composable isLoading sea true -->
      <ion-card v-if="api.isLoading.value">
        <ion-card-content>
          <!-- este componente indica al usuario un proceso de carga de foma no intrusiva -->
          <ion-spinner ></ion-spinner>
        </ion-card-content>
      </ion-card>
      <!-- en caso de que no este cargando, mostramos la lista -->
      <ion-list v-else>
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
      <!-- este componente indica al usuario un proceso de carga de foma intrusiva -->
      <ion-loading v-if="api.isLoading.value" message="Cargando usuarios" :backdrop-dismiss="true"></ion-loading>

    <!-- Creación de una modal para el login -->
    <ion-modal :is-open="loginVisible" :breakpoints="[0, 0.8]" :initialBreakpoint="0.8" @didDismiss="loginVisible = false">
      <ion-content>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Login</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <!-- Vee-Validate espera tener todos sus componentes dentro de una etiqueta <VForm> -->
            <VForm :initial-values="formData" v-slot="{values, errors}" @submit="enviar">
              <ion-item>
                <ion-label position="floating">Email</ion-label>
                <!-- rodeamos los ion-input con un vee-field (VField) para controlar los atributos -->
                <VField name="email" v-slot="{field}" :rules="esEmail">
                  <ion-input v-bind="field"></ion-input>
                </VField>
                <!-- Ponemos el error donde queramos que se presente y usamos el atributo "name" para enlazarlo -->
                <strong><VErrorMessage name="email" class="error" /></strong>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Password</ion-label>
                <VField name="clave" v-slot="{field}" :rules="noVacio">
                  <ion-input type="password" v-bind="field"></ion-input>
                </VField>
                <VErrorMessage name="clave" class="error" />
              </ion-item>
              <ion-button type="submit" expand="block" size="large">Login</ion-button>
              <p>{{ values }}</p>
              <p>{{ errors }}</p>
            </VForm>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-modal>


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
  IonImg,
  IonSpinner,
  IonCard,
  IonCardContent,
  IonLoading,
  IonButtons,
  IonMenuButton,
  IonModal,
  IonInput,
  IonCardTitle,
  IonCardHeader,
  alertController,
  toastController
} from "@ionic/vue";

// importamos la función para definir un componente en TS
import { defineComponent } from "vue";

// importamos nuestra composable function
import useAPI from "../composables/useAPI";

import { Form, Field, ErrorMessage } from 'vee-validate'

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
    IonImg,
    IonSpinner,
    IonCard,
    IonCardContent,
    IonLoading,
    IonButtons,
    IonMenuButton,
    IonModal,
    IonInput,
    IonCardTitle,
    IonCardHeader,
    VForm : Form,
    VField : Field,
    VErrorMessage : ErrorMessage
  },
  // definimos las variables de estado (reactivas) de este componente
  data(){
    return {
      users: [] as any[],
      loginVisible: false,
      formData: {
        email: '',
        clave: ''
      }
    }
  },
  // definimos los métodos que serán llamados desde la plantilla
  methods:{
    async loadUsers(){
      // siempre usamos this dentro de los métodos para acceder a varaibles o a otros métodos del componente
      this.users = await this.api.loadUserList()
    },
    // las reglas de vee-validate devielven true o un literal con la descripción del error
    esEmail(valor:string): boolean | string {
      if (valor.indexOf('@')!=-1) {
        return true
      }
      return 'Este campo no parece un email'
    },
    // las reglas de vee-validate devuelven true o un literal con la descripción del error
    noVacio(valor:string): boolean | string {
      if (valor.length > 0) {
        return true
      }
      return 'Este campo tiene que contener al menos un caracter'
    },
    async enviar(datos:any) {
      console.log("Datos a enviar", datos)
      const respuestaApi = await this.api.loginUser(datos.email, datos.clave)
      console.log(respuestaApi)
      if (respuestaApi.error){
        // usamos el alertController para seguir en el paradigma de Ionic
        const miAlerta = await alertController.create({
          header:'Error de acceso',
          message: respuestaApi.error,
          buttons:['De acuerdo']
        })
        // una vez definida la alerta, la mostramos
        miAlerta.present()
      }
    },
    async mostrarToast(){
      const toast = await toastController.create({
        message: 'Datos cargados correctamente',
        duration: 3000,
        position: 'bottom'
      });

      await toast.present();
  }
  },
  watch:{
    'api.isLoading.value' (nuevoValor){
      console.log('Is Loading ha cambiado')
      if (nuevoValor == false) {
        this.mostrarToast()
      }
    }
  },
  // montamos las instancias de las composable functions
  setup() {
    const api = useAPI()
    return { api };
  },
});
</script>

<style scoped>
ion-card-content{
  text-align: center;
}
.error{
  color:red;
  font-style: italic;
  font-size: 12px;
}
</style>
