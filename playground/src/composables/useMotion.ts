import { reactive } from 'vue'
import { Motion } from '@capacitor/motion'

export default function useMotion() {

  const motion = reactive({
    aceleracion: null as any,
    orientacion: null as any
  })

  const updateAccel = (event:any) => {
    console.log('Device motion event:', event)
    motion.aceleracion = event.accel
  }

  const updateOrientation = (event:any) => {
    console.log('Device motion event:', event)
    motion.orientacion = event.orientation
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
    motion
  }
}
