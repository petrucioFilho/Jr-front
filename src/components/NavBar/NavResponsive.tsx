import { Link } from "react-router-dom";
import { useState } from "react";

function NavResponsive() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          <Link to={"/"}>
            <img src="src/assets/LogoJR.png" alt="Logo" className="h-12" />
          </Link>
        </a>

        {/* Menu Hamburguer */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Links da Navbar */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="text-gray-800 hover:text-red-500 block p-4 text-center"
            >
              HOME
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 hover:text-red-500 block p-4 text-center"
            >
              A EMPRESA
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 hover:text-red-500 block p-4 text-center"
            >
              ESTOQUE
            </a>
          </li>
          {/* Dropdown */}
          <li className="relative md:static">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex justify-center md:justify-start items-center w-full text-gray-800 hover:text-red-500 p-4"
            >
              NOSSOS SERVIÇOS <span className="ml-2">▼</span>
            </button>
            {dropdownOpen && (
              <ul className="absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden text-center">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Serviço 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Serviço 2
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Serviço 3
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 hover:text-red-500 block p-4 text-center"
            >
              CONTATO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavResponsive;
