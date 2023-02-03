// importamos el plugin y algunos tipos para loas llamadas
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';

export default function useCustomCam(){
  // esta función inicia la cámara y la pinta bajo el resto de elementos
  const startCam = () => {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      height: 500,
      width: 500,
      toBack: true
    }
    CameraPreview.start(cameraPreviewOptions)
  }


  const stopCam = () => {
    CameraPreview.stop()
  }
  // capturamos un fotograma especificando la calidad y el tamaño
  const capture = async () => {
    const cameraPreviewOptions: CameraPreviewPictureOptions = {
      quality: 90,
      height: 500,
      width: 500
    }
    const result = await CameraPreview.capture(cameraPreviewOptions)
    // el valor llega en base64, así que lo extraemos desde la propiedad value
    const base64PictureData = result.value
    return base64PictureData
  }

  return {
    startCam,
    stopCam,
    capture
  }

}