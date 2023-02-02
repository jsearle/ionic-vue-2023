import { Geolocation } from '@capacitor/geolocation';
import {reactive} from 'vue'

export default function useLocation(){
  let watchId = null as any
  const data = reactive({
    coords: {} as any
  })
  
  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    })
    data.coords = coordinates.coords
    return coordinates.coords
  }
  const updatePosition = (newPosition:any, err: any) => {
    console.log('posición actualizada', newPosition, err)
    data.coords = newPosition.coords
  }

  const watchPosition = async () => {
    watchId = await Geolocation.watchPosition({ enableHighAccuracy: true,  }, updatePosition)
  }
  const stopWatch = () => {
    Geolocation.clearWatch({ id: watchId })
  }

  return {
    getCurrentPosition,
    watchPosition,
    stopWatch,
    data
  }
}


