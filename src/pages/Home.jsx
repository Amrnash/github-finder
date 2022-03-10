import { useContext, useState } from "react";
import githubContext from "../context/githubContext";
import UserItemsList from "../components/UserItemsList";
import Loader from "../components/Loader";
function Home() {
  const { state, dispatch, fetchUsersByName } = useContext(githubContext);
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUsersByName(text);
  };
  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };
  return (
    <>
      <div className="grid w-full grid-cols-4">
        <form
          className="md:col-span-3 mx-2 col-span-4 lg:col-span-2 mt-2"
          onSubmit={handleSubmit}
        >
          <div className="flex h-12">
            <input
              type="text"
              className="rounded px-2 py-4 w-full h-12 text-lg rounded-r-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="bg-purple-500 rounded rounded-l-none w-24 text-white hover:bg-purple-400 transition-colors"
            >
              Search
            </button>
          </div>
          {state.users && state.users.length > 0 && (
            <button
              className="btn btn-secondary mt-4 w-1/6 transition-colors"
              onClick={handleClear}
            >
              Clear
            </button>
          )}
        </form>
      </div>
      {state.loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          <UserItemsList users={state.users} />
        </div>
      )}
    </>
  );
}

export default Home;
