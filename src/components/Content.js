import "./Content.css";
import Compteur from "./Compteur";
import Message from "./Message";
import Calcul from "./Calcul";
import Connexion from "./Connexion";
import Voiture from "./Voiture";
import Citation from "./Citations";

export default function Content() {
  return (
    <section id="content">
      <Message />
      <Calcul />
      <Connexion />
      <Voiture />
      <Compteur
        increment={1}
        starter={0}
        text={'"Prêt à l\'attaque, armure et épée en place."'}
      />
      <Compteur
        increment={10}
        starter={7}
        text={
          "\"What? Boo is outraged! See his fury! It's small, so look close. Trust me, it's there.\""
        }
      />
      <Citation />
    </section>
  );
}
