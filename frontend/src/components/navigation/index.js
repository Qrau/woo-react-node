import { connect } from "react-redux";
import { setNavState } from "../../redux/actions";
import { CartIcon } from "./cartIcon";
import { NavContainerStyled, NavLinkStyled } from "./elements";
import React from "react";

const Navigation = ({ navState, setNavState, updatedCart, cartItems }) => {
  const navElements = [
    { title: "welcome", path: "/" },
    { title: "shop", path: "/shop" },
    { title: "offers", path: "/offers" },
    { title: "about", path: "/about" },
    { title: "contact", path: "/contact" },
    { title: "user", path: "/user" },
    {
      title: (
        <CartIcon
          color={navState === 6 && "white"}
          filter={navState === 6 && "invert()"}
          counts={cartItems.length}
        />
      ),
      path: "/cart",
    },
  ];
  return (
    <NavContainerStyled>
      {navElements.map((e, i) => {
        return (
          <NavLinkStyled
            key={i}
            active={navState + 1}
            onClick={() => {
              setNavState(i);
            }}
            to={e.path}
          >
            {e.title}
          </NavLinkStyled>
        );
      })}
    </NavContainerStyled>
  );
};

const mapStateToProps = (state) => ({
  navState: state.navState,
  cartItems: state.cartItems,
  updatedCart: state.updatedCart,
});

const mapDispatchToProps = {
  setNavState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
