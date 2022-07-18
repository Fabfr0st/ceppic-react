import "./Header.css"

export default function Header({logo}) {
  const minscDesc = "Rôdeur le plus connu de Faerûn";

  return (
    <header>
      <img src={logo} alt={minscDesc}></img>
      <h1>Rôdeur le plus connu de Faerûn</h1>
    </header>
  );
}
