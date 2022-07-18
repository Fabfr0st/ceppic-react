export default function Voiture() {
  const Voitures = ["Ford", "Audi", "Honda"];
  const Voitures2 = [
    { id: 1, nom: "Ford" },
    { id: 2, nom: "Audi" },
    { id: 3, nom: "Honda" },
  ];

  return (
    <section id="voitures">
      <ul>
        {Voitures.map((voiture) => (
          <li id={voiture} key={voiture}>
            {voiture}
          </li>
        ))}
      </ul>
      <ul>
        {Voitures2.map((voiture) => (
          <li id={voiture.id} key={voiture.id}>
            {voiture.nom}
          </li>
        ))}
      </ul>
    </section>
  );
}
