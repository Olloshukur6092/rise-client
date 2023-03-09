import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
<<<<<<< HEAD
import Create from "./pages/admin/Create";
import ShowNews from "./pages/admin/ShowNews";
import Login from "./pages/admin/Login";
=======
import ShowNewsPage from "./pages/ShowNewsPage";
>>>>>>> 88973250534f939b1558acfcb29882a7b9ca1bf8

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
<<<<<<< HEAD
        <Route path="/admin/create" element={<Create />} />
        <Route path="/admin/news" element={<ShowNews />} />
        <Route path="/admin/login" element={<Login />} />
=======
        <Route path="/news/:id" element={<ShowNewsPage />} />
>>>>>>> 88973250534f939b1558acfcb29882a7b9ca1bf8
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
