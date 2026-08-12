import { cn } from '@/lib/utils'
import { Home, CalendarDays, BookOpen, PenTool, FileText, User } from 'lucide-react'

export type PageId = 'inicio' | 'semanas' | 'material' | 'talleres'

interface SideBarProps {
  active: PageId
  onNavigate: (id: PageId) => void
}

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'semanas', label: 'Semanas', icon: CalendarDays },
  { id: 'material', label: 'Material de apoyo', icon: BookOpen },
  { id: 'talleres', label: 'Talleres', icon: PenTool },
] as const

export function SideBar({ active, onNavigate }: SideBarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-72 flex-col border-r border-line bg-surface/80 backdrop-blur hidden md:flex">
      <div className="flex flex-col flex-1 px-5 py-8">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-8 w-8 rounded-lg bg-pine flex items-center justify-center font-display font-bold text-white shadow-[0_0_15px_rgba(32,80,223,0.5)]">
              RM
            </span>
            <h1 className="font-display text-lg leading-tight text-ink font-bold">
              Razonamiento <br /> Matemático
            </h1>
          </div>
          <p className="text-xs text-ink-muted leading-tight">
            Institución Universitaria Pascual Bravo
          </p>
        </div>

        <button className="flex items-center gap-3 rounded-lg border border-line bg-surface-raised px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-line/50 hover:border-pine/50 mb-8 group">
          <User className="h-5 w-5 text-ink-muted group-hover:text-pine transition-colors" />
          <span>Iniciar sesión</span>
        </button>

        <nav className="flex flex-col gap-2 flex-1">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-all duration-200',
                  isActive
                    ? 'bg-pine/10 text-pine font-medium shadow-[inset_4px_0_0_0_rgba(32,80,223,1)]'
                    : 'text-ink-muted hover:bg-line/40 hover:text-ink',
                )}
              >
                <Icon className={cn('h-5 w-5', isActive ? 'text-pine' : 'text-ink-muted')} />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="mt-auto pt-6">
          <a
            href="/programa_semanal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-ember to-warm px-4 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,157,0,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,157,0,0.5)]"
          >
            <FileText className="h-5 w-5" />
            Ver Programa
          </a>
        </div>
      </div>
    </aside>
  )
}
