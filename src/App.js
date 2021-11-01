import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import ListItems from "./components/ListItems";
import { useEffect, useState } from "react";
import axios from "axios";
const initial_Users = [
  {
    id: Math.trunc(Math.random() * 100) + 1,
    title: "User1",
    description: 20,
  },
  {
    id: Math.trunc(Math.random() * 100) + 1,
    title: "User2",
    description: 12,
  },
];
function App() {
  const [user, setUser] = useState();

    useEffect(()=>{
     getApi()
    },[]);

    const getApi=()=>{
      axios.get("http://localhost:8080/todo/api/getAll/todos")
      .then(e=>{
        setUser(e.data);
        console.log(e);
      })
      .catch(e=>{
        console.log(e);
      });

    }
  return (
    <div className="App">
      <Form user={user} setUser={setUser} getApi={getApi}/>
      <ListItems user={user} setUser={setUser} getApi={getApi} />
    </div>
  );
}

export default App;
