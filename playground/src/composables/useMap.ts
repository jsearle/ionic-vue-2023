import { Loader } from '@googlemaps/js-api-loader'
import { reactive, ref, onMounted, watch } from 'vue'

export default function useMap() {
  // dos variables: una tiene el wrapper de google maps y la otra el mapa
  let google:any
  let map:any

  // definimos las variables reactivas
  const mapCenter = reactive({coords: {lat: 40.352784, lng: -3.70061}, zoom: 12});
  const isLoaded = ref(false)
  const markers = reactive([] as any[]);

  // esta función genera un marcador en el mapa en base a las coordenadas que le pasemos
  const createMarker = (position:any)=>{
    const markerOptions: any = {
      map: map,
      position,
      icon : {
        path: 'M18 2c1.1 0 2 0.9 2 2l0 13c0 1.1-0.9 2-2 2l-4 0 -3 3 -3-3 -4 0c-1.1 0-2-0.9-2-2l0-13c0-1.1 0.9-2 2-2l14 0Zm-7 10.9l2.8 1.7 -0.7-3.2 2.5-2.1 -3.2-0.3 -1.3-3 -1.3 3 -3.2 0.3 2.5 2.1 -0.7 3.2 2.8-1.7Z',
        scale: 1.8,
        anchor: new google.maps.Point(11, 22),
        fillOpacity: 0.8,
        fillColor: '#c14e34',
        strokeOpacity: 0
      }
    }
    const newMarker = new google.maps.Marker(markerOptions)
    markers.push(newMarker);
  }
  
  // igual que la funcion anterior pero con otro color de icono
  const myPosition = (position:any)=>{
    const markerOptions: any = {
      map: map,
      position,
      icon : {
        path: 'M18 2c1.1 0 2 0.9 2 2l0 13c0 1.1-0.9 2-2 2l-4 0 -3 3 -3-3 -4 0c-1.1 0-2-0.9-2-2l0-13c0-1.1 0.9-2 2-2l14 0Zm-7 10.9l2.8 1.7 -0.7-3.2 2.5-2.1 -3.2-0.3 -1.3-3 -1.3 3 -3.2 0.3 2.5 2.1 -0.7 3.2 2.8-1.7Z',
        scale: 2,
        anchor: new google.maps.Point(11, 22),
        fillOpacity: 1,
        fillColor: '#ff0000',
        strokeOpacity: 0
      }
    }
    const newMarker = new google.maps.Marker(markerOptions)
    markers.push(newMarker);
  }
  
  // mueve la cámara del mapa
  const setCenter = (coords:any, zoom:number)=>{
    if (google == undefined) return;
    map.panTo({lat:coords.lat, lng:coords.lng})
    setTimeout(()=>{
      map.setZoom(zoom);
    }, 1000)
  }

  // genera el mapa en un elemento del DOM
  const createMap = (element:any, center:any, zoom:number) =>{
    //console.log(element, google, mapCenter.coords)
    mapCenter.coords = center;
    mapCenter.zoom = zoom;
    if (google == undefined) return;
    const opts:any = {
      center: center,
      zoom: zoom,
      styles: mapStyles,
      maxZoom: 20,
      minZoom: 0,
      mapTypeId: 'terrain',
      clickableIcons: true,
      disableDoubleClickZoom: false,
      draggable: true,
      keyboardShortcuts: true,
      scrollwheel: true,
    };
    //console.log(opts)
    map = new google.maps.Map(element, opts);
  }

  onMounted( async ()=>{
    const loader = new Loader({
      apiKey: 'AIzaSyDKtd8L97X6mEGTEIqyuZzj3m1mBNDAlgk',
      version: '3.31',
      libraries: ['places','geometry','drawing']
    });
    google = await loader.load()
    isLoaded.value = true;

    watch( mapCenter , (newVal:any, oldVal:any)=>{
      setCenter(newVal.coords, newVal.zoom)
    })
  })


  return {
    createMap,
    createMarker,
    mapCenter,
    markers,
    isLoaded,
    myPosition
  }

}


const mapStyles = [
  {
      "featureType": "all",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#202c3e"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "gamma": 0.01
          },
          {
              "lightness": 20
          },
          {
              "weight": "1.39"
          },
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "weight": "0.96"
          },
          {
              "saturation": "9"
          },
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 30
          },
          {
              "saturation": "9"
          },
          {
              "color": "#29446b"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "saturation": 20
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 20
          },
          {
              "saturation": -20
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 10
          },
          {
              "saturation": -30
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#193a55"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "saturation": 25
          },
          {
              "lightness": 25
          },
          {
              "weight": "0.01"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "lightness": -20
          }
      ]
  }
]