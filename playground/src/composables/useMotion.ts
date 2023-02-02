import { reactive } from 'vue'
import { Motion } from '@capacitor/motion'

export default function useMotion() {
  // variable reactiva para usar en los componentes
  const data = reactive({
    aceleracion: null as any,
    orientacion: null as any,
    gravity: null as any
  })

  // cada vez que la aceleración cambie, se ejecutará esta función
  const updateAccel = (event:any) => {
    // guardamos los datos separados en las variables reactivas
    data.aceleracion = {x: event.acceleration.x, y: event.acceleration.y, z: event.acceleration.z}
    data.gravity = {x: event.accelerationIncludingGravity.x, y: event.accelerationIncludingGravity.y, z: event.accelerationIncludingGravity.z}
  }

  // cada vez que la orientación cambie, se ejecutará esta función
  const updateOrientation = (event:any) => {
    // guardamos los datos en la variable reactiva
    data.orientacion = {alpha: event.alpha, beta: event.beta, gamma: event.gamma }
  }

  // función para iniciar la escucha de eventos de motion
  const capturarAceleracion = () => {
    // Iniciamos la escucha de eventos de motion directamente:
    Motion.addListener('accel', updateAccel )
    Motion.addListener('orientation', updateOrientation )
  }

  // función para parar la escucha de eventos de motion
  const pararListeners = () => {
    Motion.removeAllListeners()
  }
  
  return {
    capturarAceleracion,
    pararListeners,
    data
  }
}
