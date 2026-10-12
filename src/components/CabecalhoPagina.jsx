/** Faixa de abertura das páginas internas: título (h1) e uma linha de apoio, sob a navbar. */
export default function CabecalhoPagina({ titulo, subtitulo }) {
  return (
    <header className="bg-bordo-escuro text-creme">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-28 md:pb-14 md:pt-36">
        <h1 className="text-4xl md:text-6xl">{titulo}</h1>
        {subtitulo && <p className="mt-3 text-lg text-creme/80">{subtitulo}</p>}
      </div>
    </header>
  )
}