import "./Replique.css";
import styled from "styled-components";

export default function Replique({ portrait, citation, nom }) {
  const Portrait = styled.div`
    className="blockquote-author-image";
    --image: url(${portrait});
  `;

  return (
    <div>
      <article className="article">
        <blockquote>
          <p>{citation}</p>
          <cite>{nom}</cite>
          <Portrait className="blockquote-author-image"></Portrait>
        </blockquote>
      </article>
    </div>
  );
}
