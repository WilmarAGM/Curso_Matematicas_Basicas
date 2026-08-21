// Removed unused useEffect
import { GROUP_SCHEDULES } from '@/data/content'
import useEmblaCarousel from 'embla-carousel-react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import { QRCodeSVG } from 'qrcode.react'
import { InstallButton } from '@/components/app/InstallButton'

const SITE_URL = 'https://curso-matematicas-basicas-plum.vercel.app/'

export function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-12 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <p className="font-mono-nums text-sm uppercase tracking-[0.14em] text-pine mb-2">
            Institución Universitaria Pascual Bravo
          </p>
          <h1 className="font-display text-4xl leading-tight text-ink md:text-6xl font-bold">
            Razonamiento <br/> Matemático y Analítico
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Desarrolla habilidades lógicas, numéricas y analíticas con este curso avanzado. 
            Explora los módulos semanales y mantente al tanto de las fechas evaluativas.
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-line bg-surface/50 backdrop-blur p-5 shadow-[0_0_15px_rgba(214,245,35,0.05)] border-leaf/20">
          <div className="flex items-center justify-center bg-white p-2 rounded-xl">
            <QRCodeSVG value={SITE_URL} size={100} bgColor="#ffffff" fgColor="#000000" className="block" />
          </div>
          <span className="text-center text-xs font-medium text-ink-muted mt-1">
            Escanea para acceder<br />al sitio del curso
          </span>
          <InstallButton className="mt-1" />
        </div>
      </header>

      <section aria-labelledby="fechas-heading" className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 id="fechas-heading" className="font-display text-2xl text-ink font-bold flex items-center gap-3">
            <Calendar className="h-6 w-6 text-pine" />
            Fechas Evaluativas por Grupo
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={scrollPrev}
              className="h-10 w-10 rounded-full border border-line flex items-center justify-center hover:bg-surface-raised hover:text-pine transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="h-10 w-10 rounded-full border border-line flex items-center justify-center hover:bg-surface-raised hover:text-pine transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-4">
            {GROUP_SCHEDULES.map((g, idx) => {
              // Alternate neon colors for cards
              const isGreen = idx % 2 === 0
              const neonClass = isGreen 
                ? 'shadow-[0_0_20px_rgba(214,245,35,0.15),inset_0_0_20px_rgba(214,245,35,0.05)] border-leaf/40 hover:shadow-[0_0_40px_rgba(214,245,35,0.3),inset_0_0_20px_rgba(214,245,35,0.1)] hover:border-leaf/70' 
                : 'shadow-[0_0_20px_rgba(255,180,51,0.15),inset_0_0_20px_rgba(255,180,51,0.05)] border-ember/40 hover:shadow-[0_0_40px_rgba(255,180,51,0.3),inset_0_0_20px_rgba(255,180,51,0.1)] hover:border-ember/70'
              
              const titleColor = isGreen ? 'text-leaf drop-shadow-[0_0_10px_rgba(214,245,35,0.8)]' : 'text-ember drop-shadow-[0_0_10px_rgba(255,180,51,0.8)]'
              
              return (
                <div key={g.group} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_45%] pl-6 py-6">
                  <div className={cn("h-full rounded-[2rem] border-[1px] bg-surface/30 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2", neonClass)}>
                    <h3 className={cn("font-display text-3xl font-bold mb-2 tracking-tight", titleColor)}>
                      {g.group}
                    </h3>
                    <p className="text-sm text-ink-muted mb-6">{g.schedule}</p>
                    
                    <div className="flex flex-col gap-5">
                      {g.cortes.map((c) => (
                        <div key={c.corte} className="relative pl-4 border-l-2 border-line">
                          <span className={cn("absolute -left-[5px] top-1.5 h-2 w-2 rounded-full", isGreen ? 'bg-leaf' : 'bg-ember')} />
                          <p className="font-mono-nums text-xs uppercase tracking-wide text-ink-muted mb-2">
                            Corte {c.corte}
                          </p>
                          <ul className="flex flex-col gap-1.5 text-sm">
                            <li className="flex justify-between items-center gap-3">
                              <span className="text-ink-muted">Actividad</span>
                              <span className="font-mono-nums font-medium text-ink">{c.actividad}</span>
                            </li>
                            <li className="flex justify-between items-center gap-3">
                              <span className="text-ink-muted">Simulacro</span>
                              <span className="font-mono-nums font-medium text-ink">{c.simulacro}</span>
                            </li>
                            <li className="flex justify-between items-center gap-3 pt-1 border-t border-line/50 mt-1">
                              <span className="text-ink font-medium">Parcial</span>
                              <span className={cn("font-mono-nums font-bold", titleColor)}>
                                {c.parcial ?? 'Por confirmar'}
                              </span>
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
