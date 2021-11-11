import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Welcome from "./pages/welcome";
import Shop from "./pages/shop";
import User from "./pages/user";
import Offers from "./pages/offers";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import React from "react";

export const App = () => {
  const allRoutes = [
    { path: "/", component: Welcome },
    { path: "/shop", component: Shop },
    { path: "/offers", component: Offers },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/user", component: User },
    { path: "/cart", component: Cart },
  ];

  return (
    <Router>
      <Navigation />
      <Routes>
        {allRoutes.map((e, i) => (
          <Route exact key={i} path={e.path} element={<e.component />}></Route>
        ))}
      </Routes>
    </Router>
  );
};
