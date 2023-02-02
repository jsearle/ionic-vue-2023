// tras instalar el módulo importamos el plugin y los tipos de resultado
import { Camera, CameraResultType, CameraSource, CameraDirection } from '@capacitor/camera';

// nuestro composable para usar la cámara
export default function useCamera(){

  // función para tomar la foto. Asíncrona porque la cámara tarda en tomar la foto
  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      direction: CameraDirection.Rear
    });
  
    // obtenemos la propiedad webPath para poder usarla en el dom más tarde
    const imageUrl = image.webPath;

    return imageUrl
  }

  return {
    takePicture
  }
}