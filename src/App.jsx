import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { http } from "./api/axios";
import { useEffect } from "react";
import { LOG_OUT } from "./redux/constants/authConstant";

// export const token =
//   localStorage.getItem("user") !== null
//     ? JSON.parse(localStorage.getItem("user"))
//     : null;

function App() {
  const { pathname } = useLocation();
  let path = pathname.split("/");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const getUser = async () => {
    try {
      if (user !== null) {
        await http.get("api/user", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
      }
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 401) {
        dispatch({type: LOG_OUT});
        localStorage.removeItem("user");
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {path[1] === "admin" ? user !== null ? <AdminHeader /> : "" : <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<ShowNewsPage />} />
        <Route
          path="/admin/create"
          element={
            user !== null ? <Create /> : <Navigate to={"/admin/login"} />
          }
        />
        <Route
          path="/admin/news"
          element={
            user !== null ? <ShowNews /> : <Navigate to={"/admin/login"} />
          }
        />
        <Route
          path="/admin/login"
          element={
            user === null ? <Login /> : <Navigate to={"/admin/news"} />
          }
        />
        {/* <Route path="/admin/create" element={<Create />} />
        <Route path="/admin/news" element={ <ShowNews /> } />
        <Route path="/admin/login" element={ <Login /> } /> */}
      </Routes>
      {path[1] === "admin" ? "" : <Footer />}
    </>
  );
}

export default App;
