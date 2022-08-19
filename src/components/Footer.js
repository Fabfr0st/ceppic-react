import "./Footer.css";

export default function Footer() {
  const CurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer>
        <p>Boo Hamster géant de l'espace miniature &copy; - {CurrentYear()}</p>
      </footer>
    </>
  );
}
