export default function SecaoTitulo({ id, titulo, subtitulo, className = '' }) {
  return (
    <div className={className}>
      <h2 id={id} className="max-w-3xl text-3xl md:text-4xl">
        {titulo}
      </h2>
      {subtitulo && <p className="mt-3 max-w-2xl text-lg text-suave">{subtitulo}</p>}
    </div>
  )
}