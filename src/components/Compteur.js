import { useState } from "react";

export default function Compteur({ increment }) {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + increment)
  }

  return (
    <section className="compteur">
      <div>
        <p>Vous avez appuyé sur le bouton ci dessous {count} fois</p>
        {count >= 50 ? (
          <p>Ah oui quand même, Minsc est impressioné !</p>
        ) : (
          <p></p>
        )}
        <button onClick={handleIncrement}>Incrémenter</button>
      </div>
    </section>
  );
}
