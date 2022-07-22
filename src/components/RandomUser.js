import { useState, useEffect } from "react";
import RandUserCard from "./RandUserCard";

export default function RandomUser() {
  const [randUsers, setRandUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10").then((response) =>
      response.json().then((data) => setRandUsers(data.results))
    );
  }, []);

  return (
    <section className="randomUsers">
      {randUsers.map((randUser) => (
        <RandUserCard key={randUser.id.value} randUser={randUser} />
      ))}
    </section>
  );
}
