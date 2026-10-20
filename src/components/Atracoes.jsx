import { cozinheiros } from '../data/evento';
import CartaoAtracao from './CartaoAtracao';

function Atracoes() {
  return (
    <section id="atracoes" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Cozinheiros e Produtores</h2>
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

export default Atracoes
