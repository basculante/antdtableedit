import React, { useState, useEffect } from "react";
import MyTable from "./Table";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editedUsers, setEditedUsers] = useState([]);

  const setEditedUsersParent = (newValue) => {
    setEditedUsers(newValue);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        setUsers(json);
        setEditedUsers(json);
      });
  }, []);

  return (
    <div>
      <h1>Ant Design Table</h1>
      <MyTable users={users} editedUsers={editedUsers} setEditedUsersParent={setEditedUsersParent}/>
    </div>
  );
};

export default App;
