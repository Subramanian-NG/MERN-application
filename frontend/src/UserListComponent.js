export default function UserListComponentFunc({ userList, onClickFunc }) {
  return (
    <div>
      {userList.map((user) => {
        return (
          <button key={user.email} onClick={() => onClickFunc(user)}>
            {user.name}
          </button>
        );
      })}
    </div>
  );
}
