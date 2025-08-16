import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppProvider";

const ProductCard = ({ data, onDelete }) => {
  const { id, title, price, category, description, image } = data;
  const [like, isLike] = useState(false);

  // Context.
  const { light } = useContext(AppContext);

  return (
    // Main Section
    <main>
      <section
        className={`h-135 w-80 rounded-xl shadow-md p-5 mt-10 ${
          light
            ? "bg-sky-900 text-neutral-400 hover:shadow-sky-400 hover:shadow-md"
            : "bg-white hover:shadow-blue-400"
        } hover:-translate-y-2 transition-all duration-200 ease-in cursor-pointer relative`}
      >
        <Link to={`/description/${id}/${title}`}>
          {/* Img */}
          <div className="mx-auto">
            <img src={image} className="h-[200px] mx-auto pt-3" alt={title} />
          </div>
          <hr
            className={`mt-5 ${
              light ? "border border-neutral-100 opacity-30" : "opacity-7"
            }`}
          />
          {/* Title */}
          <p
            className={`font-bold pt-2 h-17 text-lg ${
              light ? "text-neutral-200" : "text-cyan-700"
            } line-clamp-2`}
          >
            {title}
          </p>
          {/* Price */}
          <p
            className={`font-bold text-3xl pt-2 ${
              light ? "text-neutral-50" : "text-gray-700"
            } animation`}
          >
            ${price}
          </p>
          {/* Category */}
          <div
            className={`border ${
              light
                ? "border-neutral-200 text-neutral-200"
                : "border-gray-600 text-gray-600"
            } w-25 font-medium overflow-hidden text-center text-sm text-ellipsis text-nowrap px-2 mt-2 mb-1 rounded capitalize animation`}
            title={category}
          >
            {category}
          </div>
          {/* Description */}
          <p
            className={`text-sm ${
              light ? "text-slate-300" : "text-gray-500"
            } mt-2 capitalize line-clamp-3 animation`}
          >
            {description}
          </p>
        </Link>
        {/* Buttons [Add to Cart, Edit, Delete] */}
        <div className="absolute z-10 bottom-8 flex items-center justify-around gap-5 w-75 left-2">
          <button
            className={`px-3 py-2 border text-sm rounded-md cursor-pointer ${
              light
                ? "border-0 hover:bg-sky-700 hover:text-white text-neutral-200 bg-sky-500"
                : "border-blue-500 hover:bg-blue-900 hover:border-blue-900 hover:text-white"
            } animation`}
          >
            Add to Cart
          </button>

          <section className="flex justify-center items-center gap-3">
            {/* Edit SVG */}
            <div
              className={`w-9 h-9 rounded-full p-2 flex justify-center items-center ${
                light
                  ? "bg-neutral-200 shadow-md hover:shadow-emerald-500"
                  : "bg-gray-100 shadow-sm hover:shadow-emerald-500"
              } animation`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="green"
                className="size-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
              </svg>
            </div>

            {/* Delete SVG */}
            <div
              onClick={() => onDelete(id)}
              className={`w-9 h-9 rounded-full p-2 flex justify-center items-center ${
                light
                  ? "bg-neutral-200 shadow-md hover:shadow-red-500"
                  : "bg-gray-100 shadow-sm hover:shadow-red-500"
              } animation`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Like SVG */}
            <div
              className={`w-9 h-9 rounded-full p-2 flex justify-center items-center ${
                light
                  ? "bg-neutral-200 shadow-lg hover:shadow-red-500"
                  : "bg-gray-100 shadow-sm hover:shadow-red-500"
              } animation ${like ? "shadow-red-500" : "shadow-none"}`}
              onClick={() => isLike(!like)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 "
                fill={like ? "red" : "none"}
                stroke={like ? "none" : "black"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ProductCard;
