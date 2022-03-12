import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function RepoCard({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div className="p-4 bg-gray-800 rounded my-2">
      <h3 className="mb-2 font-bold text-2xl text-white">
        <a href={html_url}>
          <FaLink className="text-2xl inline-block" /> {repo.name}
        </a>
      </h3>
      <p className="mb-3 text-white text-sm">{description}</p>
      <div>
        <div className="inline-block mr-2 rounded-lg bg-blue-300 text-sm font-thin px-3 text-blue-500">
          <FaEye className="text-l inline-block" />{" "}
          <span className="align-middle">{watchers_count}</span>
        </div>
        <div className="inline-block mr-2 rounded-lg bg-green-300 text-sm font-thin px-3 text-green-600">
          <FaStar className="text-l inline-block" />{" "}
          <span className="align-middle">{stargazers_count}</span>
        </div>
        <div className="inline-block mr-2 rounded-lg bg-red-300 text-sm font-thin px-3 text-red-700">
          <FaInfo className="text-l inline-block" />{" "}
          <span className="align-middle">{open_issues}</span>
        </div>
        <div className="inline-block mr-2 rounded-lg bg-yellow-300 text-sm font-thin px-3 text-yellow-700">
          <FaUtensils className="text-l inline-block" />
          <span className="align-middle">{watchers_count}</span>
          {watchers_count}
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
