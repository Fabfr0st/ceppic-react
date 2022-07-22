import Replique from "./Replique.js";

export default function Citations() {
  return (
    <section id="articles">
      <Replique
        nom="Minsc & Boo"
        citation="C’est en se comportant comme un crétin qu’on le devient, ma petite.
            Ainsi parle Boo."
        portrait="./assets/img/Minsc.jpg"
      />
      <Replique
        nom="Imoen"
        citation="Hé ! C'est moi, Imoën, c'est bon de vous revoir !"
        portrait="./assets/img/Imoen.webp"
      />
      <Replique
        nom="Jaheira"
        citation="Serviteur de Dame Nature attend!"
        portrait="./assets/img/Jaheira.webp"
      />
      <Replique
        nom="Khalid"
        citation="Si j'échoue la première fois... Ma femme ne le me fera jamais oublier."
        portrait="./assets/img/Khalid.webp"
      />
      <Replique
        nom="Xzar"
        citation="(En hurlant) Montaron, vous êtes si exaspérant ! (Plus calmement), cela nuit à mon équilibre."
        portrait="./assets/img/Xzar.webp"
      />
      <Replique
        nom="Montaron"
        citation="Ne dormez que d'un œil, tyran!"
        portrait="./assets/img/Montaron.png"
      />
    </section>
  );
}
