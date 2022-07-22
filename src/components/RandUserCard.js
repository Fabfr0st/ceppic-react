import styled from "styled-components";

export default function RandUserCard({ randUser }) {
  const Card = styled.figure`
    div > img {
      border-radius: 50%;
      position: relative;
      margin: 0 25%;
      max-width: 100%;
    }

    ul {
      list-style: none;
      padding-left: 0px;
    }

    .container:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .container {
      padding: 2px 16px;
      margin: 1rem;
      border: 1px black solid;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }
  `;

  return (
    <Card>
      <div className="container">
        <ul>
          <li>
            <div>
              <img
                src={randUser.picture.large}
                alt={randUser.name.last + " " + randUser.name.first}
              />
            </div>
          </li>
          <li>
            Nom: {randUser.name.last} Prénom: {randUser.name.first}
          </li>
          <li>E-mail: {randUser.email}</li>
        </ul>
      </div>
    </Card>
  );
}
