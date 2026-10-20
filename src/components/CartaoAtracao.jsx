function CartaoAtracao({ 
    nome, especialidade, descricao 
}) {
  return (
    <article className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-destaque bg-blue-50 px-2 py-1 rounded">
          {especialidade}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">{nome}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{descricao}</p>
      </div>
    </article>
  );
}

export default CartaoAtracao