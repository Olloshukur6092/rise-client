import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import Create from "./pages/admin/Create";
import ShowNews from "./pages/admin/ShowNews";
import Login from "./pages/admin/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/admin/create" element={<Create />} />
        <Route path="/admin/news" element={<ShowNews />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
