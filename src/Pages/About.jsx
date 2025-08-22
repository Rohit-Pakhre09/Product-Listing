import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import { AppContext } from "../contexts/AppProvider";

const About = () => {
  // Context
  const { light } = useContext(AppContext);

  useEffect(() => {
    document.title = "About Us - Urban Cart";
  }, []);

  return (
    <main>
      <section className="container mx-auto pt-30 pb-10">
        <p
          className={`font-bold text-center text-3xl sm:text-2xl md:text-4xl lg:text-5xl ${
            light ? "text-neutral-200" : "text-gray-700"
          } uppercase duration-300 ease-in-out`}
        >
          About Us
        </p>
        <hr className="mt-5 opacity-8" />

        <div className="mt-10 space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto px-4 lg:px-0">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-center ${
              light ? "text-slate-300" : "text-blue-800"
            } animation`}
          >
            Urban Cart – Your Everyday Shopping Companion
          </h2>

          <p
            className={`text-justify animation ${
              light ? "text-neutral-200" : "text-gray"
            }`}
          >
            At <span className="font-semibold">Urban Cart</span>, we believe
            shopping should be more than just a task—it should be a seamless and
            enjoyable experience. Our platform brings together a wide range of
            products, from daily essentials to lifestyle must-haves, all
            carefully curated to meet the needs of modern, urban living. Whether
            you’re looking for household necessities, trendy fashion, or the
            latest gadgets, we ensure every item reflects our promise of
            quality, affordability, and reliability.
          </p>

          <p
            className={`text-justify animation ${
              light ? "text-neutral-200" : "text-gray"
            }`}
          >
            Founded with a mission to simplify your shopping experience, Urban
            Cart is built on trust and convenience. We partner with top brands
            and trusted suppliers to ensure every product meets the highest
            standards, while also supporting local businesses to bring you
            unique and sustainable options. Our easy-to-use platform, secure
            payment systems, and fast delivery services mean you can shop
            confidently, knowing your time and satisfaction are our top
            priorities.
          </p>

          <p
            className={`text-justify animation ${
              light ? "text-neutral-200" : "text-gray"
            }`}
          >
            At the heart of Urban Cart is a commitment to our customers. We are
            constantly innovating, improving, and expanding our offerings to
            meet your evolving needs. With a dedicated support team, exclusive
            deals, and a growing community of happy shoppers, Urban Cart isn’t
            just a marketplace—it’s your reliable partner for all things
            shopping, designed to make your life easier and more connected.
          </p>

          <p
            className={`text-justify text-sm italic  ${
              light ? "text-neutral-500" : "text-gray-500"
            }`}
          >
            ~ This website is a demonstration project and not an actual
            commercial platform. It has been created by{" "}
            <a href="https://www.linkedin.com/in/rohit-pakhre/">
              <span className="font-semibold cursor-pointer hover:text-blue-500 transition-all duration-200 ease-in">
                Rohit Pakhre
              </span>
            </a>{" "}
            to simulate a real-world e-commerce experience for educational and
            portfolio purposes.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
