import { useState } from "react";

export default function Compteur({ increment, starter, text }) {
  const [count, setCount] = useState(starter);

  function handleIncrement() {
    setCount(count + increment);
  }

  return (
    <section className="compteur">
      <div>
        <p>Vous avez appuyé sur le bouton ci dessous {count} fois</p>
        {count >= 50 ? <p>{text}</p> : <p></p>}
        <button onClick={handleIncrement}>
          Incrémenter {increment} par {increment}
        </button>
      </div>
    </section>
  );
}
