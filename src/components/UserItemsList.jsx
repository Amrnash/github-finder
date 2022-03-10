import UserItem from "./UserItem";

function UserItemsList({ users }) {
  return (
    <>
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </>
  );
}

export default UserItemsList;
