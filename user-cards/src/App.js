import { useEffect, useState } from 'react';
import './App.css';
import SocialCard from './components/SocialCard';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUsers(userData.results);
      
    })();
  }, []);

  return (
    <div className="App">
      {users.map((user, index) => (
        <SocialCard userData={user} key={index} />
      ))}
    </div>
  );
}

export default App;
