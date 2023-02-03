import { Sensei } from 'sensei'

export default function useSensei() {

  const init = () => {
    Sensei.initSensors()
  }
  const getPressure = async () => {
    const presion = await Sensei.getPressure()
    return presion.value
  }
  const getLight = async () => {
    const luz = await Sensei.getLight()
    return luz.value
  }
  
  return {
    init,
    getPressure,
    getLight
  }
}