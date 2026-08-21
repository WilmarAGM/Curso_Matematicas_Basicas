import { useState } from 'react'
import { SideBar, type PageId } from '@/components/app/SideBar'
import { Home } from '@/sections/Home'
import { WeeksGrid } from '@/sections/WeeksGrid'
import { SupportMaterial } from '@/sections/SupportMaterial'
import { Workshops } from '@/sections/Workshops'
import { Workshop1 } from '@/sections/Workshop1'
import { Workshop2 } from '@/sections/Workshop2'
import { Workshop3 } from '@/sections/Workshop3'
import { Workshop4 } from '@/sections/Workshop4'
import { Paap } from '@/sections/Paap'
import { WeekHub } from '@/sections/WeekHub'
import { WeekHub2 } from '@/sections/WeekHub2'
import { WeekHub3 } from '@/sections/WeekHub3'
import { WeekHub4 } from '@/sections/WeekHub4'
import { History } from '@/sections/History'
import { Module1Sets } from '@/sections/Module1Sets'
import { Module2Properties } from '@/sections/Module2Properties'
import { Module3Pemdas } from '@/sections/Module3Pemdas'
import { Module4Patterns } from '@/sections/Module4Patterns'
import { Module5LcmGcd } from '@/sections/Module5LcmGcd'
import { Module6FracEquiv } from '@/sections/Module6FracEquiv'
import { Module7FracProps } from '@/sections/Module7FracProps'
import { Module8FracTypes } from '@/sections/Module8FracTypes'
import { Module9FracSumRes } from '@/sections/Module9FracSumRes'
import { Module10FracProduct } from '@/sections/Module10FracProduct'
import { Module11FracDivision } from '@/sections/Module11FracDivision'
import { Module12FracWordProblems } from '@/sections/Module12FracWordProblems'
import { Module13Power } from '@/sections/Module13Power'
import { Module14PowerWordProblems } from '@/sections/Module14PowerWordProblems'
import { Module15Radical } from '@/sections/Module15Radical'
import { Module16AlgebraExpr } from '@/sections/Module16AlgebraExpr'
import { Module17AlgebraProps } from '@/sections/Module17AlgebraProps'
import { Module18PolyOps } from '@/sections/Module18PolyOps'
import { Module19NotableProducts } from '@/sections/Module19NotableProducts'
import { Module20AlgebraApplications } from '@/sections/Module20AlgebraApplications'
import { useProgress } from '@/hooks/useProgress'
import { Menu } from 'lucide-react'
import { Toaster } from '@/components/ui/sonner'
import { PwaUpdatePrompt } from '@/components/app/PwaUpdatePrompt'

function App() {
  const [page, setPage] = useState<PageId | string>('inicio')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { completed, markComplete } = useProgress()

  const navigate = (id: PageId | string) => {
    setPage(id)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen font-body flex relative overflow-hidden bg-[#0b162c]">
      {/* Background Neon Blobs for true glassmorphism effect */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-leaf/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-ember/20 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-pine/20 blur-[100px]" />

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 h-16 border-b border-line bg-surface/80 backdrop-blur flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-leaf to-pine flex items-center justify-center font-display font-bold text-ink shadow-[0_0_15px_rgba(214,245,35,0.4)]">RM</span>
          <h1 className="font-display text-sm leading-tight text-ink font-bold">Razonamiento Matemático</h1>
        </div>
        <button onClick={() => setIsMobileMenuOpen(true)} className="text-ink-muted hover:text-ink">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* SideBar */}
      <SideBar 
        active={page as PageId} 
        onNavigate={navigate as (id: PageId) => void} 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      {/* Main Content Area */}
      <main className="flex-1 md:ml-72 min-h-screen flex flex-col pt-16 md:pt-0">
        <div className="flex-1">
          {page === 'inicio' && <Home />}
          {page === 'semanas' && <WeeksGrid onNavigate={navigate} />}
          {page === 'material' && <SupportMaterial />}
          {page === 'talleres' && <Workshops onNavigate={navigate} />}
          {page === 'taller1' && <Workshop1 onNavigate={navigate} />}
          {page === 'taller2' && <Workshop2 onNavigate={navigate} />}
          {page === 'taller3' && <Workshop3 onNavigate={navigate} />}
          {page === 'taller4' && <Workshop4 onNavigate={navigate} />}
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

          {page === 'semana2' && <WeekHub2 onNavigate={navigate as any} completed={completed} />}
          {page === 'equivalentes' && (
            <Module6FracEquiv onNavigate={navigate as any} onDone={() => markComplete('equivalentes')} />
          )}
          {page === 'propiedadesFracciones' && (
            <Module7FracProps onNavigate={navigate as any} onDone={() => markComplete('propiedadesFracciones')} />
          )}
          {page === 'tiposFracciones' && (
            <Module8FracTypes onNavigate={navigate as any} onDone={() => markComplete('tiposFracciones')} />
          )}
          {page === 'sumaResta' && (
            <Module9FracSumRes onNavigate={navigate as any} onDone={() => markComplete('sumaResta')} />
          )}
          {page === 'producto' && (
            <Module10FracProduct onNavigate={navigate as any} onDone={() => markComplete('producto')} />
          )}

          {page === 'semana3' && <WeekHub3 onNavigate={navigate as any} completed={completed} />}
          {page === 'division' && (
            <Module11FracDivision onNavigate={navigate as any} onDone={() => markComplete('division')} />
          )}
          {page === 'aplicacionFracciones' && (
            <Module12FracWordProblems onNavigate={navigate as any} onDone={() => markComplete('aplicacionFracciones')} />
          )}
          {page === 'potenciacion' && (
            <Module13Power onNavigate={navigate as any} onDone={() => markComplete('potenciacion')} />
          )}
          {page === 'problemasPotenciacion' && (
            <Module14PowerWordProblems onNavigate={navigate as any} onDone={() => markComplete('problemasPotenciacion')} />
          )}
          {page === 'radicacion' && (
            <Module15Radical onNavigate={navigate as any} onDone={() => markComplete('radicacion')} />
          )}

          {page === 'semana4' && <WeekHub4 onNavigate={navigate as any} completed={completed} />}
          {page === 'expresionesAlgebraicas' && (
            <Module16AlgebraExpr onNavigate={navigate as any} onDone={() => markComplete('expresionesAlgebraicas')} />
          )}
          {page === 'propiedadesAlgebra' && (
            <Module17AlgebraProps onNavigate={navigate as any} onDone={() => markComplete('propiedadesAlgebra')} />
          )}
          {page === 'operacionesPolinomios' && (
            <Module18PolyOps onNavigate={navigate as any} onDone={() => markComplete('operacionesPolinomios')} />
          )}
          {page === 'productosNotables' && (
            <Module19NotableProducts onNavigate={navigate as any} onDone={() => markComplete('productosNotables')} />
          )}
          {page === 'aplicacionesAlgebra' && (
            <Module20AlgebraApplications onNavigate={navigate as any} onDone={() => markComplete('aplicacionesAlgebra')} />
          )}
        </div>

        <footer className="border-t border-line px-5 py-6 text-center text-xs text-ink-muted">
          Razonamiento Matemático y Analítico · Institución Universitaria Pascual Bravo · Semestre 2026-II
        </footer>
      </main>

      <Toaster />
      <PwaUpdatePrompt />
    </div>
  )
}

export default App
