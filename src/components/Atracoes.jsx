import { cozinheiros } from '../data/evento';
import CartaoAtracao from './CartaoAtracao';

function Atracoes() {
  return (
    <section
      id="atracoes"
      className="py-20 px-6 bg-white border-b border-[rgba(10,17,114,0.08)]"
    >
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-destaque mb-3">
            Convidados
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primaria tracking-[-0.02em]">
            Cozinheiros e Produtores
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cozinheiros.map((produtor) => (
            <CartaoAtracao
              key={produtor.nome}
              nome={produtor.nome}
              especialidade={produtor.especialidade}
              descricao={produtor.descricao}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Atracoes;
