import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppProvider";
import axios from "axios";

const LeftSideBar = ({ data, setData, refreshData }) => {
  const { light } = useContext(AppContext);

  // form state
  const [form, setForm] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rate: "",
    count: "",
  });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add data to the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Product submitted:", form);

    // close sidebar
    setData(false);

    // refresh product list in Products.jsx
    if (refreshData) {
      refreshData();
    }

    try {
      const res = await axios.post(
        "https://urban-cart-server.onrender.com/products",
        {
          id: form.id,
          title: form.title,
          price: Number(form.price),
          description: form.description,
          category: form.category,
          image: form.image,
          rating: {
            rate: Number(form.rate),
            count: Number(form.count),
          },
        }
      );

      // refresh product list in Products.jsx
      if (refreshData) {
        refreshData();
      }

      // clear form
      setForm({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rate: "",
        count: "",
      });
    } catch (error) {
      console.log("Error to add product in the api: ", error);
    }
  };

  return (
    <section
      className={`min-h-screen w-3/4 md:w-120 
      ${light ? "bg-slate-800 shadow-lg shadow-sky-400" : "bg-white"}
      p-5 fixed top-0 left-0 z-50 transform animation
      ${data ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <p
          className={`${
            light ? "text-neutral-200" : "text-black"
          } animation text-xl md:text-3xl font-bold`}
        >
          Add Product
        </p>
        <button
          onClick={() => setData(false)}
          className={`group px-3 py-2 ${
            light
              ? "bg-sky-500 text-white"
              : "bg-blue-500 hover:bg-blue-700 text-white"
          } animation rounded-md cursor-pointer`}
        >
          ✕
        </button>
      </div>

      <hr
        className={`mt-5 ${
          light ? " border-neutral-400" : "border-neutral-800"
        } animation`}
      />

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4 min-h-100 md:min-h-screen bg-amber-100 overflow-auto">
        <div>
          <label
            className={`block text-sm font-medium ${
              light ? "text-neutral-200" : "text-black"
            } mb-2 animation`}
          >
            Product ID
          </label>
          <input
            type="number"
            name="id"
            value={form.id}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${
              light ? "border border-neutral-200 text-neutral-200" : ""
            } animation`}
          />
        </div>

        <div>
          <label
            className={`block text-sm font-medium ${
              light ? "text-neutral-200" : "text-black"
            } mb-2 animation`}
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${
              light ? "border border-neutral-200 text-neutral-200" : ""
            } animation`}
            required
          />
        </div>

        <div>
          <label
            className={`block text-sm font-medium ${
              light ? "text-neutral-200" : "text-black"
            } mb-2 animation`}
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${
              light ? "border border-neutral-200 text-neutral-200" : ""
            } animation`}
            required
          />
        </div>

        <div>
          <label
            className={`block text-sm font-medium ${
              light ? "text-neutral-200" : "text-black"
            } mb-2 animation`}
          >
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${
              light ? "border border-neutral-200 text-neutral-200" : ""
            } animation`}
          ></textarea>
        </div>

        <div>
          <label
            className={`block text-sm font-medium ${
              light ? "text-neutral-200" : "text-black"
            } mb-2 animation`}
          >
            Category
          </label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${
              light ? "border border-neutral-200 text-neutral-200" : ""
            } animation`}
          />
        </div>

        <div>
          <label
            className={`block text-sm font-medium ${
              light ? "text-neutral-200" : "text-black"
            } mb-2 animation`}
          >
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className={`w-full border p-2 rounded ${
              light ? "border border-neutral-200 text-neutral-200" : ""
            } animation`}
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label
              className={`block text-sm font-medium ${
                light ? "text-neutral-200" : "text-black"
              } mb-2 animation`}
            >
              Rating (rate)
            </label>
            <input
              type="number"
              step="0.1"
              name="rate"
              value={form.rate}
              onChange={handleChange}
              className={`w-full border p-2 rounded ${
                light ? "border border-neutral-200 text-neutral-200" : ""
              } animation`}
            />
          </div>
          <div className="flex-1">
            <label
              className={`block text-sm font-medium ${
                light ? "text-neutral-200" : "text-black"
              } mb-2 animation`}
            >
              Rating (count)
            </label>
            <input
              type="number"
              name="count"
              value={form.count}
              onChange={handleChange}
              className={`w-full border p-2 rounded ${
                light ? "border border-neutral-200 text-neutral-200" : ""
              } animation`}
            />
          </div>
        </div>

        <button
          type="submit"
          className={`mt-4 p-2 rounded-md ${
            light
              ? "bg-sky-500 text-white hover:bg-sky-600"
              : "bg-blue-500 text-white hover:bg-blue-700"
          } cursor-pointer`}
        >
          Save Product
        </button>
      </form>
    </section>
  );
};

export default LeftSideBar;

// id	20
// title	"DANVOUY Womens T Shirt Casual Cotton Short"
// price	12.99
// description	"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter."
// category	"women's clothing"
// image	"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png"
// rating
// rate	3.6
// count	145
