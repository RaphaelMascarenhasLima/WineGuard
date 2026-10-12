import { Link } from 'react-router-dom'
import { CREDITOS, EQUIPE, LINKS, MARCA } from '../data/conteudo'
import { ROTAS } from '../data/rotas'

const LINK = 'rounded text-creme underline-offset-4 hover:underline'
const TITULO = 'text-sm text-creme/70'

/**
 * Rodapé: faixa bordô-escuro de ponta a ponta, na mesma coluna do resto do site.
 * Linha 1: quem fez. Linha 2: nome e frase, telas e projeto. Linha 3: avisos.
 */
export default function Footer() {
  return (
    <footer className="bg-bordo-escuro text-creme">
      <div className="mx-auto max-w-7xl px-4">
        <section
          aria-labelledby="titulo-quem-fez"
          className="flex flex-col gap-3 border-b border-creme/15 py-7 md:flex-row md:items-baseline md:gap-10"
        >
          <h2 id="titulo-quem-fez" className="shrink-0 text-2xl">
            Quem fez
          </h2>
          <ul className="flex flex-wrap gap-x-8 gap-y-1 font-titulo text-lg">
            {EQUIPE.map((nome) => (
              <li key={nome}>{nome}</li>
            ))}
          </ul>
        </section>

        <div className="grid gap-8 py-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-titulo text-xl font-semibold">wineguard</p>
            <p className="mt-2 max-w-xs text-sm text-creme/80">{MARCA.slogan}</p>
          </div>

          <nav aria-label="Rodapé">
            <p className={TITULO}>Telas</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {ROTAS.map((r) => (
                <li key={r.caminho}>
                  <Link to={r.caminho} className={LINK}>
                    {r.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={TITULO}>Projeto</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className={LINK} href={LINKS.github} target="_blank" rel="noreferrer">
                  Código no GitHub
                </a>
              </li>
              <li>
                <a className={LINK} href={LINKS.wokwi} target="_blank" rel="noreferrer">
                  Simulação no Wokwi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* pb-24 no celular: deixa espaço para a barra fixa de baixo */}
        <div className="space-y-1 border-t border-creme/15 py-5 pb-24 text-xs text-creme/70 md:pb-5">
          {CREDITOS.map((texto) => (
            <p key={texto}>{texto}</p>
          ))}
          <p>
            © 2026 {MARCA.grupo}. {MARCA.curso}.
          </p>
        </div>
      </div>
    </footer>
  )
}