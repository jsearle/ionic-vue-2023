import {onMounted, ref} from 'vue'

export default function useMouse() {
  const x = ref(0)
  const y = ref(0)

  const actualizarPosicion = (event:MouseEvent) => {
    x.value = event.clientX
    y.value = event.clientY
  }

  onMounted(() => {
    window.addEventListener('mousemove', actualizarPosicion)
  })

  return {
    x,
    y
  }
}