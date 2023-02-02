import { reactive } from 'vue'
import { Motion } from '@capacitor/motion'

export default function useMotion() {

  const data = reactive({
    aceleracion: null as any,
    orientacion: null as any,
    gravity: null as any
  })

  const updateAccel = (event:any) => {
    console.log('Device motion accel:', event)
    data.aceleracion = {x: event.acceleration.x, y: event.acceleration.y, z: event.acceleration.z}
    data.gravity = {x: event.accelerationIncludingGravity.x, y: event.accelerationIncludingGravity.y, z: event.accelerationIncludingGravity.z}
  }

  const updateOrientation = (event:any) => {
    console.log('Device motion orientation:', event)
    data.orientacion = {alpha: event.alpha, beta: event.beta, gamma: event.gamma }
  }

  const capturarAceleracion = () => {
    // Iniciamos la escucha de eventos de motion directamente:
    Motion.addListener('accel', updateAccel )
    Motion.addListener('orientation', updateOrientation )
  }

  const pararListeners = () => {
    Motion.removeAllListeners()
  }
  return {
    capturarAceleracion,
    pararListeners,
    data
  }
}
