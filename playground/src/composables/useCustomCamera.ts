import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';

export default function useCustomCam(){

  const startCam = () => {
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      height: 500,
      width: 500,
      toBack: true
    }
    CameraPreview.start(cameraPreviewOptions)
  }

  const capture = async () => {
    const cameraPreviewOptions: CameraPreviewPictureOptions = {
      quality: 90,
      height: 500,
      width: 500
    }
    const result = await CameraPreview.capture(cameraPreviewOptions)
    const base64PictureData = result.value
    return base64PictureData
  }

  return {
    startCam,
    capture
  }

}