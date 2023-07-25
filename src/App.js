import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import Register from "./users/Register";
import Login from "./users/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./users/Profile";
import HomePage from "./pages/HomePage";
import AdditionalInfo from "./users/AdditionalInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route element={<Register />} path="/register" />
          <Route element={<AdditionalInfo />} path="/additional-info" />
          <Route element={<Login />} path="/login" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<HomePage />} path="/" />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
