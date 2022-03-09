import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-6xl font-bold text-white mb-2">Oops!</h2>
      <p className="text-2xl font-bold text-gray-300">404 Page not found</p>
      <Link
        to="/"
        className="px-2 py-4 rounded bg-purple-600 text-white hover:bg-purple-500 mt-3"
      >
        <FaHome className="inline-block text-2xl" />{" "}
        <span className="align-middle">Back to home</span>
      </Link>
    </div>
  );
}

export default NotFound;
