import "./App.css";
import minsc from "./Minsc.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Compteur from "./components/Compteur";
import Message from "./components/Message";
import Calcul from "./components/Calcul";
import Connexion from "./components/Connexion";
import Voiture from "./components/Voiture";

function App() {
  return (
    <div className="App">
      <Header logo={minsc} />
      <main>
        <Message />
        <Calcul />
        <Connexion />
        <Voiture />
        <Compteur increment={1} />
        <Compteur increment={10} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
