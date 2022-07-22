import "./Content.css";
import Compteur from "./Compteur";
import Message from "./Message";
import Calcul from "./Calcul";
import Connexion from "./Connexion";
import Voiture from "./Voiture";

export default function Content() {
  return (
    <section id="content">
      <Message />
      <Calcul />
      <Connexion />
      <Voiture />
      <Compteur increment={1} />
      <Compteur increment={10} />
    </section>
  );
}
