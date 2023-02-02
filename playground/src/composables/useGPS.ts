import { Geolocation } from '@capacitor/geolocation';
import {reactive} from 'vue'

export default function useLocation(){
  // guardamos un identificador para poder parar la escucha
  let watchId = null as any

  // la variable reactiva que contendrá los datos
  const data = reactive({
    coords: {} as any, // usamos "as any" para que typescript no infiera un objeto vacío
    isLoading: false
  })
  
  // función para obtener la posición actual del usuario
  const getCurrentPosition = async () => {
    // ponemos el estado "cargando" a true para que aparezca el spinner en el frontend
    data.isLoading = true
    // llamada a la API de geolocalización
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    })
    // guardamos los datos en las variables reactivas
    data.coords = coordinates.coords
    data.isLoading = false
    return coordinates.coords
  }

  // cada vez que la posición cambie, se ejecutará esta función
  const updatePosition = (newPosition:any, err: any) => {
    console.log('posición actualizada', newPosition, err)
    data.coords = newPosition.coords
  }

  // iniciar la escucha de la posición
  const watchPosition = async () => {
    // cada vez que detecte un cambio de posición llamaremos a updatePosition
    watchId = await Geolocation.watchPosition({ enableHighAccuracy: true,  }, updatePosition)
  }

  // parar la escucha de la posición
  const stopWatch = () => {
    Geolocation.clearWatch({ id: watchId })
  }


  // función para calcular la distancia entre dos puntos en metros
  const getDistance = (lat1:number, lon1:number, lat2:number, lon2:number) => {
    const R = 6371000 // Radius of the earth in m
    const dLat = deg2rad(lat2-lat1)  // deg2rad below
    const dLon = deg2rad(lon2-lon1) 
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    const d = R * c // Distance in m
    return d
  }
  
  // función para convertir grados a radianes
  const deg2rad = (deg: number) => {
    return deg * (Math.PI/180)
  }

  // cálculo de la orientación en grados de un punto a otro
  function getHeading(lat1:number, lon1:number, lat2:number, lon2:number) {
    const dLon = (lon2 - lon1)
    const y = Math.sin(dLon) * Math.cos(lat2)
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon)
    let brng = Math.atan2(y, x)
    brng = (brng + 2 * Math.PI) % (2 * Math.PI)
    return brng * (180 / Math.PI)
  }

  return {
    getCurrentPosition,
    watchPosition,
    stopWatch,
    getDistance,
    getHeading,
    data
  }
}


