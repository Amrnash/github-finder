import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col justify-between h-screen bg-github bg-cover bg-center relative">
      <div className="overlay"></div>
      <Navbar />
      <main className="container mx-auto z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
