import { useContext } from "react";
import Navbar from "./Components/Navbars";
import AllRoutes from "./routes/AllRoutes";
import { AppContext } from "./contexts/AppProvider";

const App = () => {
  const { light } = useContext(AppContext);
  return (
    <main className={`min-h-screen ${light ? "bg-black/90" : "bg-gray-100"} transition-all duration-500 ease-in-out`}>
      <Navbar />
      <AllRoutes />
    </main>
  );
};

export default App;
