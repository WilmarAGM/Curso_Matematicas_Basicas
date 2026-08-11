import type { ReactNode } from 'react'
import { MODULES, type SectionId } from '@/data/content'

interface ModuleShellProps {
  id: SectionId
  eyebrow: string
  title: string
  intro: ReactNode
  children: ReactNode
  onNavigate: (id: SectionId) => void
}

export function ModuleShell({ id, eyebrow, title, intro, children, onNavigate }: ModuleShellProps) {
  const idx = MODULES.findIndex((m) => m.id === id)
  const prev = MODULES[idx - 1]
  const next = MODULES[idx + 1]

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="font-mono-nums text-sm uppercase tracking-[0.14em] text-warm">{eyebrow}</p>
      <h1 className="mt-2 font-display text-4xl text-ink">{title}</h1>
      <div className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-muted">{intro}</div>

      <div className="mt-10">{children}</div>

      <div className="mt-14 flex items-center justify-between border-t border-line pt-6">
        {prev ? (
          <button
            onClick={() => onNavigate(prev.id)}
            className="text-sm text-ink-muted transition hover:text-ink"
          >
            ← {prev.title}
          </button>
        ) : (
          <button
            onClick={() => onNavigate('historia')}
            className="text-sm text-ink-muted transition hover:text-ink"
          >
            ← Historia de los Números
          </button>
        )}
        {next ? (
          <button
            onClick={() => onNavigate(next.id)}
            className="rounded bg-pine px-4 py-2 text-sm font-medium text-pine-foreground transition hover:opacity-90"
          >
            {next.title} →
          </button>
        ) : (
          <button
            onClick={() => onNavigate('semana1')}
            className="rounded bg-pine px-4 py-2 text-sm font-medium text-pine-foreground transition hover:opacity-90"
          >
            Volver a Semana 1 →
          </button>
        )}
      </div>
    </div>
  )
}
