function CartaoAtracao({ nome, especialidade, descricao }) {
  return (
    <article className="bg-fundo p-7 rounded-xl shadow-editorial border border-[rgba(10,17,114,0.12)] flex flex-col justify-between transition-transform duration-250 hover:-translate-y-0.5">
      <div>
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-destaque bg-destaque/10 px-2.5 py-1 rounded">
          {especialidade}
        </span>
        <h3 className="font-serif text-xl font-bold text-primaria tracking-[-0.02em] mt-4 mb-2">
          {nome}
        </h3>
        <p className="text-texto/90 text-sm leading-relaxed">{descricao}</p>
      </div>
    </article>
  );
}

export default CartaoAtracao;
