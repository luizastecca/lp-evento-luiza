import { programacao } from '../data/evento';

function Programacao() {
  return (
    <section
      id="programacao"
      className="py-20 px-6 bg-fundo border-b border-[rgba(10,17,114,0.12)]"
    >
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-destaque mb-3">
            Agenda
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primaria tracking-[-0.02em]">
            Programação Completa
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-editorial overflow-hidden border border-[rgba(10,17,114,0.12)]">
          <div className="divide-y divide-[rgba(10,17,114,0.10)]">
            {programacao.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:px-8 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 hover:bg-fundo/70 transition-colors duration-250"
              >
                <span className="bg-primaria text-white font-semibold px-3 py-1 rounded text-xs uppercase tracking-wider w-14 text-center shrink-0">
                  {item.dia}
                </span>
                <span className="text-destaque font-semibold tabular-nums w-16 text-sm sm:text-base shrink-0">
                  {item.horario}
                </span>
                <p className="text-texto font-medium flex-1 text-base">
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

export default Programacao;
