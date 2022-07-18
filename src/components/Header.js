import minsc from "./Minsc.jpg";
import "./Header.css"

export default function Header() {
  const minscDesc = "Rôdeur le plus connu de Faerûn";

  return (
    <header>
      <img src={minsc} alt={minscDesc}></img>
      <h1>Rôdeur le plus connu de Faerûn</h1>
    </header>
  );
}
