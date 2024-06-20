import { useRef, useState } from "react";

function App() {
  const [UserList, SetUserList] = useState([]);

  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((Users) => SetUserList(Users));

  return (
      <div>
       {UserList.map((user) => (
        <div key={user.id}>
          <span>name : {user.name}</span>
        </div>
       ))}
      </div>
  );
}

export default App;
