import { useEffect, useRef, useState } from "react";

function App() {
  const [UserList, SetUserList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((Users) => SetUserList(Users));
  },[UserList]);

  return (
    <div className="flex flex-col gap-x-3 gap-y-4">
      {UserList.map((user) => (
        <div className="bg-[#bcfbff] p-4 rounded-md flex flex-col gap-y-1 w-max" key={user.id}>
          <span>name : {user.name}</span>
          <span>UserName : {user.username}</span>
          <span>Email Address : {user.email}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
