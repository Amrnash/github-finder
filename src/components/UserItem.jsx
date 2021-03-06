import { Link } from "react-router-dom";

function UserItem({ user }) {
  return (
    <>
      <div className="rounded p-4 bg-card mt-4 flex m-1  shadow-lg border-b border-purple-500">
        <div className="w-20">
          <img
            src={user.avatar_url}
            className="w-full rounded-full"
            alt="avatar"
          />
        </div>
        <div className="flex flex-col justify-center ml-6">
          <p className="font-bold text-lg text-white">{user.login}</p>
          <Link
            to={`/users/${user.login}`}
            className="text-gray-400 cursor-pointer hover:text-gray-300 transition-colors"
          >
            Show Profile
          </Link>
        </div>
      </div>
    </>
  );
}

export default UserItem;
