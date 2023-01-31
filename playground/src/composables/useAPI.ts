// importamos ref/reactive para usar variables reactivas en nuestro composable
import {ref} from 'vue'

// Definición de un composable (función exportada en default)
export default function useAPI(){
  // constantes que no van a ser reactivas
  const API_USERS_URL = 'https://reqres.in/api/users'
  const API_USER_LOGIN = 'https://reqres.in/api/login'

  // creamos el valor por defecto de la variab reactiva
  const isLoading = ref(false)

  // función asíncrona para obtener los datos de usuarios
  const loadUserList = async () => {
    // ponemos el estado "Cargando" a true
    isLoading.value = true
    // carga de los datos con await para esperar a la promesa
    // result.json() sirve para desenvolver la petición http en un formato JSON
    const response = await fetch(API_USERS_URL).then(result => result.json())
    // extraemos la propiedad data, que contiene un array de usuarios
    const list = response.data

    // forzamos artificalmente un retraso en la carga
    setTimeout( () =>{
      // volvemos a poner el estado "cargando" a false
      isLoading.value = false
    }, 3000)

    // devolvemos la lista de usuarios
    return list
  }
  

  // respuesta del composable: funciones y variables reactivas
  return {
    loadUserList,
    isLoading
  }
}