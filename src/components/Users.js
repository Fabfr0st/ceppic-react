import { userList } from "../data/data.js";
import UserCard from "./UserCard.js";

export default function Users() {
  return (
    <section id="utilisateurs">
          {userList.map((utilisateur) => (
              <UserCard key={utilisateur.userId} utilisateur={utilisateur} />
      ))}
    </section>
  );
}
