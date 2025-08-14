import { useContext, useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import Footer from "../Components/Footer";
import { MdClear } from "react-icons/md";
import { AppContext } from "../contexts/AppProvider";
import RightSideBar from "../Components/RightSideBar";

const url = "https://urban-cart-server.onrender.com/products";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [filterType, setFilterType] = useState("");
  const [sortType, setSortType] = useState("");

  const { light } = useContext(AppContext);

  const serverData = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Debouncing the input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input);
    }, 200);
    return () => clearTimeout(timer);
  }, [input]);

  // Filtering logic
  let filteredData = data.filter((product) => {
    const search = debouncedInput.toLowerCase();
    if (!search) return true;

    if (filterType === "Category") {
      return product.category?.toLowerCase().includes(search);
    }
    if (filterType === "Title") {
      return product.title?.toLowerCase().includes(search);
    }
    if (filterType === "Description") {
      return product.description?.toLowerCase().includes(search);
    }

    return (
      product.title?.toLowerCase().includes(search) ||
      product.category?.toLowerCase().includes(search) ||
      product.description?.toLowerCase().includes(search) ||
      product.price?.toString().includes(search)
    );
  });

  // Sorting logic
  if (sortType === "A-Z") {
    filteredData = [...filteredData].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sortType === "Z-A") {
    filteredData = [...filteredData].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  } else if (sortType === "High to Low") {
    filteredData = [...filteredData].sort((a, b) => b.price - a.price);
  } else if (sortType === "Low to High") {
    filteredData = [...filteredData].sort((a, b) => a.price - b.price);
  }

  useEffect(() => {
    serverData();
    document.title = "Products - Urban Cart";
  }, []);

  return (
    <main className="pt-30 relative">
      <section className="container mx-auto px-4 lg:px-0">
        {/* Search Header */}
        <section className="flex flex-col gap-5 sm:flex-row md:gap-10 items-center justify-between px-4 md:px-0">
          <p
            className={`font-bold text-5xl ${
              light ? "text-slate-400" : "text-blue-700"
            } tracking-wide`}
          >
            Collections
          </p>
          <div className="flex">
            <input
              type="text"
              className={`border p-1 w-70 sm:w-50 lg:w-70 rounded-l outline-0 border-gray-400 ${
                light
                  ? "placeholder:text-neutral-200 text-neutral-200"
                  : "placeholder:text-black"
              }`}
              placeholder="Browse your Collections"
              value={input}
              onChange={handleChange}
            />
            <button
              onClick={() => setInput("")}
              className={`${
                light ? "bg-slate-500 text-white" : "bg-red-500 text-white"
              } px-3 rounded-r cursor-pointer animation`}
            >
              <MdClear />
            </button>
          </div>
        </section>

        <hr className="mt-5 opacity-8" />

        {/* Show Loader */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[80vh]">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-cyan-600 rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          /* Show only Server Error (not "No Product Found") */
          <div className="flex justify-center items-center min-h-[60vh]">
            <img src="/src/assets/serverError.png" alt="Server Error" />
          </div>
        ) : (
          <section>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <section className="flex items-center gap-10 mt-5">
                {/* Filtering */}
                <div className="flex items-center">
                  <p
                    className={`font-medium ${
                      light ? "text-gray-400" : "text-slate-900"
                    } animation w-full`}
                  >
                    Filter by:
                  </p>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className={`w-full max-w-xs px-4 py-2 text-sm ${
                      light
                        ? "bg-sky-600 text-neutral-200 hover:bg-slate-600"
                        : "text-gray-700 bg-white"
                    }  rounded-lg shadow-sm focus:outline-none cursor-pointer transition duration-200`}
                  >
                    <option
                      className={`${
                        light ? "bg-slate-500 hover:bg-sky-500" : ""
                      } animation`}
                      value=""
                    >
                      All
                    </option>
                    <option
                      className={`${
                        light ? "bg-slate-500 hover:bg-sky-500" : ""
                      } animation`}
                      value="Category"
                    >
                      Category
                    </option>
                    <option
                      className={`${
                        light ? "bg-slate-500 hover:bg-sky-500" : ""
                      } animation`}
                      value="Title"
                    >
                      Title
                    </option>
                    <option
                      className={`${
                        light ? "bg-slate-500 hover:bg-sky-500" : ""
                      } animation`}
                      value="Description"
                    >
                      Description
                    </option>
                  </select>
                </div>

                {/* Sorting */}
                <div className="flex items-center">
                  <p
                    className={`font-medium ${
                      light ? "text-gray-400" : "text-slate-900"
                    } animation w-full`}
                  >
                    Sort by:
                  </p>
                  <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    className={`w-full max-w-xs px-4 py-2 text-sm ${
                      light
                        ? "bg-sky-600 text-neutral-200 hover:bg-slate-600"
                        : "text-gray-700 bg-white"
                    }  rounded-lg shadow-sm focus:outline-none cursor-pointer transition duration-200`}
                  >
                    <option
                      className={`${
                        light ? "bg-slate-500 hover:bg-sky-500" : ""
                      } animation`}
                      value=""
                    >
                      All
                    </option>
                    <option
                      className={`${
                        light ? "bg-slate-500 hover:bg-sky-500" : ""
                      } animation`}
                      value="A-Z"
                    >
                      A-Z
                    </option>
                    <option
                      className={`${
                        light ? "bg-slate-500 hover:bg-sky-500" : ""
                      } animation`}
                      value="Z-A"
                    >
                      Z-A
                    </option>
                    <option
                      className={`${
                        light ? "bg-slate-500 hover:bg-sky-500" : ""
                      } animation`}
                      value="High to Low"
                    >
                      Price: High to Low
                    </option>
                    <option
                      className={`${
                        light ? "bg-slate-500 hover:bg-sky-500" : ""
                      } animation`}
                      value="Low to High"
                    >
                      Price: Low to High
                    </option>
                  </select>
                </div>
              </section>

              <button
                className={`p-2 mt-5 md:w-50 rounded-md cursor-pointer border ${
                  light
                    ? "text-white bg-sky-600 border-slate-500 hover:border-slate-600 hover:bg-slate-600 hover:text-white"
                    : "border-blue-500 hover:border-blue-900 hover:bg-blue-900 hover:text-white"
                } animation`}
              >
                Add Product
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-15 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {filteredData.length > 0 ? (
                filteredData.map((el) => <ProductCard key={el.id} data={el} />)
              ) : (
                <p className="text-center text-gray-500 col-span-full text-lg h-100 flex items-center">
                  <img
                    src="/src/assets/noProductsFound.png"
                    className="select-none pointer-events-none"
                    alt="No Product Found."
                  />
                </p>
              )}
            </div>
          </section>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Products;
