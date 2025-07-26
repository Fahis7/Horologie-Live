// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Login from "./common/pages/auth/Login";
import Register from "./common/pages/auth/Registration";
import Home from "./nonAuth/landing/Home";
import Products from "./nonAuth/Products";
import ProductDetails from "./nonAuth/landing/ProductDetails";
import MainLayout from "./layout/MainLayout";
import Cart from "./nonAuth/Cart";
import { Toaster } from "react-hot-toast";
import Wishlist from "./nonAuth/WishList";
import PaymentPage from "./nonAuth/PaymentPage";
import ErrorResponse from "./nonAuth/ErrorResponse";
import Confirmation from "./nonAuth/Confirmation";
import CertificatePage from "./nonAuth/CertificatePage";
import AdminRoute from "./admin/AdminRoute";
import Dashboard from "./admin/Dashboard";
import ManageOrders from "./admin/ManageOrders";
import ManageUsers from "./admin/ManageUsers";
import ManageProducts from "./admin/ManageProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrdersPage from "./nonAuth/OrdersPage";
function App() {
  return (
    <>
      {/* Toast Notifications */}
      <Toaster position="top-center" reverseOrder={false} />
      <ToastContainer position="top-center" autoClose={1000} />

      <Routes>
        {/* Routes without Navbar/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/confirmation" element={<Confirmation />} />

        {/* admin routes*/}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/manageorders" element={<ManageOrders />} />
          <Route path="/manageusers" element={<ManageUsers />} />
          <Route path="/manageproducts" element={<ManageProducts />} />
        </Route>

        {/* Routes with Navbar/Footer wrapped in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="*" element={<ErrorResponse />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
