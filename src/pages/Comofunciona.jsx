import arquitetura from '../assets/img/arquitetura.png'
import CabecalhoPagina from '../components/CabecalhoPagina'
import Cartao from '../components/Cartao'
import FluxoCamadas from '../components/FluxoCamadas'
import Icone from '../components/Icone'
import SecaoTitulo from '../components/SecaoTitulo'
import { CAMADAS, VINHERIAS } from '../data/conteudo'

// A vinheria de exemplo é a mesma do site do dashboard: 2 adegas e os Nodes dentro.
const ADEGAS = [
  { nome: 'Adega 1', nodes: ['Node wgn001'] },
  { nome: 'Adega 2', nodes: ['Node wgn002', 'Node wgn003'] },
]

/** Como funciona: as cinco camadas, o diagrama e o modelo de várias vinherias. */
export default function ComoFunciona() {
  return (
    <div>
      <CabecalhoPagina titulo="Como funciona" subtitulo="As cinco camadas" />

      {/* as cinco camadas + diagrama */}
      <section aria-labelledby="titulo-camadas" className="bg-creme">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SecaoTitulo id="titulo-camadas" titulo="As cinco camadas" />
          <div className="mt-10">
            <FluxoCamadas camadas={CAMADAS} />
          </div>

          <figure className="mt-14">
            {/* no celular o diagrama rola na horizontal dentro da caixa, sem ser cortado nem encolhido */}
            <div
              className="overflow-x-auto rounded-lg border border-linha bg-papel"
              tabIndex={0}
              role="region"
              aria-label="Diagrama da arquitetura (role para os lados)"
            >
              <img
                src={arquitetura}
                alt="Arquitetura do WineGuard em cinco camadas"
                loading="lazy"
                className="h-auto w-full min-w-[44rem]"
              />
            </div>
            <figcaption className="mt-3 text-sm text-suave">
              Os dados sobem e os comandos descem pelo mesmo caminho.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* várias vinherias */}
      <section aria-labelledby="titulo-vinherias" className="border-y border-linha bg-papel">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SecaoTitulo id="titulo-vinherias" titulo={VINHERIAS.titulo} subtitulo={VINHERIAS.texto} />

          <div className="mt-8 rounded-lg border border-bordo/40 p-4 md:p-5">
            <p className="font-bold text-bordo">Vinheria</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {ADEGAS.map((adega) => (
                <Cartao key={adega.nome} tom="marca" className="p-4 pl-5">
                  <p className="font-bold">{adega.nome}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {adega.nodes.map((node) => (
                      <span
                        key={node}
                        className="numero inline-flex items-center gap-1.5 rounded-full border border-linha px-3 py-1 text-sm"
                      >
                        <Icone nome="chip" className="size-4 text-bordo" />
                        {node}
                      </span>
                    ))}
                  </div>
                </Cartao>
              ))}
            </div>
          </div>

          {/* suspensão */}
          <Cartao tom="atencao" className="mt-6 flex items-start gap-3 p-5 pl-6">
            <Icone nome="escudo" className="mt-0.5 size-6 text-bordo" />
            <p className="max-w-3xl text-tinta">{VINHERIAS.suspensao}</p>
          </Cartao>
        </div>
      </section>
    </div>
  )
}