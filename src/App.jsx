import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Ahmet", email: "ahmet@gmail.com", age: 20 },
    { name: "Zeynep", email: "Zeynep@gmail.com", age: 25 },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  }
  
  return (
    <div className="container my-5">
      <h2 className="text-center">Kullanıcı Paneli</h2>

      <Form addUser={addUser} />

      <List users={users} />
    </div>
  );
};

export default App;
