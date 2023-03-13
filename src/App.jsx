import { Route, Routes, useLocation } from "react-router-dom";
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
import ShowNewsPage from "./pages/ShowNewsPage";
import { Header as AdminHeader } from "./pages/admin/layouts/Header";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.auth.count);
  // console.log(count);
  const { pathname } = useLocation();
  let path = pathname.split("/");
  console.log(path);
  return (
    <>
      {path[1] === "admin" ? <AdminHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<ShowNewsPage />} />
        <Route path="/admin/create" element={<Create />} />
        <Route path="/admin/news" element={<ShowNews />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
      {path[1] === "admin" ? "" : <Footer />}
    </>
  );
}

export default App;
