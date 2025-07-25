import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  if (open) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

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
                      ? "bg-blue-600 text-white shadow-sm shadow-white"
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
                      ? "bg-blue-600 text-white shadow-sm shadow-white"
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
                      ? "bg-blue-600 text-white shadow-sm shadow-white"
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
                      ? "bg-blue-600 text-white shadow-sm shadow-white"
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

        {/* Mobile Nav Link */}
        <section className="block visible md:hidden md:invisivle cursor-pointer">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-9"
              onClick={() => setOpen(!open)}
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-9"
              onClick={() => setOpen(!open)}
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          )}

          <div
            className={`fixed top-0 left-0 z-50 min-h-screen w-75 bg-white shadow-2xl p-5 
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div>
              <p className="font-bold text-3xl">
                Urban <span className="text-blue-500">Cart</span>
              </p>
            </div>
            <hr className="mt-5" />

            {/* Main Content */}
            <div className="flex flex-col justify-between h-[85vh] p-5 relative">
              {/* Navigation */}
              <nav>
                <ul className="space-y-4 text-lg">
                  <li>
                    <Link to="/" onClick={() => setOpen(!open)}>Home</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/about" onClick={() => setOpen(!open)}>About</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/products" onClick={() => setOpen(!open)}>Products</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/login" onClick={() => setOpen(!open)}>Login</Link>
                  </li>
                </ul>
              </nav>

              {/* Footer / Copyright */}
              <div className="text-sm text-gray-400 text-center absolute bottom-1 ">
                © {new Date().getFullYear()} Urban Cart. All rights reserved.
              </div>
            </div>
          </div>
        </section>
      </section>
    </header>
  );
};

export default Navbar;
