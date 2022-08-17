import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [nom, setNom] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contacts = { nom, email, message };
    // console.log(contacts);
    axios
      .post("http://localhost:4517/contacts", contacts)
      .then((reponse) => {
        console.log(reponse);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (submitted) {
    return (
      <>
        <p>Votre message à bien été transmis.</p>
      </>
    );
  }

  return (
    <>
      <h1>Formulaire de Contact</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="nom"
            placeholder="un nom"
            onChange={(event) => setNom(event.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="un email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            type="text"
            name="message"
            placeholder="un message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Envoyer le message</button>
        </div>
      </form>
    </>
  );
}
