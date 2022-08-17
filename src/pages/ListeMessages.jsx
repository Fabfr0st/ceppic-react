import dbContact from "../data/dbContact.json";

export default function ListeMessages() {
  return (
    <>
      <h1>Liste des messages</h1>
      <div id="tableauMessages">
        <table>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Message</th>
          </tr>

          {dbContact.contacts.map((contact) => {
            return (
              <tr id={contact.id}>
                <td>{contact.nom}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
