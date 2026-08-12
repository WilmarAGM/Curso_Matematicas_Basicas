import { GROUP_SCHEDULES, NEWS, SUPPORT_MATERIALS, type SectionId } from '@/data/content'
import { FileText, Download } from 'lucide-react'
import { WEEKS } from '@/data/weeks'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { QRCodeSVG } from 'qrcode.react'

const SITE_URL = 'https://curso-matematicas-basicas-plum.vercel.app/'

interface HomeProps {
  onNavigate: (id: SectionId) => void
  completed: Record<string, boolean>
}

const KIND_META: Record<string, { label: string; text: string; dot: string; bg: string }> = {
  evaluacion: { label: 'Evaluación', text: 'text-warm', dot: 'bg-warm', bg: 'bg-warm/10' },
  taller: { label: 'Taller', text: 'text-pine', dot: 'bg-pine', bg: 'bg-pine/10' },
  aviso: { label: 'Aviso', text: 'text-ember', dot: 'bg-ember', bg: 'bg-ember/10' },
}

export function Home({ onNavigate, completed }: HomeProps) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <header className="border-b border-line pb-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="font-mono-nums text-sm uppercase tracking-[0.14em] text-warm">
              Institución Universitaria Pascual Bravo
            </p>
            <div className="mt-2 flex items-center gap-4">
              <img src="/icon_home.png" alt="Home" className="h-16 w-16 drop-shadow-md" />
              <h1 className="font-display text-3xl leading-tight text-ink md:text-5xl">
                Matemáticas Operativas
              </h1>
            </div>
            <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-muted">
              Curso semana a semana sobre los fundamentos de la aritmética: conjuntos numéricos,
              propiedades de las operaciones, jerarquía de operaciones, patrones numéricos, MCM y MCD,
              entre otros temas que se irán publicando durante el semestre. Cada semana combina teoría
              con ejercicios interactivos.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
              <span>Prof. Wilmar Alberto González Medina</span>
              <span className="h-1 w-1 rounded-full bg-line-strong" />
              <span>Semestre 2026-II</span>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-2 rounded-lg border border-line bg-surface p-4">
            <QRCodeSVG value={SITE_URL} size={112} className="h-28 w-28" />
            <span className="text-center text-xs text-ink-muted">
              Escanea para acceder<br />al sitio del curso
            </span>
          </div>
        </div>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1.4fr]">
        <section aria-labelledby="agenda-heading" className="order-1">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 id="agenda-heading" className="font-display text-xl text-ink">
              Próximas fechas
            </h2>
            <span className="text-xs italic text-ink-muted">
              Editable en <code className="font-mono-nums">src/data/content.ts</code>
            </span>
          </div>
          <ol className="flex flex-col gap-3">
            {NEWS.map((item, i) => {
              const meta = KIND_META[item.kind]
              return (
                <li
                  key={i}
                  className="flex gap-3 rounded-lg border border-line bg-surface p-4"
                >
                  <span className={cn('mt-1.5 h-2 w-2 shrink-0 rounded-full', meta.dot)} />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          'rounded-sm px-2 py-0.5 text-xs font-medium uppercase tracking-wide',
                          meta.bg,
                          meta.text,
                        )}
                      >
                        {meta.label}
                      </span>
                      <span className="font-mono-nums text-xs text-ink-muted">{item.date}</span>
                    </div>
                    <h3 className="mt-1.5 font-display text-base text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        <section aria-labelledby="weeks-heading" className="order-2">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 id="weeks-heading" className="font-display text-xl text-ink">
              Semanas del curso
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {WEEKS.map((w) => {
              const available = w.status === 'disponible' && w.hubId
              return (
                <Card
                  key={w.number}
                  role="button"
                  onClick={() => available && onNavigate(w.hubId as SectionId)}
                  className={cn(
                    'flex flex-col items-start gap-2 p-5 text-left cursor-pointer transition-all active:translate-y-1 active:shadow-none hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(32,80,223,0.15)]',
                    !available && 'cursor-not-allowed opacity-60 hover:translate-y-0 active:translate-y-0 shadow-none'
                  )}
                >
                  <span className="font-mono-nums text-xs uppercase tracking-wide text-ink-muted">
                    Semana {w.number}
                  </span>
                  <div className="flex items-center gap-3">
                    <img src={w.number === 1 ? "/icon_math.png" : "/icon_trophy.png"} alt="Module" className="h-10 w-10 drop-shadow-sm" />
                    <span className="font-display text-lg text-ink">{w.title}</span>
                  </div>
                  <span className="text-sm leading-relaxed text-ink-muted">{w.summary}</span>
                  <span
                    className={cn(
                      'mt-1 inline-flex items-center gap-1.5 text-xs font-medium',
                      available ? 'text-primary' : 'text-ink-muted',
                    )}
                  >
                    <span
                      className={cn('h-2 w-2 rounded-full', available ? 'bg-accent-green' : 'bg-line-strong')}
                    />
                    {available ? 'Disponible' : 'Próximamente'}
                  </span>
                </Card>
              )
            })}
          </div>
        </section>
      </div>

      <section aria-labelledby="fechas-heading" className="mt-10 border-t border-line pt-8">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 id="fechas-heading" className="font-display text-xl text-ink">
            Fechas evaluativas por grupo
          </h2>
          <span className="text-xs italic text-ink-muted">Semestre 2026-II</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {GROUP_SCHEDULES.map((g) => (
            <div key={g.group} className="rounded-lg border border-line bg-surface p-5">
              <h3 className="font-display text-lg text-ink">{g.group}</h3>
              <p className="mt-0.5 text-sm text-ink-muted">{g.schedule}</p>
              <div className="mt-4 flex flex-col gap-4">
                {g.cortes.map((c) => (
                  <div key={c.corte} className="border-l-2 border-line-strong pl-3">
                    <p className="font-mono-nums text-xs uppercase tracking-wide text-warm">
                      Corte {c.corte}
                    </p>
                    <ul className="mt-1.5 flex flex-col gap-1 text-sm text-ink-muted">
                      <li className="flex justify-between gap-3">
                        <span>Actividad evaluativa</span>
                        <span className="font-mono-nums text-ink">{c.actividad}</span>
                      </li>
                      <li className="flex justify-between gap-3">
                        <span>Simulacro de parcial</span>
                        <span className="font-mono-nums text-ink">{c.simulacro}</span>
                      </li>
                      <li className="flex justify-between gap-3">
                        <span>Primer parcial</span>
                        <span className="font-mono-nums text-ink">{c.parcial ?? 'Por confirmar'}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="materiales-heading" className="mt-10 border-t border-line pt-8">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 id="materiales-heading" className="font-display text-xl text-ink">
            Material formal de apoyo
          </h2>
          <span className="text-xs italic text-ink-muted">Guías oficiales en PDF</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {SUPPORT_MATERIALS.map((m) => (
            <a
              key={m.file}
              href={m.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-lg border border-line bg-surface p-4 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(32,80,223,0.15)]"
            >
              <FileText className="mt-0.5 h-8 w-8 shrink-0 text-primary" />
              <div className="min-w-0">
                <h3 className="font-display text-base text-ink">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{m.description}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  <Download className="h-3.5 w-3.5" />
                  Descargar PDF
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {!completed['historia'] && (
        <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-6">
          <Button
            size="lg"
            onClick={() => onNavigate('semana1')}
            className="text-lg px-8 py-6 rounded-2xl"
          >
            Ir a la Semana 1 →
          </Button>
        </div>
      )}
    </div>
  )
}
