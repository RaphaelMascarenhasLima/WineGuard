import { Link } from 'react-router-dom'

/** Página 404: endereço que não existe. */
export default function Error() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-28 md:pt-32">
      <h1 className="text-4xl text-bordo md:text-5xl">Página não encontrada</h1>
      <p className="mt-4 text-suave">Esse endereço não existe no portfólio.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-md bg-bordo px-5 py-2.5 text-sm font-bold text-papel hover:bg-bordo-escuro"
      >
        Voltar ao início
      </Link>
    </section>
  )
}