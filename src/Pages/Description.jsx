import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import axios from "axios";
import { AppContext } from "../contexts/AppProvider";
import { useNavigate } from "react-router-dom";

const url = "https://urban-cart-server.onrender.com/products";

const Description = () => {
  const { id, title } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { light } = useContext(AppContext);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(3);

  // Fetch product data
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${url}/${id}`);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching product:", err);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const { productTitle, price, category, description, image } = data;

  // Set dynamic page title
  useEffect(() => {
    document.title = title ? `${title} - Urban Cart` : "Urban Cart";
  }, [title]);

  // Countdown for modal
  useEffect(() => {
    if (showModal && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (showModal && timer === 0) {
      navigate("/products");
    }
  }, [showModal, timer, navigate]);

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
    <main className="pt-30 relative">
      <section className="container mx-auto px-5 md:px-10 lg:px-0 relative">
        <button
          onClick={() => navigate(-1)}
          className={`px-4 py-2 absolute -top-15 md:left-0 rounded-md transition duration-300 cursor-pointer ${
            light
              ? "bg-sky-600 text-white hover:bg-sky-800"
              : "bg-blue-400 text-black hover:bg-blue-600"
          }`}
        >
          Back
        </button>

        <div className="flex flex-col md:flex-row gap-10 mt-10">
          {/* Product Image */}
          <div
            className={`flex-1 flex items-center justify-center p-5 rounded-lg shadow-md ${
              light
                ? "bg-neutral-800 hover:shadow-sky-600"
                : "bg-white hover:shadow-blue-300"
            } transition-all duration-300`}
          >
            <img
              src={image}
              alt={productTitle || title}
              className="h-[250px] sm:h-[350px] lg:h-[500px] object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col justify-around">
            <h1
              className={`text-3xl font-bold ${
                light ? "text-neutral-50" : "text-cyan-700"
              } mb-3`}
            >
              {productTitle || title}
            </h1>
            <p
              className={`text-4xl font-bold ${
                light ? "text-neutral-300" : "text-gray-800"
              } mb-6`}
            >
              ${price}
            </p>
            <p
              className={`${
                light ? "text-neutral-400" : "text-gray-500"
              } capitalize mb-2`}
            >
              Category: <span className="font-medium">{category}</span>
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < Math.round(data?.rating?.rate || 0) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <p
                className={`${
                  light ? "text-neutral-400" : "text-gray-600"
                } text-sm`}
              >
                {data?.rating?.rate || 0} / 5 ({data?.rating?.count || 0}{" "}
                reviews)
              </p>
            </div>
            <p
              className={`${
                light ? "text-neutral-300" : "text-gray-600"
              } text-lg leading-relaxed mb-5 text-justify capitalize`}
            >
              {description}
            </p>

            {/* Buy Now Button */}
            <button
              onClick={() => {
                setShowModal(true);
                setTimer(3);
              }}
              className={`px-6 py-3 border font-bold ${
                light
                  ? "text-white border-emerald-400 bg-emerald-400 rounded-md hover:bg-emerald-800 hover:border-emerald-800"
                  : "text-black border-emerald-400 rounded-md hover:bg-emerald-500 hover:border-emerald-500 hover:text-white"
              } transition duration-300 cursor-pointer`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Purchase Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            className={`p-8 rounded-3xl flex flex-col items-center gap-4 transform transition-transform duration-500 scale-100 animate-popper
            ${light ? "bg-neutral-800 text-white" : "bg-white text-black"}`}
          >
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-emerald-500 relative">
              <svg
                className="w-16 h-16 text-white stroke-[4] animate-checkmark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mt-2">Purchase Successful!</h2>
            <p className="font-medium">Thanks for Shopping</p>
            <p className="text-lg">Redirecting in {timer} seconds...</p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default Description;
