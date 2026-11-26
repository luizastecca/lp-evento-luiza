import { useEffect, useRef } from "react";

const dados = [
  // Troque pelos 3 itens do seu evento (ex.: tipos de ingresso, pratos mais votados, lotes...)
  { rotulo: "Entrada", valor: 320 },
  { rotulo: "Aula-show", valor: 145 },
  { rotulo: "Passaporte", valor: 500 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maior = Math.max(...dados.map((d) => d.valor));

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220; // a maior barra tem 220px
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior

      // 1. escolha a cor da barra (azul marinho do seu evento)
      ctx.fillStyle = "#0A1172";

      // 2. desenhe a barra com fillRect, começando em x = 110
      ctx.fillRect(110, y, largura, 30);

      // 3. troque a cor para escuro e escreva o rótulo em x = 10
      ctx.fillStyle = "#2D3142";
      ctx.font = "600 14px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(item.rotulo, 10, y + 20);

      // 4. escreva o valor logo depois do fim da barra
      ctx.fillText(item.valor, 110 + largura + 8, y + 20);
    });
  }, []);

  return (
    <section className="py-20 px-6 bg-white border-b border-[rgba(10,17,114,0.08)]">
      <div className="max-w-[1140px] mx-auto">
        <div className="max-w-2xl mx-auto bg-fundo p-8 rounded-xl border border-[rgba(10,17,114,0.12)] shadow-editorial">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-destaque mb-2">
            Panorama
          </p>
          <h2 className="font-serif text-3xl font-bold text-primaria tracking-[-0.02em]">
            Título do gráfico
          </h2>
          <canvas
            ref={canvasRef}
            width={380}
            height={170}
            role="img"
            aria-label="Gráfico de barras mostrando Entrada com 320, Aula-show com 145 e Passaporte com 500"
            className="mt-6 max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Grafico;
