import { useState } from 'react';

const listaFaq = [
  {
    id: "faq-1",
    pergunta: "Aceita cartão e Pix?",
    resposta: "Sim, todas as 20 barracas de restaurantes, produtores rurais e cozinheiros do festival aceitam pagamento em cartão de débito, crédito e Pix."
  },
  {
    id: "faq-2",
    pergunta: "Tem opção vegetariana?",
    resposta: "Sim! Pelo menos cinco barracas do festival contam com opções de pratos e receitas deliciosas totalmente sem carne."
  },
  {
    id: "faq-3",
    pergunta: "Posso levar meu cachorro?",
    resposta: "Pode sim! O Festival Sabores da Alta Paulista é pet friendly, desde que o seu cachorro esteja utilizando a coleira durante a permanência no Recinto de Exposições."
  }
];

function Faq() {
  const [abertoId, setAbertoId] = useState(null);

  function toggleFaq(id) {
    setAbertoId(abertoId === id ? null : id);
  }

  return (
    <section
      id="duvidas"
      className="py-20 px-6 bg-fundo border-b border-[rgba(10,17,114,0.12)]"
    >
      <div className="max-w-[1140px] mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-destaque mb-3">
              Informações úteis
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primaria tracking-[-0.02em]">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {listaFaq.map((item) => {
              const isAberta = abertoId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-editorial border border-[rgba(10,17,114,0.12)] overflow-hidden"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isAberta}
                      aria-controls={`resposta-${item.id}`}
                      className="w-full flex justify-between items-center p-5 sm:px-6 text-left text-primaria font-sans font-semibold text-base sm:text-lg hover:bg-fundo/60 transition-colors duration-250 cursor-pointer"
                    >
                      <span>{item.pergunta}</span>
                      <svg
                        className={`w-5 h-5 text-destaque shrink-0 transition-transform duration-250 ${
                          isAberta ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </h3>

                  <div
                    id={`resposta-${item.id}`}
                    hidden={!isAberta}
                    className="px-5 sm:px-6 pb-5 text-texto/90 bg-fundo/40 leading-relaxed border-t border-[rgba(10,17,114,0.08)]"
                  >
                    <p className="pt-4">{item.resposta}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
