<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <p>
          <ion-button @click="()=>router.push('/dos')">Ir a la segunda página</ion-button>
          <ion-button @click="()=>router.push('/new')">Ir a la nueva página</ion-button>
          <ion-button href="/dos">Ir a la segunda página</ion-button>
          <MyButton texto="Mi texto del botón" />

          <ion-button href="/form" size="large" expand="block">Formulario</ion-button>
        </p>
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import MyButton from './MyButton.vue'

export default defineComponent({
  name: 'HomePage',
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, MyButton },
  setup(){
    const router = useRouter()
    return {
      router
    }
  },
  methods:{
    ir(){
      this.router.push('/dos')
    }
  }

})

</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
