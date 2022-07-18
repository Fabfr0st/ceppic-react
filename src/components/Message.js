export default function Message() {
  const Message = (
    <div>
      <h1>*Squeak* Boo says that he was just doing his job.</h1>
    </div>
  );
  const Message2 = (
    <div>
      <h2>Vise les yeux, Boo! Vise les yeux! *Squeak*</h2>
      <p>
        Camaraderie, adventure, and steel on steel. The stuff of legend! Right
        Boo?
      </p>
    </div>
  );

  return <section id="messages">{[Message, Message2]}</section>;
}
