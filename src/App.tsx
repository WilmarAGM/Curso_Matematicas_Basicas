import { useState } from 'react'
import { NavBar } from '@/components/app/NavBar'
import { Home } from '@/sections/Home'
import { WeekHub } from '@/sections/WeekHub'
import { History } from '@/sections/History'
import { Module1Sets } from '@/sections/Module1Sets'
import { Module2Properties } from '@/sections/Module2Properties'
import { Module3Pemdas } from '@/sections/Module3Pemdas'
import { Module4Patterns } from '@/sections/Module4Patterns'
import { Module5LcmGcd } from '@/sections/Module5LcmGcd'
import { useProgress } from '@/hooks/useProgress'
import type { SectionId } from '@/data/content'

function App() {
  const [section, setSection] = useState<SectionId>('inicio')
  const { completed, markComplete } = useProgress()

  const navigate = (id: SectionId) => {
    setSection(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen font-body">
      <NavBar active={section} onNavigate={navigate} completed={completed} />
      {section === 'inicio' && <Home onNavigate={navigate} completed={completed} />}
      {section === 'semana1' && <WeekHub onNavigate={navigate} completed={completed} />}
      {section === 'historia' && (
        <History onNavigate={navigate} onDone={() => markComplete('historia')} />
      )}
      {section === 'conjuntos' && (
        <Module1Sets onNavigate={navigate} onDone={() => markComplete('conjuntos')} />
      )}
      {section === 'propiedades' && (
        <Module2Properties onNavigate={navigate} onDone={() => markComplete('propiedades')} />
      )}
      {section === 'pemdas' && (
        <Module3Pemdas onNavigate={navigate} onDone={() => markComplete('pemdas')} />
      )}
      {section === 'patrones' && (
        <Module4Patterns onNavigate={navigate} onDone={() => markComplete('patrones')} />
      )}
      {section === 'mcmMcd' && (
        <Module5LcmGcd onNavigate={navigate} onDone={() => markComplete('mcmMcd')} />
      )}
      <footer className="border-t border-line px-5 py-6 text-center text-xs text-ink-muted">
        Matemáticas Operativas: Aritmética · Institución Universitaria Pascual Bravo · Semestre 2026-II
      </footer>
    </div>
  )
}

export default App
