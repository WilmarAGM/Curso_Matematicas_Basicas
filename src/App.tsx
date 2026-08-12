import { useState } from 'react'
import { SideBar, type PageId } from '@/components/app/SideBar'
import { Home } from '@/sections/Home'
import { WeeksGrid } from '@/sections/WeeksGrid'
import { SupportMaterial } from '@/sections/SupportMaterial'
import { Workshops } from '@/sections/Workshops'
import { Paap } from '@/sections/Paap'
import { WeekHub } from '@/sections/WeekHub'
import { History } from '@/sections/History'
import { Module1Sets } from '@/sections/Module1Sets'
import { Module2Properties } from '@/sections/Module2Properties'
import { Module3Pemdas } from '@/sections/Module3Pemdas'
import { Module4Patterns } from '@/sections/Module4Patterns'
import { Module5LcmGcd } from '@/sections/Module5LcmGcd'
import { useProgress } from '@/hooks/useProgress'

function App() {
  const [page, setPage] = useState<PageId | string>('inicio')
  const { completed, markComplete } = useProgress()

  const navigate = (id: PageId | string) => {
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen font-body flex relative overflow-hidden bg-[#0b162c]">
      {/* Background Neon Blobs for true glassmorphism effect */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-leaf/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-ember/20 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-pine/20 blur-[100px]" />

      {/* SideBar for Desktop - For mobile, a hamburger menu would be added here */}
      <SideBar active={page as PageId} onNavigate={navigate as (id: PageId) => void} />
      
      {/* Main Content Area - padded left by the sidebar width (w-72 = 18rem = 288px) on desktop */}
      <main className="flex-1 md:ml-72 min-h-screen flex flex-col">
        <div className="flex-1">
          {page === 'inicio' && <Home />}
          {page === 'semanas' && <WeeksGrid onNavigate={navigate} />}
          {page === 'material' && <SupportMaterial />}
          {page === 'talleres' && <Workshops />}
          {page === 'paap' && <Paap />}
          
          {/* Week Content */}
          {page === 'semana1' && <WeekHub onNavigate={navigate as any} completed={completed} />}
          {page === 'historia' && (
            <History onNavigate={navigate as any} onDone={() => markComplete('historia')} />
          )}
          {page === 'conjuntos' && (
            <Module1Sets onNavigate={navigate as any} onDone={() => markComplete('conjuntos')} />
          )}
          {page === 'propiedades' && (
            <Module2Properties onNavigate={navigate as any} onDone={() => markComplete('propiedades')} />
          )}
          {page === 'pemdas' && (
            <Module3Pemdas onNavigate={navigate as any} onDone={() => markComplete('pemdas')} />
          )}
          {page === 'patrones' && (
            <Module4Patterns onNavigate={navigate as any} onDone={() => markComplete('patrones')} />
          )}
          {page === 'mcmMcd' && (
            <Module5LcmGcd onNavigate={navigate as any} onDone={() => markComplete('mcmMcd')} />
          )}
        </div>

        <footer className="border-t border-line px-5 py-6 text-center text-xs text-ink-muted">
          Razonamiento Matemático y Analítico · Institución Universitaria Pascual Bravo · Semestre 2026-II
        </footer>
      </main>
    </div>
  )
}

export default App
