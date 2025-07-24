import Footer from "../components/Footer";

const About = () => {
  return (
    <main className="">
      <section className="container mx-auto pt-30 pb-10">
        <p className="font-bold text-center text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-gray-700 uppercase">
          About Us
        </p>
        <hr className="mt-5" />

        <div className="mt-10 space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto px-4 lg:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-800">
            Urban Cart – Your Everyday Shopping Companion
          </h2>

          <p className="text-justify">
            At <span className="font-semibold">Urban Cart</span>, we believe
            shopping should be more than just a task—it should be a seamless and
            enjoyable experience. Our platform brings together a wide range of
            products, from daily essentials to lifestyle must-haves, all
            carefully curated to meet the needs of modern, urban living. Whether
            you’re looking for household necessities, trendy fashion, or the
            latest gadgets, we ensure every item reflects our promise of
            quality, affordability, and reliability.
          </p>

          <p className="text-justify">
            Founded with a mission to simplify your shopping experience, Urban
            Cart is built on trust and convenience. We partner with top brands
            and trusted suppliers to ensure every product meets the highest
            standards, while also supporting local businesses to bring you
            unique and sustainable options. Our easy-to-use platform, secure
            payment systems, and fast delivery services mean you can shop
            confidently, knowing your time and satisfaction are our top
            priorities.
          </p>

          <p className="text-justify">
            At the heart of Urban Cart is a commitment to our customers. We are
            constantly innovating, improving, and expanding our offerings to
            meet your evolving needs. With a dedicated support team, exclusive
            deals, and a growing community of happy shoppers, Urban Cart isn’t
            just a marketplace—it’s your reliable partner for all things
            shopping, designed to make your life easier and more connected.
          </p>
        </div>
      </section>
     <Footer /> 
    </main>
  );
};

export default About;
