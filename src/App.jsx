import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  return <main className="min-h-screen bg-gray-100">
    <Navbar />
    <AllRoutes />
  </main>;
};

export default App;