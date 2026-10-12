import imgLuz from '../assets/img/ameaca-luz.webp'
import imgTemperatura from '../assets/img/ameaca-temperatura.webp'
import imgUmidade from '../assets/img/ameaca-umidade.webp'
import Icone from './Icone'

// conteudo.js guarda só o nome do arquivo; aqui ele vira a imagem importada (o Vite otimiza o caminho).
const IMAGENS = {
  'ameaca-temperatura.webp': imgTemperatura,
  'ameaca-umidade.webp': imgUmidade,
  'ameaca-luz.webp': imgLuz,
}

// Classes escritas por inteiro para o Tailwind enxergá-las (não dá para montar "text-" + cor).
const CORES = { temp: 'text-temp', umid: 'text-umid', luz: 'text-luz' }

/** Cartão de foto: foto em cima e texto embaixo; o título leva o ícone na cor da variável. */
export default function CartaoAmeaca({ ameaca }) {
  const { rotulo, icone, cor, imagem, texto } = ameaca
  return (
    <article className="overflow-hidden rounded-lg border border-linha bg-papel">
      <img src={IMAGENS[imagem]} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
      <div className="p-5">
        <h3 className={`flex items-center gap-2 text-xl ${CORES[cor]}`}>
          <Icone nome={icone} className="size-6" />
          {rotulo}
        </h3>
        <p className="mt-2 text-tinta">{texto}</p>
      </div>
    </article>
  )
}