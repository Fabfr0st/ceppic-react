export default function Connexion() {
  const LoggedIn = false;

  return (
    <section id="connexion">
      {LoggedIn ? (
        <p> Vous êtes connecté!</p>
      ) : (
        <p>Vous devez réunir votre groupe avant d'aller plus loin.</p>
      )}
    </section>
  );
}
