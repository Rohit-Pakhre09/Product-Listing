// src/Components/LeftSideBar.js
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppProvider";
import axios from "axios";

const url = "https://urban-cart-server.onrender.com/products";

const LeftSideBar = ({ data, setData, refreshData, editProduct }) => {
  const { light } = useContext(AppContext);

  const initialForm = {
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rate: "",
    count: "",
  };

  const [form, setForm] = useState(initialForm);

  // When editProduct changes, prefill form or reset
  useEffect(() => {
    if (editProduct) {
      setForm({
        id: editProduct.id,
        title: editProduct.title,
        price: editProduct.price,
        description: editProduct.description,
        category: editProduct.category,
        image: editProduct.image,
        rate: editProduct.rating?.rate || "",
        count: editProduct.rating?.count || "",
      });
    } else {
      setForm(initialForm);
    }
  }, [editProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editProduct) {
        // Update existing product
        await axios.put(`${url}/${form.id}`, {
          title: form.title,
          price: Number(form.price),
          description: form.description,
          category: form.category,
          image: form.image,
          rating: { rate: Number(form.rate), count: Number(form.count) },
        });
      } else {
        // Add new product
        await axios.post(url, {
          id: form.id,
          title: form.title,
          price: Number(form.price),
          description: form.description,
          category: form.category,
          image: form.image,
          rating: { rate: Number(form.rate), count: Number(form.count) },
        });
      }

      refreshData(); // Refresh product list
      setForm(initialForm); // Reset form
      setData(false); // Close sidebar
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-50 w-4/5 md:w-96 h-full md:h-screen p-5 transform transition-transform duration-300 overflow-y-auto
        ${data ? "translate-x-0" : "-translate-x-full"}
        ${
          light
            ? "bg-slate-800 text-neutral-200 shadow-lg shadow-sky-400"
            : "bg-white text-black"
        }
      `}
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl md:text-3xl font-bold">
          {editProduct ? "Edit Product" : "Add Product"}
        </h2>
        <button
          onClick={() => setData(false)}
          className={`px-3 py-2 rounded-md cursor-pointer ${
            light
              ? "bg-sky-500 hover:bg-sky-600 text-white"
              : "bg-blue-500 hover:bg-blue-700 text-white"
          }`}
        >
          ✕
        </button>
      </div>

      <hr
        className={`border ${
          light ? "border-neutral-400" : "border-neutral-300"
        } mb-5`}
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {[
          {
            label: "Product ID",
            name: "id",
            type: "number",
            required: !editProduct,
          },
          { label: "Title", name: "title", type: "text", required: true },
          { label: "Price", name: "price", type: "number", required: true },
          {
            label: "Description",
            name: "description",
            type: "textarea",
            required: false,
          },
          {
            label: "Category",
            name: "category",
            type: "text",
            required: false,
          },
          { label: "Image URL", name: "image", type: "text", required: false },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium mb-2">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                className={`w-full border rounded p-2 focus:outline-none focus:ring ${
                  light
                    ? "border-neutral-200 text-neutral-200"
                    : "border-neutral-400 text-black"
                }`}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                required={field.required}
                disabled={editProduct && field.name === "id"}
                className={`w-full border rounded p-2 focus:outline-none focus:ring ${
                  light
                    ? "border-neutral-200 text-neutral-200"
                    : "border-neutral-400 text-black"
                }`}
              />
            )}
          </div>
        ))}

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">
              Rating (rate)
            </label>
            <input
              type="number"
              step="0.1"
              name="rate"
              value={form.rate}
              onChange={handleChange}
              className={`w-full border rounded p-2 focus:outline-none focus:ring ${
                light
                  ? "border-neutral-200 text-neutral-200"
                  : "border-neutral-400 text-black"
              }`}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">
              Rating (count)
            </label>
            <input
              type="number"
              name="count"
              value={form.count}
              onChange={handleChange}
              className={`w-full border rounded p-2 focus:outline-none focus:ring ${
                light
                  ? "border-neutral-200 text-neutral-200"
                  : "border-neutral-400 text-black"
              }`}
            />
          </div>
        </div>

        <button
          type="submit"
          className={`mt-4 p-2 rounded-md w-full cursor-pointer ${
            light
              ? "bg-sky-500 hover:bg-sky-600 text-white"
              : "bg-blue-500 hover:bg-blue-700 text-white"
          }`}
        >
          {editProduct ? "Update Product" : "Save Product"}
        </button>
      </form>
    </aside>
  );
};

export default LeftSideBar;
