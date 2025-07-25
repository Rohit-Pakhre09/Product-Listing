import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="container mx-auto py-5 md:py-15">
        <section className="flex flex-col gap-10 md:flex-row md:gap-5 items-center py-20 px-5 lg:px-0">
          <div className="flex-1 space-y-6 gap-10">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-800">
              Welcome to <span className="text-blue-500">Urban Cart.</span>
            </h1>
            <p className="text-lg md:text-sm lg:text-xl text-gray-600 leading-relaxed text-justify">
              Urban Cart is your ultimate one-stop online destination for
              everything you need to elevate your lifestyle — from trendy
              fashion and stylish accessories to home essentials and everyday
              products. We curate the latest collections from top brands and
              trusted suppliers, ensuring that every item meets our standards of
              quality, style, and value. <br />
              <br /> Whether you’re searching for chic outfits to update your
              wardrobe, functional lifestyle essentials for your home, or
              everyday must-haves that make life easier, we’ve got it all in one
              convenient place.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="px-6 py-3 bg-blue-500 text-white font-medium cursor-pointer rounded-lg 
         hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              Shop Now
            </button>
          </div>

          <div className="flex-1 flex justify-end">
            <img
              src="/src/assets/shopping-1.avif"
              alt="Urban Cart Shopping"
              className="rounded-xl shadow-lg max-w-full h-auto object-cover md:max-w-sm lg:max-w-xl"
            />
          </div>
        </section>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center select-none cursor-pointer mx-5 py-10">
          {/* Card 1 */}
          <div className="p-20 md:p-5 lg:p-15 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 duration-300">
            <h3 className="text-2xl font-bold text-blue-500">Fast Delivery</h3>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              Get your favorite products delivered to your doorstep quickly and
              safely with our reliable delivery network.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-20 md:p-5 lg:p-15 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 duration-300">
            <h3 className="text-2xl font-bold text-blue-500">Top Quality</h3>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              Only the best products, handpicked from trusted brands, so you
              always shop with confidence.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-20 md:p-5 lg:p-15 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 duration-300">
            <h3 className="text-2xl font-bold text-blue-500">
              Exclusive Offers
            </h3>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              Special discounts and deals curated just for you — shop smart and
              save more every day.
            </p>
          </div>
        </section>

        <section className="mt-20 text-center px-5 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Shop with Urban Cart?
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            At Urban Cart, we make shopping easy, affordable, and reliable. With
            a wide range of quality products, unbeatable prices, and fast
            delivery, your satisfaction is our priority.
          </p>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
