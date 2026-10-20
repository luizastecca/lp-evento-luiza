import { evento } from '../data/evento';

function Sobre() {
  return (
    <section id="sobre" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">O Evento</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          {evento.sobre}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {evento.numeros.map((item) => (
            <div key={item.legenda} className="p-6 bg-fundo rounded-xl border border-orange-100 shadow-sm">
              <span className="block text-5xl font-black  text-destaque mb-2">{item.quantidade}</span>
              <span className="text-gray-700 font-medium">{item.legenda}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre
