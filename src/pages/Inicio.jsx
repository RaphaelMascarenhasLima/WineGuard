      {/* faixa final: foto do vinhedo que escurece até a cor do rodapé */}
      <section aria-label="Conhecer o resto do projeto" className="relative isolate overflow-hidden bg-bordo-escuro text-papel">
        <img src={bannerVinhedo} alt="" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-tinta/50 via-tinta/60 to-bordo-escuro" />
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-24 md:py-32">
          <Link to="/como-funciona" className={BOTAO_PRINCIPAL}>
            Ver como funciona
          </Link>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className={BOTAO_SECUNDARIO}>
            Ver o código no GitHub
            <Icone nome="externo" className="size-4" />
          </a>
        </div>
      </section>