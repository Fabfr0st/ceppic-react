import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import minsc from "../Minsc.jpg";
import "../App.css";

export default function Layout() {
  return (
    <div className="App">
      <Header logo={minsc} />
      <Nav />
      <Footer />
    </div>
  );
}
