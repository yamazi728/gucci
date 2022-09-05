import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import MensDetails from "./Components/Details/MensDetails";
import EditForMen from "./Components/Edit Form/EditForMen";
import LogIn from "./Components/Auth Froms/LogIn";
import SignUp from "./Components/Auth Froms/SignUp";
import AddForWomens from "./Components/Add Form/AddForWomens";
import EditForWomen from "./Components/Edit Form/EditForWomen";
import WomensDetails from "./Components/Details/WomensDetails";
import AddForMens from "./Components/Add Form/AddForMens";
import Mens from "./Components/ProductLists/Mens";
import Womens from "./Components/ProductLists/Womens";
import AboutUs from "./Components/AboutUs/AboutUs";
import NotFound from "./Components/NotFound/NotFound";
import Success from "./Components/Auth Froms/Success";
import Cart from "./Components/LocalHost/Cart";
import Favorite from "./Components/LocalHost/Favorite";
import Zakaz from "./Components/PayForm/Zakaz";
import Pay from "./Components/PayForm/Pay";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/mens/:id" element={<MensDetails />} />
      <Route path="/womens/:id" element={<WomensDetails />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/add-for-mens" element={<AddForMens />} />
      <Route path="/add-for-womens" element={<AddForWomens />} />
      <Route path="/edit-for-men/:id" element={<EditForMen />} />
      <Route path="/edit-for-womens/:id" element={<EditForWomen />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/impression" element={<AboutUs />} />
      <Route path="/success" element={<Success />} />
      <Route path="/order" element={<Zakaz />} />
      <Route path="/pay" element={<Pay />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
