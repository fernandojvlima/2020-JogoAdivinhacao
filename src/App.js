import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //Pela busca binaria, o palpite vai iniciar na metade entre min e max 0-300
  const [palpite, setPalpite] = useState(150);
  const [estado, setEstado] = useState("Entrada");
  const [numPalpites, setNumPalpites] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  //Divide o palpite por 2 e soma-se o min
  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = (palpite - min) / 2 + min;
    setPalpite(proxPalpite);
  };

  //((Soma max + palpite) / 2)) + palpite
  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = (max - palpite) / 2 + palpite;
    setPalpite(proxPalpite);
  };

  const iniciaJogo = () => {
    setEstado("Rodando");
  };

  const fimJogo = () => {
    setEstado("Fim");
  };

  const reiniciar = () => {
    setEstado("Rodando");
    setPalpite(150);
    setNumPalpites(1);
  };

  if (estado === "Entrada") {
    return (
      <div>
        <h2>
          Escolha um número de {min} a {max}
        </h2>
        <button onClick={iniciaJogo}>Inicie o jogo!</button>
      </div>
    );
  }

  if (estado === "Rodando") {
    return (
      <div className="App">
        <h1>O seu palpite é {palpite} ?</h1>
        <button onClick={menor}>Menor</button>
        <button onClick={fimJogo}>Acertou</button>
        <button onClick={maior}>Maior</button>
      </div>
    );
  }

  if (estado === "Fim") {
    return (
      <div>
        <h2>Fim de Jogo</h2>
        <h4>O Jogo Foi finalizado em {numPalpites} palpites !</h4>
        <button onClick={reiniciar}>Play again</button>
      </div>
    );
  }
}
