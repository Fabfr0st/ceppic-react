// import "./Header.css"
import styled from "styled-components";

export default function Header({ logo }) {
  const MinscDesc = "Rôdeur le plus connu de Faerûn";

  const Title = styled.h1`
    margin: 1rem;
  `;

  const Logo = styled.img`
    margin: 1rem;
  `;

  const Entete = styled.header`
    background-color: rgba(56, 62, 68, 0.659);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `;

  return (
    <Entete>
      <Logo src={logo} alt={MinscDesc}></Logo>
      <Title>Rôdeur le plus connu de Faerûn</Title>
    </Entete>
  );
}
