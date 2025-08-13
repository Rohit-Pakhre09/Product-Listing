import { useContext, useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import Footer from "../Components/Footer";
import { MdClear } from "react-icons/md";
import { AppContext } from "../contexts/AppProvider";

const url = "https://urban-cart-server.onrender.com/products";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");

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

  const filteredData = data.filter((product) => {
    const search = debouncedInput.toLowerCase();
    const priceString = product.price.toString();

    return (
      product.title.toLowerCase().includes(search) ||
      (product.category && product.category.toLowerCase().includes(search)) ||
      priceString.includes(search)
    );
  });

  useEffect(() => {
    serverData();
    document.title = "Products - Urban Cart";
  }, []);

  return (
    <main className="pt-30">
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
              className={`border p-1 w-70 sm:w-50 lg:w-70 rounded-l outline-0 border-gray-400 ${light ? "placeholder:text-neutral-200 text-neutral-200" : "placeholder:text-black"}`}
              placeholder="Browse your Collections"
              value={input}
              onChange={handleChange}
            />
            <button
              onClick={() => setInput("")}
              className={`${light?"bg-slate-500 text-white":"bg-red-500 text-white"} px-3 rounded-r cursor-pointer animation`}
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
            <div className="flex justify-between items-center">
              <section className="flex items-center gap-10 mt-5">
                {/* Filtering */}
                <div className="flex items-center">
                  <p className="font-medium text-gray-400 w-full">Filter by:</p>
                  <select className="w-full max-w-xs px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none cursor-pointer transition duration-200">
                    <option value="">All</option>
                    <option value="Category">Category</option>
                    <option value="Title">Title</option>
                    <option value="Description">Description</option>
                  </select>
                </div>

                {/* Sorting */}
                <div className="flex items-center">
                  <p className="font-medium text-gray-400 w-full">Sort by:</p>
                  <select className="w-full max-w-xs px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none cursor-pointer transition duration-200">
                    <option value="">All</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="High to Low">High to Low</option>
                    <option value="Low to High">Low to High</option>
                  </select>
                </div>
              </section>

              <button className="p-2 mt-5 rounded-md cursor-pointer border border-blue-500 hover:border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-200 ease-in-out">
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
