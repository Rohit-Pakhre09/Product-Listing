import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../contexts/AppProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(false);

  // Context
  const { light, toggleTheme } = useContext(AppContext);

  if (open) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  const handleHamburger = () => {
    setOpen(!open);
  };

  return (
    <header
      className={`${
        light ? "bg-slate-800" : "bg-blue-500"
      } p-5 fixed top-0 w-full shadow z-50 transition-all duration-300 ease-in-out`}
    >
      <section className="container mx-auto flex items-center justify-between">
        <section>
          <Link to="/">
            <p
              className={`font-bold ${
                light ? "text-neutral-200" : "text-white"
              } text-[25px] sm:text-md md:text-2xl lg:text-3xl cursor-pointer`}
            >
              Urban Cart
            </p>
          </Link>
        </section>

        {/* Desktop Nav */}
        <nav className="invisible hidden md:visible md:block">
          <ul className="flex justify-center items-center gap-5">
            {["/", "/about", "/products", "/login"].map((path, i) => (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `font-medium px-3 py-2 rounded-lg md:text-md lg:text-md transition-all duration-300 ease-in-out ${
                      light ? "bg-sky-600 text-neutral-400" : ""
                    } ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm shadow-white"
                        : "bg-transparent text-white hover:bg-blue-400"
                    }`
                  }
                >
                  {["Home", "About", "Products", "Login"][i]}
                </NavLink>
              </li>
            ))}

            {light ? (
              <button
                className={`h-10 w-10 p-1 border border-white rounded-full flex items-center justify-center ${
                  light ? "shadow-md  hover:shadow-sky-500" : "shadow-lg"
                }  cursor-pointer`}
                onClick={() => {
                  setTheme(!theme);
                  toggleTheme();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  className={`icon icon-tabler icons-tabler-filled icon-tabler-sun hover:-rotate-45 transition-all duration-200 ease-in-out`}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
                  <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" />
                  <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
                  <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
                  <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
                  <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" />
                  <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
                  <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
                  <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                </svg>
              </button>
            ) : (
              <button
                className={`h-10 w-10 p-1 border border-white rounded-full flex items-center justify-center ${
                  light ? "" : "shadow-xl"
                }  cursor-pointer`}
                onClick={() => {
                  setTheme(!theme);
                  toggleTheme();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  className={`icon icon-tabler icons-tabler-filled icon-tabler-moon hover:-rotate-25 transition-all duration-200 ease-in-out`}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
                </svg>
              </button>
            )}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <section className="block visible md:hidden cursor-pointer">
          <div className="flex items-center gap-3">
            {/* Theme Button */}
            {light ? (
              <button
                className={`h-8 w-8 p-1 border border-white rounded-full flex items-center justify-center ${
                  light ? "shadow-md  hover:shadow-sky-500" : "shadow-lg"
                }  cursor-pointer`}
                onClick={() => {
                  setTheme(!theme);
                  toggleTheme();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  className={`icon icon-tabler icons-tabler-filled icon-tabler-sun hover:-rotate-45 transition-all duration-200 ease-in-out`}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
                  <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" />
                  <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
                  <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
                  <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
                  <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" />
                  <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
                  <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
                  <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                </svg>
              </button>
            ) : (
              <button
                className={`h-8 w-8 p-1 border border-white rounded-full flex items-center justify-center ${
                  light ? "" : "shadow-xl"
                }  cursor-pointer`}
                onClick={() => {
                  setTheme(!theme);
                  toggleTheme();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  className={`icon icon-tabler icons-tabler-filled icon-tabler-moon hover:-rotate-25 transition-all duration-200 ease-in-out`}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
                </svg>
              </button>
            )}

            {/* Hamburger / Close Icons */}
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="size-9"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="size-9"
                onClick={handleHamburger}
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>

          {/* Backdrop (click to close) */}
          {open && (
            <div
              className="fixed inset-0 bg-black opacity-4 z-40"
              onClick={() => setOpen(false)}
            ></div>
          )}

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 z-50 min-h-screen w-3/4 ${
              light ? "bg-slate-800" : "bg-white"
            } shadow-2xl p-5 
            transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div>
              <p
                className={`font-bold text-3xl ${
                  light ? "text-neutral-100" : "text-black"
                }`}
              >
                Urban <span className="text-blue-500">Cart</span>
              </p>
            </div>
            <hr
              className={`mt-5 ${light ? "text-neutral-200" : "text-black"}`}
            />

            <div className="flex flex-col justify-between h-[85vh] p-5 relative w-full">
              {/* Nav Links */}
              <nav>
                <ul
                  className={`space-y-4 text-lg ${
                    light ? "text-neutral-200" : "text-black"
                  } animation`}
                >
                  {["/", "/about", "/products", "/login"].map((path, i) => (
                    <li key={i}>
                      <Link to={path} onClick={() => setOpen(false)}>
                        {["Home", "About", "Products", "Login"][i]}
                      </Link>
                      <hr
                        className={`p-2 mt-5 ${
                          light ? "text-neutral-400" : "text-black"
                        }`}
                      />
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="text-sm text-gray-400 text-center absolute bottom-1">
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
