import { programacao } from '../data/evento';

function Programacao() {
  return (
<section id="programacao" className="bg-linear-to-b from-[#eff6ff] to-[#dc2626]/20 py-20 px-4 text-center border-b border-orange-200">      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Programação Completa</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-orange-100">
          <div className="divide-y divide-gray-100">
            {programacao.map((item) => (
              <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                <span className="bg-primaria/10 text-destaque font-bold px-3 py-1 rounded text-sm w-16 text-center">
                  {item.dia}
                </span>
                <span className="text-gray-500 font-mono font-semibold w-16">
                  {item.horario}
                </span>
                <p className="text-gray-800 font-medium flex-1">
                  {item.atividade}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programacao
