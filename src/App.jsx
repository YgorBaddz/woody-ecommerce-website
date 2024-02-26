import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
