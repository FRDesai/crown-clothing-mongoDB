import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Shop from "./Pages/Shop/Shop";
import SignIn from "./Pages/SignIn/SignIn";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { DataProvider } from "./Context/dataContext";
import { CartDataProvider } from "./Context/cartContext";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import CheckOut from "./Pages/CheckOut/CheckOut";
import NoPage from "./Pages/NoPage/NoPage";
import SignUp from "./Pages/SignUp/SignUp";
import { store } from "./store/store";
import { Provider } from "react-redux";
import AddressPage from "./Pages/AddressPage/AddressPage";
import PaymentSuccess from "./Pages/PaymentSuccess/PaymentSuccess";
import { TransactionProvider } from "./Context/transactionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DataProvider>
        <CartDataProvider>
          <TransactionProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navbar />}>
                  <Route index element={<Home />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="shop/:category" element={<CategoryPage />} />
                  <Route path="checkout" element={<CheckOut />} />
                  <Route path="checkout/address" element={<AddressPage />} />
                  <Route path="signIn" element={<SignIn />} />
                  <Route path="signUp" element={<SignUp />} />
                  <Route path="paymentSuccess" element={<PaymentSuccess />} />
                  <Route path="*" element={<NoPage />} />
                  <Route />
                </Route>
              </Routes>
            </BrowserRouter>
          </TransactionProvider>
        </CartDataProvider>
      </DataProvider>
    </Provider>
  </React.StrictMode>
);
