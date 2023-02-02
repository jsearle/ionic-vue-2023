import {reactive, onMounted} from 'vue'
import {Preferences} from '@capacitor/preferences'

export default function usePreferences() {
  const prefs = reactive({
    name: '',
    email: '',
    token : ''
  })

  // guardamos las preferencias en el archivo de la aplicación
  const savePrefs = async (newPrefs:any) => {
    // llamamos a Preferences, que es el plugin de capacitor
    Preferences.set({key: 'prefs', value: JSON.stringify(newPrefs)})
    prefs.name = newPrefs.name 
    prefs.email = newPrefs.email
    prefs.token = newPrefs.token
  }

  // cargamos las preferencias del archivo de la aplicación
  const loadPrefs = async () => {
    const loadedPrefs = await Preferences.get({key: 'prefs'}) as any
    // el objeto recuperado tiene una propiedad value que es un string. Tenemos que interpretarlo como JSON
    const loadedPrefsObject = JSON.parse(loadedPrefs.value)
    // insertamos los valores en el objeto reactivo prefs
    prefs.name = loadedPrefsObject.name 
    prefs.email = loadedPrefsObject.email
    prefs.token = loadedPrefsObject.token
  }

  // cuando se monta el composable en un componente, cargamos las preferencias
  onMounted( () => loadPrefs() )

  // exportamos el objeto reactivo y las funciones para guardar y cargar las preferencias
  return {
    prefs,
    savePrefs,
    loadPrefs
  }
}