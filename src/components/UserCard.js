import styled from "styled-components";

export default function UserCard({ utilisateur }) {
  const Card = styled.div`
    div {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }

    ul {
      list-style: none;
    }

    div:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .container {
      padding: 2px 16px;
      margin: 1rem;
    }
  `;

  return (
    <Card>
      <div className="container">
        <ul>
          <li>{utilisateur.nom}</li>
          <li>{utilisateur.prenom}</li>
          <li>{utilisateur.telephone}</li>
          <li>{utilisateur.email}</li>
          <li>{utilisateur.profession}</li>
        </ul>
      </div>
    </Card>
  );
}
