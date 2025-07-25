import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import Footer from "../Components/Footer";

const url = "http://localhost:3000/products";
const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const serverData = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    serverData();
  }, []);
  return (
    <main className="pt-30">
      <section className="container mx-auto px-4 lg:px-0">
        <section className="flex items-center justify-between px-4">
          <p className="font-bold text-5xl text-blue-700">Collections</p>
        </section>
        <hr className="mt-5 opacity-8" />

        {error && !loading && (
          <div className="flex justify-center items-center min-h-[60vh]">
            <img src="/src/assets/serverError.png" alt="server error" />
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center min-h-[80vh]">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-cyan-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="flex justify-center gap-10">
            <div className="grid grid-cols-1 sm:grid-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-15">
              {data.map((el) => (
                <ProductCard key={el.id} data={el} />
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Products;
