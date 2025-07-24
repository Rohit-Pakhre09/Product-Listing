import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-500 p-5 fixed top-0 w-full shadow z-50">
      <section className="container mx-auto flex items-center justify-between">
        <section>
          <Link to="/">
            <p className="font-bold text-white text-[25px] sm:text-md md:text-2xl lg:text-3xl cursor-pointer">
              Urban Cart
            </p>
          </Link>
        </section>

        {/* Desktop Nav Link */}
        <nav className="invisible hidden md:visible md:block">
          <ul className="flex justify-center items-center gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-medium px-4 py-2 rounded-lg md:text-md lg:text-md transition-all duration-300 ease-in-out ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "bg-transparent text-white hover:bg-blue-400"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-bold">
              <NavLink
                className={({ isActive }) =>
                  `font-medium px-4 py-2 rounded-lg md:text-md lg:text-md transition-all duration-300 ease-in-out ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "bg-transparent text-white hover:bg-blue-400"
                  }`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="text-bold">
              <NavLink
                className={({ isActive }) =>
                  `font-medium px-4 py-2 rounded-lg md:text-md lg:text-md transition-all duration-300 ease-in-out ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "bg-transparent text-white hover:bg-blue-400"
                  }`
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="text-bold">
              <NavLink
                className={({ isActive }) =>
                  `font-medium px-4 py-2 rounded-lg md:text-md lg:text-md transition-all duration-300 ease-in-out ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "bg-transparent text-white hover:bg-blue-400"
                  }`
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
