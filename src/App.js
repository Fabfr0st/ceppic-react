import "./App.css";
import minsc from "./Minsc.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Compteur from "./components/Compteur";

function App() {
  
  

  const Message = <h1>*Squeak* Boo says that he was just doing his job.</h1>;
  const Message2 = (
    <div>
      <h2>Vise les yeux, Boo! Vise les yeux! *Squeak*</h2>
      <p>
        Camaraderie, adventure, and steel on steel. The stuff of legend! Right
        Boo?
      </p>
    </div>
  );
  const Calcul = <h2>Cette opération 2*6 vaut {2 * 6}</h2>;
  const LoggedIn = false;
  const Voitures = ["Ford", "Audi", "Honda"];
  const Voitures2 = [
    { id: 1, nom: "Ford" },
    { id: 2, nom: "Audi" },
    { id: 3, nom: "Honda" },
  ];

  return (
    <div className="App">
      <Header logo={minsc} />
      <main>
        {Message}
        {Message2}
        {Calcul}
        {LoggedIn && <p>Vous êtes connecté !</p>}
        {LoggedIn ? (
          <p>Vous êtes connecté !</p>
        ) : (
          <p>Vous n'êtes pas connecté !</p>
        )}
        <ul>
          {Voitures.map((voiture) => (
            <li id={voiture} key={voiture}>
              {voiture}
            </li>
          ))}
        </ul>
        <ul>
          {Voitures2.map((voiture) => (
            <li id={voiture.id} key={voiture.id}>
              {voiture.nom}
            </li>
          ))}
        </ul>
      </main>
      <Compteur />
      <Footer />
    </div>
  );
}

export default App;
