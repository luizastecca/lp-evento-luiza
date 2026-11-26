import { evento } from '../data/evento';

function Sobre() {
  return (
    <section
      id="sobre"
      className="py-20 px-6 bg-white border-b border-[rgba(10,17,114,0.08)]"
    >
      <div className="max-w-[1140px] mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-destaque mb-3">
          Sobre o festival
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primaria tracking-[-0.02em] mb-6">
          O Evento
        </h2>
        <p className="text-lg text-texto leading-relaxed max-w-3xl mx-auto mb-14">
          {evento.sobre}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {evento.numeros.map((item) => (
            <div
              key={item.legenda}
              className="p-8 bg-fundo rounded-xl border border-[rgba(10,17,114,0.12)] shadow-editorial transition-transform duration-250 hover:-translate-y-0.5"
            >
              <span className="block font-serif text-5xl md:text-6xl font-bold text-destaque tracking-[-0.02em] mb-2">
                {item.quantidade}
              </span>
              <span className="text-xs uppercase tracking-[0.14em] text-primaria/80 font-semibold">
                {item.legenda}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre;
