import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="bg-gray-800 z-10">
      <div className="container mx-auto flex justify-between py-4 px-2 items-center">
        <Link to="/" className="text-white text-4xl">
          <FaGithub className="inline-block" />{" "}
          <span className="font-bold text-xl">Github Finder</span>
        </Link>
        <div className="text-white">
          <Link to="/" className="mr-4 hover:text-gray-200">
            Home
          </Link>
          <Link to="about" className="hover:text-gray-200">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
