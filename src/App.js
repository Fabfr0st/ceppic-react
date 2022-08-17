import "./App.css";
import minsc from "./Minsc.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import ListeMessages from "./pages/ListeMessages";

function App() {
  return (
    <div className="App">
      <Header logo={minsc} />
      <Nav />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="listeMessages" element={<ListeMessages />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
