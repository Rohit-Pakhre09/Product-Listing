import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Components/Footer";

const Description = () => {
  const { id, title } = useParams();

  // Set the page (tab) title dynamically
  useEffect(() => {
    document.title = title ? `${title} - Urban Cart` : "- Urban Cart";
  }, [title]);

  return (
    <main className="pt-25 px-5 md:px-0">
      <section className="container mx-auto h-[70vh]">
        <h1 className="text-3xl font-bold text-cyan-700">{title}</h1>
        <p className="text-gray-600">Product ID: {id}</p>
      </section>
      <Footer />
    </main>
  );
};

export default Description;
