import { evento } from '../data/evento';
import BotaoLembrete from './BotaoLembrete';

function Hero() {
  return (
    <section
      id="hero"
      className="bg-editorial-paper py-20 md:py-28 px-6 border-b border-[rgba(10,17,114,0.12)]"
    >
      <div className="max-w-[1140px] mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-destaque mb-5">
          Edição Gastronômica · Alta Paulista
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-primaria tracking-[-0.02em] leading-[1.08] mb-6 max-w-4xl mx-auto">
          {evento.nome}
        </h1>

        <p className="text-lg sm:text-xl text-texto/90 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          {evento.slogan}
        </p>

        <div className="max-w-3xl mx-auto mb-10 bg-white/95 border border-[rgba(10,17,114,0.12)] rounded-xl shadow-editorial overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(10,17,114,0.12)] text-left">
            <div className="p-5 sm:p-6 flex items-start gap-3.5">
              <svg
                className="w-5 h-5 text-destaque shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-texto/65 mb-1">
                  Data
                </span>
                <p className="text-primaria font-semibold text-sm sm:text-base leading-snug">
                  {evento.data}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex items-start gap-3.5">
              <svg
                className="w-5 h-5 text-destaque shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15.5 14" />
              </svg>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-texto/65 mb-1">
                  Horário
                </span>
                <p className="text-primaria font-semibold text-sm sm:text-base leading-snug">
                  {evento.horario}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex items-start gap-3.5">
              <svg
                className="w-5 h-5 text-destaque shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-texto/65 mb-1">
                  Local
                </span>
                <p className="text-primaria font-semibold text-sm sm:text-base leading-snug">
                  {evento.local}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4">
          <a
            href="#inscricao"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-destaque hover:bg-destaque-hover text-white font-semibold text-base px-8 py-4 rounded-lg shadow-editorial transition-all duration-250 hover:-translate-y-0.5 focus-visible:outline-yellow-300"
          >
            Garantir Meu Ingresso
          </a>

          <BotaoLembrete />
        </div>
      </div>
    </section>
  );
}

export default Hero;
