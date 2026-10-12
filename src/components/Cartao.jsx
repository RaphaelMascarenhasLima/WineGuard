const TONS = {
  ok: 'before:bg-ok',
  alerta: 'before:bg-alerta',
  atencao: 'before:bg-atencao',
  neutro: 'before:bg-suave/40',
  marca: 'before:bg-bordo',
}

export default function Cartao({ as: Tag = 'div', tom = 'neutro', className = '', children, ...resto }) {
  return (
    <Tag
      className={`relative overflow-hidden rounded-lg border border-linha bg-papel before:absolute before:inset-y-0 before:left-0 before:w-1 ${TONS[tom] ?? TONS.neutro} ${className}`}
      {...resto}
    >
      {children}
    </Tag>
  )
}