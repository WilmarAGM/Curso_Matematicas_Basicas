import { BookOpenCheck, Download } from 'lucide-react'

interface WeekGuideCardProps {
  /** carpeta de la guía en public/guias/ (la genera Guias_MO/_fuente/build_<slug>.py) */
  slug: string
  /** PDF para imprimir en public/pdf/ */
  pdf: string
  description: string
}

// Avance que guarda la guía interactiva (public/guias/guia.js) en localStorage: { total, llenos, … }
function progreso(slug: string): number | null {
  try {
    const d = JSON.parse(localStorage.getItem(`mo:${slug}`) || 'null')
    if (!d || !d.total) return null
    return Math.round((100 * d.llenos) / d.total)
  } catch {
    return null
  }
}

export function WeekGuideCard({ slug, pdf, description }: WeekGuideCardProps) {
  const lleno = progreso(slug)

  return (
    <section className="mt-8 rounded-xl border border-pine/40 bg-pine/5 p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="hidden rounded-lg bg-pine/10 p-3 text-pine sm:block">
          <BookOpenCheck className="h-7 w-7" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-mono-nums text-xs uppercase tracking-[0.14em] text-pine">Guía de la semana</p>
          <h2 className="mt-1 font-display text-2xl text-ink">Completa toda la guía</h2>
          <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-ink-muted">{description}</p>

          {lleno !== null && (
            <div className="mt-4 flex items-center gap-3">
              <div className="h-1.5 w-48 overflow-hidden rounded-full bg-line">
                <div className="h-full rounded-full bg-pine transition-[width]" style={{ width: `${lleno}%` }} />
              </div>
              <span className="font-mono-nums text-sm text-ink-muted">{lleno}% de los recuadros llenos</span>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`/guias/${slug}/index.html`}
              className="inline-flex items-center gap-2 rounded-lg bg-pine px-4 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
            >
              <BookOpenCheck className="h-4 w-4" />
              {lleno ? 'Continuar la guía interactiva' : 'Abrir la guía interactiva'}
            </a>
            <a
              href={`/pdf/${pdf}`}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-pine/50 px-4 py-2.5 text-sm font-medium text-pine transition hover:bg-pine/10"
            >
              <Download className="h-4 w-4" />
              Descargar para imprimir (PDF)
            </a>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-ink-muted">
            PDF en papel oficio horizontal, para imprimir a doble cara volteando por el borde corto, con espacio para apuntes en cada hoja.
            En la versión interactiva tus respuestas se guardan solo en este dispositivo.
          </p>
        </div>
      </div>
    </section>
  )
}
