export function Workshops() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="border-b border-line pb-8 mb-10">
        <h1 className="font-display text-3xl leading-tight text-ink md:text-5xl">
          Talleres
        </h1>
        <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-muted">
          Ejercicios y talleres prácticos para el desarrollo del curso.
        </p>
      </header>

      <div className="rounded-xl border border-line bg-surface/30 border-dashed p-10 text-center">
        <p className="text-ink-muted">No hay talleres disponibles en este momento.</p>
      </div>
    </div>
  )
}
