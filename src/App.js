import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import Register from "./users/Register";
import Login from "./users/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./users/Profile";
import HomePage from "./pages/HomePage";
import DisplayKitchenByUser from "./pages/DisplayKitchenByUser";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<HomePage />} path="/" />
        <Route element={<DisplayKitchenByUser />} path="/kitchens" />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
