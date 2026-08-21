import { useState } from 'react'
import { Download, Share, X } from 'lucide-react'
import { useInstallPrompt } from '@/hooks/useInstallPrompt'
import { cn } from '@/lib/utils'

export function InstallButton({ className }: { className?: string }) {
  const { canInstall, installed, isIOS, promptInstall } = useInstallPrompt()
  const [showIOSHint, setShowIOSHint] = useState(false)

  if (installed) return null

  if (!canInstall && !isIOS) return null

  return (
    <div className={cn('relative', className)}>
      <button
        onClick={() => (isIOS ? setShowIOSHint((v) => !v) : promptInstall())}
        className="inline-flex items-center gap-2 rounded-xl border border-leaf/40 bg-leaf/10 px-4 py-2 text-sm font-semibold text-leaf hover:bg-leaf/20 transition-colors"
      >
        <Download className="h-4 w-4" />
        Instalar app
      </button>

      {showIOSHint && (
        <div className="absolute right-0 z-20 mt-2 w-64 rounded-xl border border-line bg-surface-raised p-4 text-xs text-ink-muted shadow-lg">
          <button
            onClick={() => setShowIOSHint(false)}
            className="absolute right-2 top-2 text-ink-muted hover:text-ink"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="flex items-center gap-1.5 text-ink font-medium mb-1">
            <Share className="h-3.5 w-3.5" /> Instalar en iOS
          </p>
          <p>Toca <span className="text-ink font-medium">Compartir</span> en Safari y luego <span className="text-ink font-medium">"Agregar a inicio"</span>.</p>
        </div>
      )}
    </div>
  )
}
