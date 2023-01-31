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

  const loadPrefs = async () => {
    const loadedPrefs = await Preferences.get({key: 'prefs'}) as any

    const loadedPrefsObject = JSON.parse(loadedPrefs.value)
    prefs.name = loadedPrefsObject.name 
    prefs.email = loadedPrefsObject.email
    prefs.token = loadedPrefsObject.token
  }

  onMounted( () => loadPrefs() )

  return {
    prefs,
    savePrefs,
    loadPrefs
  }
}