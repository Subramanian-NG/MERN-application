import { useState } from "react";
import UserListComp from "./UserListComponent";
import ChatComp from "./ChatComponent";
export default function ParentComp() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  return (
    <div>
      <UserListComp
        userList={users}
        onClickFunc={(clickedUser) => setSelectedUser(clickedUser)}
      />
      <ChatComp key={selectedUser.email} selectedUserData={selectedUser} />
    </div>
  );

  // function onSelectUserFunc(clickedUser) {
  //   console.log("selected user name--", clickedUser.name);
  //   setSelectedUser(clickedUser);
  // }
}

const users = [
  { name: "user1", email: "user1@gmail.com" },
  { name: "user2", email: "user2@gmail.com" },
  { name: "user3", email: "user3@gmail.com" },
];
