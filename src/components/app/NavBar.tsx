import { MODULES, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface NavBarProps {
  active: SectionId
  onNavigate: (id: SectionId) => void
  completed: Record<string, boolean>
}

const WEEK1_IDS: SectionId[] = ['semana1', 'historia', ...MODULES.map((m) => m.id)]

const NAV_ITEMS: { id: SectionId; label: string; match: SectionId[] }[] = [
  { id: 'inicio', label: 'Inicio', match: ['inicio'] },
  { id: 'semana1', label: 'Semana 1', match: WEEK1_IDS },
]

export function NavBar({ active, onNavigate, completed }: NavBarProps) {
  const week1Done = MODULES.every((m) => completed[m.id]) && completed['historia']

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3">
        <button
          onClick={() => onNavigate('inicio')}
          className="shrink-0 font-display text-lg tracking-tight text-ink"
        >
          Aritmética <span className="text-warm">·</span> Operativas
        </button>
        <nav className="flex flex-1 items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                'relative shrink-0 whitespace-nowrap rounded px-3 py-1.5 text-sm transition-colors',
                item.match.includes(active)
                  ? 'bg-pine text-pine-foreground'
                  : 'text-ink-muted hover:bg-line/60 hover:text-ink',
              )}
            >
              {item.label}
              {item.id === 'semana1' && week1Done && !item.match.includes(active) && (
                <span className="ml-1.5 text-warm">●</span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
