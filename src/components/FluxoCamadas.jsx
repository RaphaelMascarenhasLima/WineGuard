import Icone from './Icone'

/**
 * As 5 camadas em sequência: 5 colunas ligadas por uma linha no computador,
 * uma lista vertical no celular. Recebe o array CAMADAS de conteudo.js.
 */
export default function FluxoCamadas({ camadas }) {
  return (
    <ol className="grid gap-0 md:grid-cols-5 md:gap-6">
      {camadas.map((camada, i) => (
        <li key={camada.nome} className="relative flex gap-4 pb-8 last:pb-0 md:block md:pb-0">
          <span className="relative inline-grid size-14 shrink-0 place-items-center rounded-xl bg-bordo text-creme">
            <Icone nome={camada.icone} className="size-7" />
            <span className="numero absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-papel text-xs font-bold text-bordo ring-2 ring-bordo">
              {i + 1}
            </span>
          </span>

          {/* linha que liga uma camada à próxima: horizontal no computador, vertical no celular */}
          {i < camadas.length - 1 && (
            <>
              <span aria-hidden="true" className="absolute -right-6 left-16 top-7 hidden h-0.5 bg-bordo/25 md:block" />
              <span aria-hidden="true" className="absolute bottom-0 left-7 top-16 -ml-px w-0.5 bg-bordo/25 md:hidden" />
            </>
          )}

          <div className="md:mt-5">
            <h3 className="text-xl">{camada.nome}</h3>
            <p className="mt-1 text-sm text-tinta">{camada.texto}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}