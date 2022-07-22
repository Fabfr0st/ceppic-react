import "./App.css";
import minsc from "./Minsc.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header logo={minsc} />
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
