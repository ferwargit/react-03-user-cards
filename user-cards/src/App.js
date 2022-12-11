import { useEffect, useState } from "react";
import "./App.css";
import SocialCard from "./components/SocialCard";

function App() {
  const [users, setUsers] = useState([]);
  // For the search box
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=32");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

  const filterCards = (event) => {
    // console.log(event.target.value);
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter((user) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(value)
    );
    setUsers(filteredUsers);
  };

  return (
    <div className="App">
      <h1>Social Cards</h1>
      <input
        className="search-box"
        type="text"
        placeholder="Search..."
        onInput={filterCards}
      />
      <div className="cards-container">
        {users.map((user, index) => (
          <SocialCard userData={user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
