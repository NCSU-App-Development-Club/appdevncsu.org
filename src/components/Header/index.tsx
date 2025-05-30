import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="fixed w-dvw top-0 bg-[#1a1a1a] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#main" className="flex items-center gap-4">
            <img src={logo} alt="logo" className="h-8" />
            <div className="text-xl font-bold">NCSU App Dev Club</div>
          </a>
          <nav className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#teams" className="hover:text-gray-300">
              Teams
            </a>
            <a href="#projects" className="hover:text-gray-300">
              Apps
            </a>
            <a
              href="#apply"
              className="bg-white text-black px-3 py-1 rounded hover:bg-gray-300"
            >
              Apply
            </a>
          </nav>
          <a
            href=""
            className="icon md:hidden"
            id="burger"
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </a>
          <nav
            className="space-y-2 shadow-md text-center p-4 m-4 md:hidden flex-col fixed top-16 bg-[#1a1a1a] rounded-2xl flex right-[-8rem] transition-all duration-500"
            id="dropdown"
          >
            <a
              href="#about"
              className="hover:text-gray-300"
              onClick={toggleDropdown}
            >
              About
            </a>
            <a
              href="#teams"
              className="hover:text-gray-300"
              onClick={toggleDropdown}
            >
              Teams
            </a>
            <a
              href="#projects"
              className="hover:text-gray-300"
              onClick={toggleDropdown}
            >
              Apps
            </a>
            <a
              href="#apply"
              className="bg-white text-black px-3 py-1 rounded hover:bg-gray-100"
              onClick={toggleDropdown}
            >
              Apply
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function toggleDropdown(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  if (e.currentTarget.id === "burger") {
    e.preventDefault();
  }
  const dropdown = document.getElementById("dropdown");
  if (!dropdown) return;
  if (dropdown.classList.contains("right-0")) {
    dropdown.classList.remove("right-0");
    dropdown.classList.add("right-[-8rem]");
  } else {
    dropdown.classList.remove("right-[-8rem]");
    dropdown.classList.add("right-0");
  }
}
