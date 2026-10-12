import { Link } from 'react-router-dom'
import bannerVinhedo from '../assets/img/banner-vinhedo.webp'
import heroAdega from '../assets/img/hero-adega.webp'
import Cartao from '../components/Cartao'
import CartaoAmeaca from '../components/CartaoAmeaca'
import Icone from '../components/Icone'
import SecaoTitulo from '../components/SecaoTitulo'
import { AMEACAS, LINKS, MARCA, PROBLEMA, SOLUCAO } from '../data/conteudo'

// foco visível em creme: sobre foto escura o contorno padrão (bordô) some
const BOTAO_PRINCIPAL =
  'inline-flex items-center gap-2 rounded-md bg-creme px-5 py-3 font-bold text-bordo transition-colors hover:bg-papel focus-visible:outline-creme'
const BOTAO_SECUNDARIO =
  'inline-flex items-center gap-2 rounded-md border border-creme px-5 py-3 font-bold text-creme transition-colors hover:bg-creme/15 focus-visible:outline-creme'

/** Página inicial: problema e solução. */
export default function Inicio() {
  return (
    <div>
      {/* abertura em tela cheia: foto + degradê escuro à esquerda para o texto ficar legível */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-tinta text-papel">
        <img
          src={heroAdega}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-tinta/90 via-tinta/60 to-tinta/10" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-32">
          <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl">{MARCA.slogan}</h1>
          <p className="mt-5 max-w-xl text-lg text-papel/90">{MARCA.resumo}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/como-funciona" className={BOTAO_PRINCIPAL}>
              Ver como funciona
            </Link>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className={BOTAO_SECUNDARIO}>
              Ver o código no GitHub
              <Icone nome="externo" className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* o problema */}
      <section aria-labelledby="titulo-problema" className="bg-creme">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SecaoTitulo id="titulo-problema" titulo={PROBLEMA.titulo} subtitulo={PROBLEMA.texto} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {AMEACAS.map((ameaca) => (
              <CartaoAmeaca key={ameaca.chave} ameaca={ameaca} />
            ))}
          </div>
          <p className="mt-5 text-sm text-suave">{PROBLEMA.fonte}</p>
        </div>
      </section>

      {/* a solução */}
      <section aria-labelledby="titulo-solucao" className="border-y border-linha bg-papel">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SecaoTitulo id="titulo-solucao" titulo={SOLUCAO.titulo} subtitulo={SOLUCAO.texto} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUCAO.partes.map((parte) => (
              <Cartao as="li" key={parte.nome} tom="marca" className="p-5 pl-6">
                <Icone nome={parte.icone} className="size-7 text-bordo" />
                <h3 className="mt-3 text-xl">{parte.nome}</h3>
                <p className="mt-2 text-tinta">{parte.texto}</p>
              </Cartao>
            ))}
          </ul>

          {/* a garantia, em destaque */}
          <div className="mt-8 flex items-start gap-4 rounded-lg bg-bordo p-6 text-papel md:items-center md:p-8">
            <Icone nome="escudo" className="size-8 text-creme" />
            <p className="font-titulo text-xl md:text-2xl">{SOLUCAO.garantia}</p>
          </div>
        </div>
      </section>

      {/* faixa final: foto do vinhedo que escurece até a cor do rodapé */}
      <section aria-label="Conhecer o resto do projeto" className="relative isolate overflow-hidden bg-bordo-escuro text-papel">
        <img src={bannerVinhedo} alt="" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-tinta/50 via-tinta/60 to-bordo-escuro" />
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-24 md:py-32">
          <Link to="/node" className={BOTAO_PRINCIPAL}>
            Conhecer o Node
          </Link>
          <Link to="/dashboard" className={BOTAO_SECUNDARIO}>
            Ver o dashboard
          </Link>
          <Link to="/projeto" className={BOTAO_SECUNDARIO}>
            Ver o status do projeto
          </Link>
        </div>
      </section>
    </div>
  )
}