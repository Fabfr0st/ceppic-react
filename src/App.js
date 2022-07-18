import "./App.css";
import minsc from "./Minsc.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const message = <h1>*Squeak* Boo says that he was just doing his job.</h1>;
  const message2 = (
    <div>
      <h2>Vise les yeux, Boo! Vise les yeux! *Squeak*</h2>
      <p>
        Camaraderie, adventure, and steel on steel. The stuff of legend! Right
        Boo?
      </p>
    </div>
  );
  const calcul = <h2>Cette opération 2*6 vaut {2 * 6}</h2>;
  const loggedIn = false;
  const voitures = ["Ford", "Audi", "Honda"];
  const voitures2 = [
    { id: 1, nom: "Ford" },
    { id: 2, nom: "Audi" },
    { id: 3, nom: "Honda" },
  ];

  return (
    <div className="App">
      <Header logo={minsc} />
      <main>
        {message}
        {message2}
        {calcul}
        {loggedIn && <p>Vous êtes connecté !</p>}
        {loggedIn ? (
          <p>Vous êtes connecté !</p>
        ) : (
          <p>Vous n'êtes pas connecté !</p>
        )}
        <ul>
          {voitures.map((voiture) => (
            <li id={voiture} key={voiture}>
              {voiture}
            </li>
          ))}
        </ul>
        <ul>
          {voitures2.map((voiture) => (
            <li id={voiture.id} key={voiture.id}>
              {voiture.nom}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
