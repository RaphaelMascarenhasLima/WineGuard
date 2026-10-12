import { Link, NavLink } from 'react-router-dom'
import { ROTAS } from '../data/rotas'
import Icone from './Icone'

/** Marca: círculo creme com o símbolo + nome (leva para o Início). */
function Marca() {
  return (
    <Link to="/" aria-label="WineGuard, página inicial" className="flex items-center gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-creme md:size-12">
        <img src="/wineguard-simbolo-compacto.svg" alt="" className="h-6 w-auto md:h-7" />
      </span>
      {/* entre 768 e 1023 px o nome some para os 5 links caberem */}
      <span className="font-titulo text-2xl font-semibold leading-none tracking-tight text-creme md:hidden lg:inline">
        wineguard
      </span>
    </Link>
  )
}

/**
 * Navegação em barra de ponta a ponta, vinho e meio translúcida (único elemento translúcido do site).
 * No computador: links no topo; ao passar o mouse, o item vira uma pílula creme.
 * No celular (< 768 px): os links vão para uma barra fixa embaixo, com ícone e rótulo.
 */
export default function Header() {
  const classeTopo = ({ isActive }) =>
    `inline-flex items-center rounded-full px-4 py-2.5 text-base font-bold transition-colors duration-200 hover:bg-creme hover:text-bordo focus-visible:bg-creme focus-visible:text-bordo ${
      isActive ? 'bg-creme/20 text-creme' : 'text-creme'
    }`
  const classeBase = ({ isActive }) =>
    `flex flex-1 flex-col items-center gap-0.5 rounded-full px-1 py-2 text-center text-[11px] font-bold leading-tight transition-colors ${
      isActive ? 'bg-creme text-bordo' : 'text-creme'
    }`

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-creme/10 bg-bordo/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-4 md:h-20">
          <Marca />

          <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
            {ROTAS.map((rota) => (
              <NavLink key={rota.caminho} to={rota.caminho} end={rota.caminho === '/'} className={classeTopo}>
                {rota.rotulo}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <nav
        aria-label="Atalhos"
        className="fixed inset-x-0 bottom-0 z-40 flex gap-1 border-t border-creme/10 bg-bordo/90 p-1.5 backdrop-blur-md md:hidden"
      >
        {ROTAS.map((rota) => (
          <NavLink key={rota.caminho} to={rota.caminho} end={rota.caminho === '/'} className={classeBase}>
            <Icone nome={rota.icone} />
            {rota.rotulo}
          </NavLink>
        ))}
      </nav>
    </>
  )
}