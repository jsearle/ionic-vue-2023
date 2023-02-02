import { Geolocation } from '@capacitor/geolocation';
import {reactive} from 'vue'

export default function useLocation(){

  const data = reactive({
    coords: {} as any
  })
  
  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    })
    return coordinates.coords
  }
  const updatePosition = (newPosition:any, err: any) => {
    console.log('posición actualizada', newPosition, err)
    data.coords = newPosition.coords
  }

  const watchPosition = async () => {
    await Geolocation.watchPosition({ enableHighAccuracy: true,  }, updatePosition)
  }

  return {
    getCurrentPosition,
    watchPosition,
    data
  }
}


