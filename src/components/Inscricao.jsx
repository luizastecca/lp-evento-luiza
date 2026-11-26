import { useState } from 'react';
import { tiposIngressos } from '../data/evento';

function Inscricao() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [ingresso, setIngresso] = useState('entrada');
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  const ingressoSelecionado = tiposIngressos.find(i => i.valor === ingresso)?.texto || ingresso;

  if (enviado) {
    return (
      <section
        id="inscricao"
        className="py-20 px-6 bg-fundo border-b border-[rgba(10,17,114,0.12)]"
      >
        <div className="max-w-[1140px] mx-auto">
          <div className="max-w-lg mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-editorial text-center border border-[rgba(10,17,114,0.12)]">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-5" aria-hidden="true">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primaria tracking-[-0.02em] mb-3">
              Inscrição Confirmada!
            </h2>
            <p role="status" className="text-texto mt-4 leading-relaxed">
              Pronto, <strong className="text-primaria">{nome}</strong>! Seu passaporte para o tipo <strong className="text-primaria">{ingressoSelecionado}</strong> foi enviado para o e-mail: <span className="text-texto/75 block italic mt-1">{email}</span>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="inscricao"
      className="py-20 px-6 bg-fundo border-b border-[rgba(10,17,114,0.12)]"
    >
      <div className="max-w-[1140px] mx-auto">
        <div className="max-w-lg mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-editorial border border-[rgba(10,17,114,0.12)]">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-destaque mb-2">
              Inscrições
            </p>
            <h2 className="font-serif text-3xl font-bold text-primaria tracking-[-0.02em]">
              Garanta sua vaga nas Aulas-Show
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="campo-nome" className="text-primaria font-semibold text-sm">
                Nome Completo
              </label>
              <input
                id="campo-nome"
                type="text"
                required
                autoComplete="name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="p-3.5 border border-[rgba(10,17,114,0.2)] rounded-lg bg-fundo/40 text-texto transition-colors duration-250 focus:border-primaria"
                placeholder="Digite seu nome"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="campo-email" className="text-primaria font-semibold text-sm">
                E-mail
              </label>
              <input
                id="campo-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3.5 border border-[rgba(10,17,114,0.2)] rounded-lg bg-fundo/40 text-texto transition-colors duration-250 focus:border-primaria"
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="campo-ingresso" className="text-primaria font-semibold text-sm">
                Tipo de Ingresso
              </label>
              <select
                id="campo-ingresso"
                value={ingresso}
                onChange={(e) => setIngresso(e.target.value)}
                className="p-3.5 border border-[rgba(10,17,114,0.2)] rounded-lg bg-fundo/40 text-texto transition-colors duration-250 focus:border-primaria cursor-pointer"
              >
                {tiposIngressos.map((opc) => (
                  <option key={opc.valor} value={opc.valor}>
                    {opc.texto}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center bg-destaque hover:bg-destaque-hover text-white font-semibold text-base px-8 py-4 rounded-lg shadow-editorial transition-all duration-250 hover:-translate-y-0.5 focus-visible:outline-yellow-300 cursor-pointer"
            >
              Realizar Inscrição
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Inscricao;
