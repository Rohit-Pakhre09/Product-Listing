import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const Navigate = useNavigate();
  return (
    <section className="min-h-[80vh] bg-gray-100 flex flex-col items-center justify-center gap-20">
      <section>
        <img src="/src/assets/404.png" alt="404 Error" />
        <p className="text-center text-red-500 uppercase font-black text-4xl pointer-events-none select-none">
          404 Error
        </p>
      </section>

      <button
        onClick={() => Navigate("/")}
        className="cursor-pointer p-5 font-medium text-white rounded-lg bg-blue-500 hover:shadow-xl hover:bg-blue-700  transition-all duration-300 ease-in-out"
      >
        Visit Home Page
      </button>
    </section>
  );
};

export default NoPage;
