import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppProvider";

const Footer = () => {
  const { light } = useContext(AppContext);
  return (
    <footer className={`${light ? "bg-slate-800" : "bg-gray-200"} py-10 mt-10 animation`}>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className={`text-3xl font-bold ${light ? "text-neutral-200" : ""} animation`}>Urban Cart</h2>
          <p className={`mt-4 text-sm ${light ? "text-neutral-200" : ""} animation`}>
            Your one-stop shop for fashion, lifestyle, and everyday essentials.
            Fast delivery and top deals, always.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className={`text-lg font-semibold mb-3 ${light ? "text-neutral-200" : ""} animation`}>Quick Links</h3>
          <ul className="space-y-2">
            <li className={`${light?"hover:text-sky-400 text-white":"hover:text-blue-400"}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`${light?"hover:text-sky-400 text-white":"hover:text-blue-400"}`}>
              <Link to="/about">About</Link>
            </li>
            <li className={`${light?"hover:text-sky-400 text-white":"hover:text-blue-400"}`}>
              <Link to="/products">Products</Link>
            </li>
            <li className={`${light?"hover:text-sky-400 text-white":"hover:text-blue-400"}`}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className={`text-lg font-semibold mb-3 ${light ? "text-neutral-200" : ""} animation`}>Customer Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className={`${light?"hover:text-sky-400 text-white":"hover:text-blue-400"}`}>
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className={`${light?"hover:text-sky-400 text-white":"hover:text-blue-400"}`}>
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className={`${light?"hover:text-sky-400 text-white":"hover:text-blue-400"}`}>
                Returns
              </a>
            </li>
            <li>
              <a href="#" className={`${light?"hover:text-sky-400 text-white":"hover:text-blue-400"}`}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className={`text-lg font-semibold mb-3 ${light ? "text-neutral-200" : ""} animation`}>Subscribe</h3>
          <p className={`text-sm mb-3 ${light ? "text-neutral-200" : ""} animation`}>
            Join our newsletter to get exclusive deals and updates.
          </p>
          <form className="flex flex-col lg:flex-row gap-5 lg:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full p-2 border ${light ? "border-white placeholder:text-white" : "border-gray-600"} focus:outline-none 
               rounded-md lg:rounded-l lg:rounded-r-none`}
            />
            <button
              type="submit"
              className={`p-3 ${light? "bg-slate-500":"bg-blue-500"} text-white cursor-pointer transition hover:bg-blue-600 
               text-sm rounded-md lg:rounded-r lg:rounded-l-none`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`mt-8 border-t border-gray-700 pt-10 text-center text-sm ${light?"text-white":"text-gray-500"} animation`}>
        © {new Date().getFullYear()} Urban Cart. All rights reserved.
        <p className="text-sm italic pt-3">
          Created by:{" "}
          <a href="https://github.com/Rohit-Pakhre09" rel="noopener noreferrer">
            <span className="hover:text-blue-500 transition-all duration-200 ease-in">
              Rohit Pakhre
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
