import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import axios from "axios";

const url = "https://urban-cart-server.onrender.com/products";

const Description = () => {
  const { id, title } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const productObj = async () => {
    try {
      const res = await axios.get(`${url}/${id}`);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    productObj();
  }, [id]);

  const { productTitle, price, category, description, image } = data;

  // Set dynamic page title
  useEffect(() => {
    document.title = title ? `${title} - Urban Cart` : "Urban Cart";
  }, [title]);

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-[80vh]">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </main>
    );
  }

  if (error || !data) {
    return (
      <main className="flex flex-col justify-center items-center min-h-[90vh] text-gray-600">
        <img
          src="/src/assets/serverError.png"
          alt="Error"
          className="w-[500px] mb-5"
        />
        <p className="text-xl">Failed to load product details.</p>
      </main>
    );
  }

  return (
    <main className="pt-30">
      <section className="container mx-auto px-5 md:px-10 lg:px-0">
        <div className="flex flex-col md:flex-row gap-15">
          {/* Left: Product Image */}
          <div className="flex-1 flex items-center justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-blue-300 transition-all duration-300 cursor-pointer">
            <img
              src={image}
              alt={productTitle || title}
              className="h-[250px] sm:h-[350px] lg:h-[500px] object-contain"
            />
          </div>

          {/* Right: Product Details */}
          <div className="flex-1 flex flex-col justify-around">
            <div>
              {/* Product Title */}
              <h1 className="text-3xl font-bold text-cyan-700 mb-3">
                {productTitle || title}
              </h1>
              {/* Price */}
              <p className="text-4xl font-bold text-gray-800 mb-8">${price}</p>
              {/* Category */}
              <p className="text-gray-500 capitalize mb-2">
                Category: <span className="font-medium">{category}</span>
              </p>
              {/* Rating Section */}
              <div className="flex items-center gap-3 mb-4">
                {/* Stars (simple example using Unicode stars or SVGs) */}
                <div className="flex text-yellow-500">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index}>
                      {index < Math.round(data?.rating?.rate || 0) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  {data?.rating?.rate || 0} / 5 ({data?.rating?.count || 0}{" "}
                  reviews)
                </p>
              </div>
              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-5 text-justify capitalize">
                {description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 border text-black border-blue-600 hover:text-white rounded-md hover:bg-blue-800 hover:border-blue-800 transition duration-300 cursor-pointer">
                Add to Cart
              </button>
              <button className="px-6 py-3 border text-black border-gray-400 rounded-md hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition duration-300 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Description;
