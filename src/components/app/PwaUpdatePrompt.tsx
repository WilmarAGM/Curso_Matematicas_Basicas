import { useEffect } from 'react'
import { toast } from 'sonner'
import { useRegisterSW } from 'virtual:pwa-register/react'

export function PwaUpdatePrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_url, registration) {
      // Revisa periódicamente si hay una versión nueva del service worker
      if (!registration) return
      setInterval(() => {
        registration.update()
      }, 60 * 60 * 1000)
    },
  })

  useEffect(() => {
    if (needRefresh) {
      toast('Hay una versión nueva disponible', {
        description: 'Actualiza para obtener las últimas mejoras.',
        duration: Infinity,
        action: {
          label: 'Actualizar',
          onClick: () => updateServiceWorker(true),
        },
        onDismiss: () => setNeedRefresh(false),
      })
    }
  }, [needRefresh, setNeedRefresh, updateServiceWorker])

  useEffect(() => {
    if (offlineReady) {
      toast.success('La app ya está disponible sin conexión', {
        duration: 4000,
      })
      setOfflineReady(false)
    }
  }, [offlineReady, setOfflineReady])

  return null
}
