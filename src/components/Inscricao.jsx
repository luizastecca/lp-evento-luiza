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
      <section id="inscricao" className="py-16 px-4 bg-orange-50 border-t border-orange-100">
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md text-center border border-emerald-200">
          <div className="text-emerald-500 text-5xl mb-4" aria-hidden="true">✓</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Inscrição Confirmada!</h2>
          <p role="status" className="text-gray-700 mt-4">
            Pronto, <strong>{nome}</strong>! Seu passaporte para o tipo <strong>{ingressoSelecionado}</strong> foi enviado para o e-mail: <span className="text-gray-600 block italic mt-1">{email}</span>
          </p>
        </div>
      </section>
    );
  }

  return (
    // Mudamos o fundo para tons claros seguros para garantir contraste 100% aprovado
    <section id="inscricao" className="bg-linear-to-b from-blue-50 to-orange-50 py-20 px-4 border-b border-orange-200">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md border border-orange-100">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Garanta sua vaga nas Aulas-Show</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">

          <div className="flex flex-col gap-1">
            <label htmlFor="campo-nome" className="text-gray-800 font-semibold text-sm">
              Nome Completo
            </label>
            <input
              id="campo-nome"
              type="text"
              required
              autoComplete="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaria"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="campo-email" className="text-gray-800 font-semibold text-sm">
              E-mail
            </label>
            <input
              id="campo-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaria"
              placeholder="seu.email@exemplo.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="campo-ingresso" className="text-gray-800 font-semibold text-sm">
              Tipo de Ingresso
            </label>
            <select
              id="campo-ingresso"
              value={ingresso}
              onChange={(e) => setIngresso(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaria cursor-pointer"
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
            className="inline-block bg-primaria hover:bg-destaque text-white font-bold text-lg px-8 py-4 rounded-lg shadow-md transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaria cursor-pointer"
          >
            Realizar Inscrição
          </button>

        </form>
      </div>
    </section>
  );
}

export default Inscricao;

