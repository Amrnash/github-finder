import { useEffect, useContext } from "react";
import githubContext from "../context/githubContext";
import { FaUsers, FaUserFriends, FaCode, FaHome } from "react-icons/fa";
import Loader from "../components/Loader";
import Stat from "../components/Stat";
import { Link, useParams } from "react-router-dom";
import RepoCard from "../components/RepoCard";
function Profile() {
  const { fetchUserByLogin, fetchReposOfUserByLogin, state } =
    useContext(githubContext);
  const { login } = useParams();
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login: loginName,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = state.user;
  useEffect(() => {
    fetchUserByLogin(login);
    fetchReposOfUserByLogin(login);
  }, []);

  if (state.loading) return <Loader classes="ml-60" />;
  return (
    <>
      <Link to="/" className="btn btn-secondary p-2 inline-block mb-4">
        Back to Home
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="col-span-2 w-96">
          <img src={avatar_url} alt="profile" className="w-full rounded" />
        </div>
        <div className="col-span-4">
          <h2 className="text-white text-2xl font-bold mb-2">
            {name}{" "}
            <span className="inline-block ml-6 rounded-lg bg-blue-400 text-sm font-thin px-3 text-blue-800">
              {hireable}
            </span>{" "}
            <span className="inline-block ml-2 rounded-lg bg-green-400 text-sm font-thin px-3 text-green-800">
              {type}
            </span>
          </h2>
          {bio && <p className="text-white my-6">{bio}</p>}
          <a href={html_url} className="btn btn-secondary">
            VISIT GITHUB PROFILE
          </a>
          <div className="mt-10">
            {location && (
              <Stat
                header="Location"
                data={location}
                classes="inline-block w-1/3"
              />
            )}
            {blog && (
              <Stat header="Website" data={blog} classes="inline-block w-1/3" />
            )}
            {twitter_username && (
              <Stat
                header="Twitter"
                data={twitter_username}
                classes="inline-block w-1/3"
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Stat header="Followers" data={followers} classes="inline-block w-1/4">
          <FaUsers className="text-4xl text-purple-500" />
        </Stat>
        <Stat header="Follwing" data={following} classes="inline-block w-1/4">
          <FaUserFriends className="text-4xl text-purple-500" />
        </Stat>
        <Stat
          header="Public Repos"
          data={public_repos}
          classes="inline-block w-1/4"
        >
          <FaCode className="text-4xl text-purple-500" />
        </Stat>
        <Stat
          header="Public Gists"
          data={public_gists}
          classes="inline-block w-1/4"
        >
          <FaHome className="text-4xl text-purple-500" />
        </Stat>
      </div>
      <div>
        <h2 className="text-white text-4xl my-12">Latest Repos</h2>
        {state.userRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  );
}

export default Profile;
